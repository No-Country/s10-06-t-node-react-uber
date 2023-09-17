import { type FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '@/utils/api';
import { useUserId } from '@/context/UserIdContext';
import { OtherFavorites } from '../ShortcutFavorites/OtherFavorites';
import { FaLocationDot } from "react-icons/fa6";

interface Favorite {
    titulo: string;
    direccion: string;
}

export const CustomShortcut: FC = () => {

    const navigate = useNavigate();
    const { userId } = useUserId();
    
    const [ favoritesX3, setFavoritesX3 ] = useState<Favorite[]>([]);
    const [ otherFavorites, setOtherFavorites ] = useState<Favorite[]>([]);

    const [ isMost, setIsMost ] = useState(false);
    
    useEffect(()=>{
        if(userId){
            const getFavorites = async (): Promise<void> => {
                const response = await fetch(`${BASE_URL}/favorito/usuario/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
    
                const data = await response.json();
                
                if(response.ok){
                    setFavoritesX3(data.slice(0, 2));
                    setOtherFavorites(data.slice(2, data.length));
                }
                else{
                    console.error('Error en la solicitud:', data.message);
                }
            }
            void getFavorites();
        }

    },[ userId ]);
    
    const handleShortcut = (address: string): void => {
        localStorage.setItem('finishLocation', address)
        navigate('/select-trip');
    };

    return (
        <ul className='flex justify-evenly'>
            {
                favoritesX3.map((favorite, index)=>(
                    <li className='flex items-center justify-center 
                        gap-2 w-[97px] h-[36px] border rounded-3xl
                        bg-white text-[#29103A] border-[#29103A]'
                        key={index}
                        onClick={()=> {handleShortcut(favorite.direccion)}}
                    >
                        {favorite.titulo.slice(0, 10)}
                    </li>
                ))
                
            } 
            {
                otherFavorites.length > 0 &&
                <li className='flex items-center justify-center 
                    gap-2 w-[97px] h-[36px] border rounded-3xl
                    bg-white text-[#29103A] border-[#29103A] relative' 
                    onClick={()=> {setIsMost(!isMost)}}
                >
                <FaLocationDot color='#29103A' size='20'/>
                <p>Más</p>
                {
                    isMost&&
                        <OtherFavorites
                                otherFavorites={otherFavorites} 
                                handleShortcut={handleShortcut}
                        />
                }
            
            </li>}
        
        </ul>
        
    );
};