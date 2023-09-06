import { type FC } from 'react';
import { FaHouse } from 'react-icons/fa6';
import { BsFillBriefcaseFill, BsFillPlusCircleFill } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { BiSolidPencil } from "react-icons/bi";
import { HeaderTitle } from '@/components/AccountManager/HeaderTitle';
import { useNavigate } from 'react-router-dom';

export const MyAddresses: FC = () => {

    const addresses = [
        {
            location: 'Casa',
            address: 'Rafael Nuñez 1972',
            icon: <FaHouse color='#29103A' size='25' />
        },
        {
            location: 'Trabajo',
            address: 'Av General Paz 760',
            icon: <BsFillBriefcaseFill color='#29103A' size='25' />
        },
        {
            location: 'Gimnasio',
            address: 'Ricardo Pedroni 8102',
            icon: <CgGym color='#29103A' size='25' />
        }
    ];

    const navigate = useNavigate();

    return (
        <div className='h-full px-5 pt-16 relative'>
            <HeaderTitle title={'Mis Direcciones'} link={'/dashboard/account-manager'}/>
            <ul className='pt-5'>
                {
                    addresses.map((address, index)=>(
                        <li className='flex justify-between items-center h-[66px] bg-[#CCCCCC] 
                            px-5 rounded-[25px] border border-[#29103A] mt-5'
                            key={index}
                        >   
                            <div className='flex items-center'>
                                {address.icon}
                                <div className='pl-2'>
                                    <h2 className='text-[18px]'>{address.location}</h2>
                                    <p className='text-[#49494A] text-[16px]'>{address.address}</p>
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