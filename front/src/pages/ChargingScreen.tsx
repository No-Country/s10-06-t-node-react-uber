import { useEffect, type FC } from 'react';
import street from '../assets/img/street.png';
import conectando from '../assets/img/conectando.png';
import urban from '../assets/img/urban.png';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

export const ChargingScreen: FC = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/about-us');
        }, 3000);
    }, [ navigate ]);

    return (
        <div className="w-screen h-screen bg-[url('../assets/img/fondo-mobile.jpg')] 
            flex flex-col gap-5 items-center relative"
        >   
            <img src={logo} alt="" width='266' className='mt-[130px]'/>
            <img src={urban} alt="" className='mb-[10px]' />
            <img src={conectando} alt=""/>
            <img src={street} alt="" className='w-full absolute bottom-0' />
        </div>
    );
};
