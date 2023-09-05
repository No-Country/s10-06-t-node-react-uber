import { type FC } from 'react';
import { CampoInputFieldset } from '@/components/AccountManager/CampoInputFieldset';
import { HeaderTitle } from '@/components/AccountManager/HeaderTitle';
import { useForm, type SubmitHandler } from "react-hook-form";

interface Inputs {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date | string;
    nationality: string;
    cellNumber: number | string;
};

export const AddAddress: FC = () => {

    const { register, handleSubmit } = useForm<Inputs>();

    const submit: SubmitHandler<Inputs> = async (formData) => {
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit(submit)} 
            className='h-full px-5 pt-16 relative'
        >
            <HeaderTitle title={'Agregar Dirección'} link={'/dashboard/account-manager/my-directions'}/>
            <CampoInputFieldset label='Referencia' fieldName='cellNumber' type='text' register={register} />
            <CampoInputFieldset label='Dirección' fieldName='cellNumber' type='text' register={register} />
            <div className='flex justify-center pt-6'>
                <button type='submit' className='bg-[#29103A] w-[193px] h-[32px] 
                    uppercase rounded-3xl text-[14px] text-white absolute bottom-[5vh]'
                > 
                    agregar dirección
                </button>
            </div>
        </form>
    );
};