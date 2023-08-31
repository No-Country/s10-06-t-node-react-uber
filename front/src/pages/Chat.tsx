import { type FC } from 'react';
import inConstruction from '../assets/img/en-construccion.png';

export const Chat: FC = () => {
    return (
        <div className='h-[85%] flex flex-col justify-evenly items-center'>
            <h1 className='font-bold text-[20px]'>CHAT</h1>
            <img src={inConstruction} width='300' alt="" />
            <h2 className='font-semibold text-[20px]'>Estamos trabajando en ello...</h2>
        </div>
    );
};