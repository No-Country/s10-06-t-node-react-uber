import { type FC } from 'react';
import { FaHouse } from "react-icons/fa6";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BiSolidMap } from "react-icons/bi";

export const CustomShortcut: FC = () => {
    return (
        <div className='flex justify-evenly'>
            <button className='flex items-center justify-center 
                gap-2 w-[97px] h-[36px] border rounded-3xl
                bg-white text-[#29103A] border-[#29103A]'
            >
                <FaHouse />
                Casa
            </button>
            <button className='flex items-center justify-center 
                gap-2 w-[97px] h-[36px] border rounded-3xl
                bg-white text-[#29103A] border-[#29103A]'
            >
                <BsFillBriefcaseFill />
                trabajo
            </button>
            <button className='flex items-center justify-center 
                gap-2 w-[97px] h-[36px] border rounded-3xl
                bg-white text-[#29103A] border-[#29103A]'
            >
                <BiSolidMap />
                Más
            </button>
        </div>
        
    );
};