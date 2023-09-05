import { HeaderTitle } from '@/components/AccountManager/HeaderTitle';
import { type FC } from 'react';

export const AddPaymentsMethod: FC = () => {
    return (
        <div className='h-full px-5 pt-16 relative'>
            <HeaderTitle title={'Agregar medio de pago'} link={'/dashboard/account-manager/payment-methods'}/>
            
        </div>
    );
};