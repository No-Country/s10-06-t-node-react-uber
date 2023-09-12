import { type FC } from 'react';


export const CustomShortcut: FC = () => {
    return (
        <div className='flex justify-evenly'>
            <button className='flex items-center justify-center 
                gap-2 w-[97px] h-[36px] border rounded-3xl
                bg-white text-[#29103A] border-[#29103A]'
            >
                Casa
            </button>
            <button className='flex items-center justify-center 
                gap-2 w-[97px] h-[36px] border rounded-3xl
                bg-white text-[#29103A] border-[#29103A]'
            >
                trabajo
            </button>
            <button className='flex items-center justify-center 
                gap-2 w-[97px] h-[36px] border rounded-3xl
                bg-white text-[#29103A] border-[#29103A]'
            >
                Más
            </button>
        </div>
        
    );
};