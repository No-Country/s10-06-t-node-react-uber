import { type FC } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const MyAddresses: FC = () => {
    return (
        <div className='h-full px-5 pt-16'>
            <div className='flex items-center gap-5'>
                <Link to='/dashboard/account-manager'>
                    <i className='bg-[#CCCCCC] w-[42px] h-[42px] border border-[#29103A]
                        rounded-full flex items-center justify-center'
                    >
                    <AiOutlineArrowLeft color='#29103A' size='20'/>
                    </i>
                </Link>
                <h1 className='text-[24px] font-semibold'>Mis Direcciones</h1>
            </div>
        </div>
    );
};