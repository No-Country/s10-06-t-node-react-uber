import { type FC } from 'react';
import { useForm, type SubmitHandler } from "react-hook-form";
import { CampoInputFieldset } from './CampoInputFieldset';
import { AiFillCloseCircle } from "react-icons/ai";

interface ChangePasswordModalProps {
    handleModal: () => void;
}

export const ChangePasswordModal: FC<ChangePasswordModalProps> = ({ handleModal }) => {

    const { register, handleSubmit } = useForm();

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        console.log(formData)
    };

    return (
        <div className='w-[100%] h-[100%] backdrop-blur-lg bg-[#29103A]/30 flex items-center justify-center absolute top-0 left-0'>
            <form className='bg-white p-5 rounded-xl border-[1px] border-[#29103A]'>
                <i className='flex justify-end'>
                    <AiFillCloseCircle size='25' color='#29103A' onClick={()=>{handleModal()}}/>
                </i>
                <CampoInputFieldset label={'Contraseña actual'} fieldName={'contrasena_actual'} register={register} />
                <CampoInputFieldset label={'Contraseña nueva'} fieldName={'nueva_contrasena'} register={register} />
                <CampoInputFieldset label={'Repetir contraseña'} fieldName={'nueva_contrasena'}  register={register} />
                <div className='flex justify-center pt-6'>
                    <button type='submit' className='bg-[#29103A] w-[193px] h-[32px] 
                        uppercase rounded-3xl text-[14px] text-white'
                    > 
                        cambiar contraseña
                    </button>
                </div>
            </form>
        </div>
    );
};