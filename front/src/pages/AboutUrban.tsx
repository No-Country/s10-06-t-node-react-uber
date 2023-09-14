import { useState, type FC } from 'react';
import city from '../assets/img/city.jpg';
import person from '../assets/img/person.png';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

export const AboutUrban: FC = () => {

    const[ changeState, setChangeStage ] = useState(true);
    const navigate = useNavigate();

    setTimeout(()=>{
        setChangeStage(false);
    }, 4000);
    
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center relative'>
            <img src={person} alt="model-person" className='w-full absolute top-0 z-10'/>
            <img src={city} alt="urban-city" className='w-full absolute bottom-0' />
            <img src={logo} alt="" className='z-20 w-[198px]'/>
            <div className='w-[328px] h-[291px] bg-[#F6F6F6] z-20 rounded-[30px]
                flex flex-col items-center m-5 shadow-lg'
            >
                <h1 className='text-[24px] uppercase  text-[#29103A] 
                    pt-16 text-center tracking-tighter font-bold drop-shadow-lg'
                >
                    urban move
                </h1>
                {
                    changeState?
                    <p className='text-[16px] text-[#29103A] pt-12 px-2 text-center tracking-wider'>
                        Una plataforma para gestionar viajes y entregas locales para su negocio.
                    </p>
                    :
                    <p className='text-[16px] text-[#29103A] pt-12 px-5 text-center tracking-wider'>
                        Únete a la plataforma líder con una vasta red de pasajeros activos.
                    </p>
                }
                <div className='flex gap-3 pt-12'>
                    <div className={`w-[10px] h-[10px] rounded-full
                        ${changeState? 'bg-[#29103A]': 'bg-[#2f123e7a]'}`}
                    />
                    <div className={`w-[10px] h-[10px] rounded-full
                        ${changeState? 'bg-[#2f123e7a]': 'bg-[#29103A]'}`}
                    />
                </div>
            </div>
            <div className='flex justify-center pt-8 z-20 absolute bottom-10'>
                <button type='submit' className='bg-white w-[160px] h-[32px] 
                    uppercase rounded-3xl text-12 text-black tracking-[2px]'
                    onClick={()=> {navigate('/login')}}
                > 
                    comenzar
                </button>
            </div>
        </div>
    );
};