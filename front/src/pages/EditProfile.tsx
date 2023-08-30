import { type FC } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const EditProfile: FC = () => {

    const myData = [
        {
            name: 'Nombre',
            info: 'Gonzalo'
        },
        {
            name: 'Apellido',
            info: 'Ramirez'
        },
        {
            name: 'Fecha de nacimiento',
            info: '10/08/1991'
        },
        {
            name: 'Correo electronico',
            info: 'gonzaloramirez@gmail.com'
        },
        {
            name: 'Contraseña',
            contraseña: '********'
        },
        {
            name: 'País',
            info: 'Argentina'
        },
        {
            name: 'Número de teléfono',
            info: '3512342576'
        },
    ]

    return (
        <div className='h-[85%] px-5 pt-16'>
            <div className='flex items-center gap-5'>
                <Link to='/dashboard/account-manager'>
                    <i className='bg-[#CCCCCC] w-[42px] h-[42px] border border-[#29103A]
                        rounded-full flex items-center justify-center'
                    >
                    <AiOutlineArrowLeft color='#29103A' size='20'/>
                    </i>
                </Link>
                <h1 className='text-[24px] font-semibold'>Editar Perfil</h1>
            </div>
            <ul className='pt-2'>
                {
                   myData.map((data, index)=>(
                        <li className='bg-[#CCCCCC] h-[56px] border-b-[1px] border-[#29103A] mt-5 pt-1 
                            px-5 flex items-center'
                            key={index}
                        >
                            <div className='flex flex-col'>
                                <p className='text-[12px]'>{data.name}</p>
                                <p className='text-[16px]'>{data.info}</p>
                            </div>
                        </li>
                   ))     
                }
                <div className='flex justify-center pt-8'>
                    <button className='bg-[#29103A] w-[193px] h-[32px] 
                        uppercase rounded-3xl text-[14px] text-white'
                    > 
                        confirmar datos
                    </button>
                </div>
            </ul>
        </div>
    );
};