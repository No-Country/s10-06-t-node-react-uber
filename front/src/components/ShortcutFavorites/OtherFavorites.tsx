import { type FC } from 'react';

interface Favorite {
    titulo: string;
    direccion: string;
}

interface FavoritesProps{
    otherFavorites: Favorite[]; 
    handleShortcut: (direccion: string) => void;
}

export const OtherFavorites: FC<FavoritesProps> = ({ otherFavorites, handleShortcut }) => {
    return (
        <ul className='flex flex-col gap-2 absolute bottom-[6vh]'>
            {
                otherFavorites.map((otherFavorite, index)=>(
                    <li className='flex items-center justify-center 
                        gap-2 w-[97px] h-[36px] border rounded-3xl
                        bg-white text-[#29103A] border-[#29103A]' 
                        key={index}
                        onClick={()=> {handleShortcut(otherFavorite.direccion)}}
                    >
                        {otherFavorite.titulo}
                    </li>
                ))
                }
        </ul>
    );
};