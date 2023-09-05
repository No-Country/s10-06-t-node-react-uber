import { type FC } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

interface Header{
    link: string;
    title: string;
};

export const HeaderTitle: FC<Header> = ({ link, title }) => {
    return (
        <div className='flex items-center gap-5'>
            <Link to={link}>
                <i className='bg-[#CCCCCC] w-[42px] h-[42px] border border-[#29103A]
                    rounded-full flex items-center justify-center'
                >
                    <AiOutlineArrowLeft color='#29103A' size='25'/>
                </i>
            </Link>
            <h1 className='text-[24px] font-semibold'>{title}</h1>
        </div>
    );
};
