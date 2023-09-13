import { type FC, useEffect, useState } from 'react';
import { FaHouse } from 'react-icons/fa6';
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BiSolidPencil } from "react-icons/bi";
import { HeaderTitle } from '@/components/AccountManager/HeaderTitle';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '@/utils/api';
import { useUserId } from '@/context/UserIdContext';

interface Favorite {
    titulo: string;
    direccion: string;
}

export const MyAddresses: FC = () => {

    const [ favorites, setFavorites ] = useState<Favorite[]>([]);

    const navigate = useNavigate();
    const { userId } = useUserId();
    
    useEffect(()=>{
        const getFavorites = async (): Promise<void> => {
            const response = await fetch(`${BASE_URL}/favorito/usuario/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json();

            if(response.ok){
                setFavorites(data);
            }
            else{
                console.error('Error en la solicitud:', data.message);
            }
        }

        void getFavorites();
    },[ userId ]);

    return (
        <div className='h-full px-5 pt-16 relative'>
            <HeaderTitle title={'Mis Direcciones'} link={'/dashboard/account-manager'}/>
            <ul className='pt-5'>
                {
                    favorites.map((favorite, index)=>(
                        <li className='flex justify-between items-center h-[66px] bg-[#CCCCCC] 
                            px-5 rounded-[25px] border border-[#29103A] mt-5'
                            key={index}
                        >   
                            <div className='flex items-center'>
                                {<FaHouse size='25'/>}
                                <div className='pl-2'>
                                    <h2 className='text-[18px]'>{favorite.titulo}</h2>
                                    <p className='text-[#49494A] text-[16px]'>{favorite.direccion.slice(0, 30)}</p>
                                </div>
                            </div>
                            <BiSolidPencil color='#29103A' size='25' />
                        </li>
                    )) 
                }
            </ul>
            <button className='w-full flex items-center h-[66px] bg-[#CCCCCC] 
                px-5 rounded-[25px] border border-[#29103A] capitalize mt-5'
                onClick={() => {navigate('add-address')}}
            >
                <BsFillPlusCircleFill color='#29103A' size='25'/>
                <p className='pl-2 text-[18px]'>agregar dirección</p>
            </button>
            <div className='flex justify-center pt-6'>
                <button type='submit' className='bg-[#29103A] w-[193px] h-[32px] 
                    uppercase rounded-3xl text-[14px] text-white absolute bottom-[5vh]'
                > 
                    confirmar datos
                </button>
            </div>
        </div>
    );
};