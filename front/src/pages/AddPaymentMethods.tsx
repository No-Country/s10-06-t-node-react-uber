import { HeaderTitle } from '@/components/AccountManager/HeaderTitle';
import { type FC } from 'react';
import { SiMercadopago } from "react-icons/si";
import { BsCreditCard2Back } from "react-icons/bs";

export const AddPaymentsMethod: FC = () => {
    return (
        <div className='h-full px-5 pt-2 relative'>
            <HeaderTitle title={'Agregar medio de pago'} link={'/dashboard/account-manager/payment-methods'}/>
            <div className='flex justify-between items-center h-[66px] bg-[#CCCCCC] 
                px-5 rounded-[25px] border border-[#29103A] mt-10 shadow-lg'
            >   
                <div className='flex items-center'>
                    <SiMercadopago size='25' />
                    <div className='pl-2'>
                        <h2 className='text-[18px]'>Mercado Pago</h2>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center h-[66px] bg-[#CCCCCC] 
                px-5 rounded-[25px] border border-[#29103A] mt-5 shadow-lg'
            >   
                <div className='flex items-center'>
                    <BsCreditCard2Back color='#29103A' size='25'/>,
                    <div className='pl-2'>
                        <h2 className='text-[18px]'>Tarjeta de débito/crédito</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};