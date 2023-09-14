import { useEffect, type FC, useState } from 'react';
import { CampoInputFieldset } from '@/components/AccountManager/CampoInputFieldset';
import { HeaderTitle } from '@/components/AccountManager/HeaderTitle';
import { useForm, type SubmitHandler } from "react-hook-form";
import { FavoritesMapView } from '@/components/Map/FavoritesMapView';
import { useSelectedCoordinates } from '@/context/SelectedCoordinatesContext';
import { FixedFieldInputs } from '@/components/AccountManager/FixedFieldInputs';
import { BASE_URL } from '@/utils/api';
import { useUserId } from '@/context/UserIdContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Inputs {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date | string;
    nationality: string;
    cellNumber: number | string;
    titulo: string;
    address: string;
};

export const AddAddress: FC = () => {

    const { register, handleSubmit, reset } = useForm<Inputs>();
    const [ address, setAddress ] = useState<string>('');
    
    const { userId } = useUserId();
    
    const { updateSelectedCoordinates, selectedCoordinates, selectedAddress } = useSelectedCoordinates();

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const notify = ()=> toast("Ruta añadida con éxito");

    const submit: SubmitHandler<Inputs> = async (formData) => {
        const addressData = {
            ...formData,
            id_user: userId,
            direccion: selectedAddress,
            coordenadas: selectedCoordinates,
            token: localStorage.getItem('token')
        };
        
        try {
            const response = await fetch(`${BASE_URL}/favorito`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addressData)
            });

            const data = await response.json();

            if(response.ok){
                console.log('Dirección favorita creada con éxito');
                updateSelectedCoordinates(null, null);
                reset();
                notify();
            }
            else{
                console.error('Error al crear la dirección favorita:', data.message)
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    useEffect(()=>{
        setAddress(selectedAddress ?? '');
    },[ selectedAddress ])

    return (
        <form onSubmit={handleSubmit(submit)} 
            className='h-full px-5 pt-2 relative'
        >
            <HeaderTitle title={'Agregar Dirección'} link={'/dashboard/account-manager/my-directions'}/>
            <ToastContainer />
            <div className='pt-5'>
                <CampoInputFieldset label={'Referencia'} holder={'Ingrese una referencia'} fieldName={'titulo'} type={'text'} register={register} />
                <FixedFieldInputs label='Dirección' dataUser={address ?? ''}/>
                <h2 className='h-[28px] bg-[#CCCCCC] flex items-center px-5 mt-5 text-12 text-[#49454F]'>
                    Confirmar mapa
                </h2>
                <div className='h-[177px] relative'>
                    <FavoritesMapView key="map-address"/>
                </div>
            </div>
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