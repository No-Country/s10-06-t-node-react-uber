// import { type FC } from 'react';
// import { useForm, type SubmitHandler } from "react-hook-form";
// import { CampoInputFieldset } from './CampoInputFieldset';
// import { AiFillCloseCircle } from "react-icons/ai";

// interface ChangePasswordModalProps {
//     handleModal: () => void;
// }

// interface Inputs {
//     firstName: string;
//     lastName: string;
//     email: string;
//     dateOfBirth: Date | string;
//     nationality: string;
//     cellNumber: number | string;
//     titulo: string;
//     contrasena_actual: string;
//     constrasena_nueva: string;
// };

// export const ChangePasswordModal: FC<ChangePasswordModalProps> = ({ handleModal }) => {

//     const { register } = useForm();

//     // const submit: SubmitHandler<Inputs> = async (formData) => {
//     //     console.log(formData)
//     // };

//     return (
//         <div className='w-[100%] h-[100%] backdrop-blur-lg bg-[#29103A]/30 flex items-center justify-center absolute top-0 left-0'>
//             <form className='bg-white p-5 rounded-xl border-[1px] border-[#29103A]'>
//                 <i className='flex justify-end'>
//                     <AiFillCloseCircle size='25' color='#29103A' onClick={()=>{handleModal()}}/>
//                 </i>
//                 <CampoInputFieldset label={'Contraseña actual'} type={'text'} fieldName={'contrasena_actual'} register={register} />
//                 <CampoInputFieldset label={'Contraseña nueva'} type={'text'} fieldName={'nueva_contrasena'} register={register} />
//                 <CampoInputFieldset label={'Repetir contraseña'} type={'text'}  fieldName={'nueva_contrasena'}  register={register} />
//                 <div className='flex justify-center pt-6'>
//                     <button type='submit' className='bg-[#29103A] w-[193px] h-[32px] 
//                         uppercase rounded-3xl text-[14px] text-white'
//                     > 
//                         cambiar contraseña
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

import { type FC } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ChangePasswordModalProps {
    handleModal: () => void;
}

export const ChangePasswordModal: FC<ChangePasswordModalProps> = ({ handleModal }) => {

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const notify = ()=> toast("Contraseña exitosamente cambiada.");

    const handleSubmit = (event: { preventDefault: () => void; }): void =>{
        event.preventDefault();
        notify();
        setTimeout(()=>{
            handleModal();
        }, 2000);
    }
    
    return (
        <div className='w-[100%] h-[100%] backdrop-blur-lg bg-[#29103A]/30 flex items-center justify-center absolute top-0 left-0'>
            <ToastContainer />
            <form onSubmit={handleSubmit} className='bg-white p-5 rounded-xl border-[1px] border-[#29103A]'>
                <i className='flex justify-end'>
                    <AiFillCloseCircle size='25' color='#29103A' onClick={()=>{handleModal()}}/>
                </i>
                <fieldset className='bg-[#CCCCCC] h-[56px] border-b-[1px] text-14
                text-[#49454F] border-[#29103A] mt-5 pt-1 px-5 flex flex-col justify-center'
                >
                    <label htmlFor='Contraseña_actual'>Contraseña actual</label>
                    <input type='password' id='Contraseña actual'
                        required
                        placeholder='Contraseña actual' 
                        className='bg-[#CCCCCC] border-none p-0 text-[16px] text-[#1D1B20]' 
                    />
                </fieldset>
                <fieldset className='bg-[#CCCCCC] h-[56px] border-b-[1px] text-14
                text-[#49454F] border-[#29103A] mt-5 pt-1 px-5 flex flex-col justify-center'
                >
                    <label htmlFor='Contraseña_nueva'>Contraseña nueva</label>
                    <input type='password' id='Contraseña_nueva'
                        required
                        placeholder='Nueva contraseña' 
                        className='bg-[#CCCCCC] border-none p-0 text-[16px] text-[#1D1B20]' 
                    />
                </fieldset>
                <fieldset className='bg-[#CCCCCC] h-[56px] border-b-[1px] text-14
                text-[#49454F] border-[#29103A] mt-5 pt-1 px-5 flex flex-col justify-center'
                >
                    <label htmlFor='repetir_contraseña'>Repetir contraseña</label>
                    <input type='password' id='repetir_contraseña'
                        required
                        placeholder='Repetir nueva contraseña' 
                        className='bg-[#CCCCCC] border-none p-0 text-[16px] text-[#1D1B20]' 
                    />
                </fieldset> 
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