import { type FC, useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from "react-hook-form";
import { CampoInputFieldset } from '@/components/AccountManager/CampoInputFieldset';
import { FixedFieldInputs } from '@/components/AccountManager/FixedFieldInputs';
import { BASE_URL } from '@/utils/api';
import { fetchData } from '@/utils/getUserById';
import { HeaderTitle } from '@/components/AccountManager/HeaderTitle';
import { ChangePasswordModal } from '@/components/AccountManager/ChangePasswordModal';

interface Inputs {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date | string;
    nationality: string;
    cellNumber: number | string;
    titulo: string;
};

interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string | null;
    dateOfBirthUnformatted: Date;
    nationality: string | null;
    cellNumber: string | null;
};

export const EditProfile: FC = () => {

    const [ data, setData ] = useState<UserData | null>(null);
    const [ modal, setModal ] = useState(false);

    useEffect(() => {
        const fetchDataAndSetData = async (): Promise<void> => {
            const fetchedData = await fetchData();
            setData(fetchedData);
        }
        void fetchDataAndSetData();
    }, []);

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        
        const  { dateOfBirth, nationality, cellNumber } = formData;
        
        const dataUser = {
            dateOfBirth: dateOfBirth !== ''? dateOfBirth : data?.dateOfBirthUnformatted,
            nationality: nationality !== ''? nationality : data?.nationality ,
            cellNumber: cellNumber !== ''? Number(cellNumber) : data?.cellNumber,
            firstName: data?.firstName,
            lastName: data?.lastName,
            email: data?.email,
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

    const handleModal = (): void =>{
        setModal(!modal)
    }

    return (
        <div className='h-full px-5 pt-2 relative'>
            {
                modal && <ChangePasswordModal handleModal={handleModal} />
            }
            <HeaderTitle title='Editar perfil' link='/dashboard/account-manager' />
            <form className='pt-1' onSubmit={handleSubmit(onSubmit)}>
                <FixedFieldInputs label={'Nombre'} dataUser={`${data?.firstName} ${data?.lastName}` ?? ''}/>
                {
                    data?.dateOfBirth !== null?
                    <FixedFieldInputs label={"Fecha de nacimiento"}  dataUser={data?.dateOfBirth ?? ''}/>
                    :
                    <CampoInputFieldset label={"Fecha de nacimiento"} fieldName={'dateOfBirth'}  type={"date"} register={register} />
                }
                <FixedFieldInputs label={'Correo electrónico'} dataUser={data?.email ?? data?.email ?? ''}/>
                <button type='button' className='w-full' onClick={()=> {handleModal()}}>
                    <FixedFieldInputs label={'Contraseña'} dataUser={'*********'}/>
                </button>
                {
                    data?.nationality !== null?
                    <FixedFieldInputs label={"País"}  dataUser={data?.nationality ?? ''}/>
                    :
                    <CampoInputFieldset label={"País"} fieldName={'nationality'}  type={"text"} register={register} />
                }
                <CampoInputFieldset label={"Número de teléfono"} value={data?.cellNumber ?? ''} fieldName={'cellNumber'}  type={"number"} register={register} />
                <div className='flex justify-center pt-8'>
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