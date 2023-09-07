import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiMercadopago } from "react-icons/si";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BiSolidPencil } from "react-icons/bi";
import { HeaderTitle } from '@/components/AccountManager/HeaderTitle';

export const PaymentMethods: FC = () => {

  const navigate = useNavigate();

  const payMethods = [
    {
        location: 'Mercadopago',
        address: 'gonzaloramirez@gmail.com',
        icon: <SiMercadopago size='25' />
    },
    {
        location: 'Débito',
        address: '****6789',
        icon: <RiVisaLine color='#29103A' size='25' />
    },
    {
        location: 'Crédito',
        address: '****3409',
        icon: <FaCcMastercard color='#29103A' size='25' />
    },
  ];

  return (
    <div className='h-full px-5 pt-16 relative'>
      <HeaderTitle title='Medios de pago' link='/dashboard/account-manager' />
      <ul className='pt-5'>
        {
          payMethods.map((address, index)=>(
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
        px-5 rounded-[25px] border border-[#29103A] mt-5'
        onClick={()=> { navigate('add-payment-methods') }}
      >
        <BsFillPlusCircleFill color='#29103A' size='25'/>
        <p className='pl-2 text-[18px]'>Agregar medio de pago</p>
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