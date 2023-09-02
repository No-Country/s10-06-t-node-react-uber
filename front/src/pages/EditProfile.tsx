import { type FC, useState, useEffect } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/context/GoogleAuthContext';
import { useForm, type SubmitHandler } from "react-hook-form";
import { CampoInputFieldset } from '@/components/AccountManager/CampoInputFieldset';
import { FixedFieldInputs } from '@/components/AccountManager/FixedFieldInputs';
import { BASE_URL } from '@/utils/api';
import { fetchData } from '@/utils/getUserById';

interface Inputs {
    firstName: string,
    lastName: string,
    email: string,
    dateOfBirth: Date | string,
    nationality: string,
    cellNumber: number | string
};

interface UserData {
    firstName: string,
    lastName: string,
    email: string,
    dateOfBirth: string | null,
    dateOfBirthUnformatted: Date,
    nationality: string | null,
    cellNumber: string | null
};

export const EditProfile: FC = () => {

    const [ data, setData ] = useState<UserData | null>(null);

    useEffect(() => {
        async function fetchDataAndSetData(): Promise<void> {
            const fetchedData = await fetchData();
            setData(fetchedData);
        }
        void fetchDataAndSetData();
    }, []);
    
    const { user } = useAuthStore();
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        
        const  { dateOfBirth, nationality, cellNumber } = formData;
        
        const dataUser = {
            dateOfBirth: dateOfBirth !== ''? dateOfBirth : data?.dateOfBirthUnformatted,
            nationality: nationality !== ''? nationality : data?.nationality ,
            cellNumber: cellNumber !== ''? Number(cellNumber) : data?.cellNumber,
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            token: localStorage.getItem('token')
        };
       
        try{
            const response = await fetch(`${BASE_URL}/users/editarUsuario`, {
                method: 'PATCH',
                headers: {
                    'Content-Type':'application/json' 
                },
                body: JSON.stringify(dataUser)
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Actualizado con éxito'); 
                const fetchedData = await fetchData();
                setData(fetchedData);
            } else {
                console.error('Error al actualizar el usuario:', data.message);
            }  
        } catch (error) {
            console.error('Error en la solicitud:', error);
        };
    };

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
            <form className='pt-2' onSubmit={handleSubmit(onSubmit)}>
                <FixedFieldInputs label={'Nombre'} dataUser={user?.firstName ?? data?.firstName ?? ''}/>
                <FixedFieldInputs label={'Apellido'} dataUser={user?.lastName ?? data?.lastName ?? ''}/>
                {
                    data?.dateOfBirth !== null?
                    <FixedFieldInputs label={"Fecha de nacimiento"}  dataUser={data?.dateOfBirth ?? ''}/>
                    :
                    <CampoInputFieldset label={"Fecha de nacimiento"} fieldName={'dateOfBirth'}  type={"date"} register={register} />
                }
                <FixedFieldInputs label={'Correo electrónico'} dataUser={user?.email ?? data?.email ?? ''}/>
                <FixedFieldInputs label={'Contraseña'} dataUser={'*********'}/>
                <CampoInputFieldset label={"País"} value={data?.nationality ?? ''} fieldName={'nationality'}  type={"text"} register={register} />
                <CampoInputFieldset label={"Número de teléfono"} value={data?.cellNumber ?? ''} fieldName={'cellNumber'}  type={"number"} register={register} />
                <div className='flex justify-center pt-6'>
                    <button type='submit' className='bg-[#29103A] w-[193px] h-[32px] 
                        uppercase rounded-3xl text-[14px] text-white'
                    > 
                        confirmar datos
                    </button>
                </div>
            </form>
        </div>
    );
};