import { type FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { SectionManager } from '@/components/Dashboard/SectionManager';
import { ActivityHistory } from './ActivityHistory';
import { Chat } from './Chat';
import { AccountManager } from './AccountManager';
import { EditProfile } from './EditProfile';
import { MyAddresses } from './MyAddresses';
import { PaymentMethods } from './PaymentMethods';
import { AddAddress } from './AddAddress';
import { AddPaymentsMethod } from './AddPaymentMethods';

export const Dashboard: FC = () => {
    return (
        <div className='h-screen w-screen'>
            <div className='h-[85%]'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/activity-history' element={<ActivityHistory />} />
                    <Route path='/chat' element={<Chat />} />
                    <Route path='/account-manager' element={<AccountManager />} />
                    <Route path='/account-manager/edit-profile' element={<EditProfile />} />
                    <Route path='/account-manager/my-directions' element={<MyAddresses />} />
                    <Route path='/account-manager/my-directions/add-address' element={<AddAddress />} />
                    <Route path='/account-manager/payment-methods' element={<PaymentMethods />} />
                    <Route path='/account-manager/payment-methods/add-payment-methods' element={<AddPaymentsMethod />} /> 
                </Routes>
            </div>
            <div className='h-[15%]'>
                <SectionManager />
            </div>
        </div>
    );
};

