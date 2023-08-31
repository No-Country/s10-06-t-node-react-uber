import { type FC } from 'react';
import { AccessHomeButtons } from '@/components/Home/AccessHomeButtons';
import { CustomShortcut } from '@/components/Home/CustomShortcut';
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom"

export const Home: FC = () => {
    return (
        <div className="h-full w-full bg-center bg-cover bg-[url('../assets/img/map.jpg')] relative">
            <div className='flex justify-between relative top-20 px-5'>
                <AccessHomeButtons icon={'MENU'} />
                <div className='flex gap-3'>
                    <AccessHomeButtons icon={'SETTING'} />
                    <AccessHomeButtons icon={'DISCOUNT'} />
                </div>
            </div>
            <div className='absolute bottom-[40vw] right-[5vw]'>
                <AccessHomeButtons icon={'LOCATION'} /> 
            </div>
            <div className='w-full px-5 absolute bottom-0'>
                <CustomShortcut />
                <Link to="/settrip" className='flex items-center w-full h-12
                    bg-slate-200 border text-[#49454F] px-5 my-5
                    rounded-3xl gap-5'
                >
                    <BiSearch/>
                    Solicitar un viaje
                </Link>
            </div>
        </div>
    );
};