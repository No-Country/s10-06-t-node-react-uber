import { HeaderTitle } from '@/components/AccountManager/HeaderTitle';
import { useEffect, type FC, useState } from 'react';
import ellipse_lg from '../assets/img/ellipse-lg.png';
import ellipse_md from '../assets/img/ellipse-md.png';
import ellipse_sm from '../assets/img/ellipse-sm.png';
import { HiUserCircle } from "react-icons/hi";
import { MdLocationPin, MdOutlineWatchLater } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export const LookingForDriver: FC = () => {

    const navigate = useNavigate();

    const [ isCancel, setIsCancel ] = useState(false);

    const cancelTrip = (): void =>{
        setIsCancel(true);
        navigate('/set-trip');
    };

    useEffect(()=> {

        const nextPage = setTimeout(()=>{
            navigate('/driver-info')
        }, 5000);
        
        if(isCancel){
            clearTimeout(nextPage)
        };

        
    }, [ navigate, isCancel ]);

    return (
        <div className="w-full h-screen bg-[#E0DBD5] bg-[url(../assets/img/vector.png)] 
            bg-contain bg-no-repeat px-5 pt-16 flex flex-col justify-between"
        >
            <div>
                <HeaderTitle link={'/payment'} title={'Estamos buscando un chofer'}/>
                <p className='text-center text-[#858585] text-[14px]'>Esto puede tardar unos segundos</p>
            </div>
            <div className='h-[70%] flex flex-col items-center justify-between'>
                <div className='w-[289px] h-[289px] relative'>
                    <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={ellipse_sm} alt="" />
                    <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={ellipse_lg} alt="" />
                    <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={ellipse_md} alt="" />
                    <div className='flex items-center justify-center rounded-full
                        absolute top-1/2 left-1/2 transform rotate-0 -translate-x-1/2 -translate-y-1/2'
                    >
                        <HiUserCircle color='#29103A' size='100'/>
                    </div>
                </div>
                <div className='flex justify-between px-8 items-center bg-white w-[301.31px] h-[50px] rounded-3xl shadow-lg'>
                    <p className='flex items-center'><span className='pr-4'><MdLocationPin color='#29103A' size='20' /></span>3k</p>
                    <p className='flex items-center'><span className='pr-4'><MdOutlineWatchLater color='#29103A' size='20' /></span>12m</p>
                    <p className='flex items-center'><span className='pr-4'><FaDollarSign color='#29103A' size='20' /></span>1000</p>
                </div>
                <button className='bg-[#E0DBD5] w-[247px] h-[60px] 
                    rounded-3xl mb-8 shadow-lg flex items-center px-8'
                    onClick={cancelTrip}
                >
                    <div className='bg-[#29103A] w-[50px] h-[50px] rounded-full mr-5 flex items-center justify-center'>
                        <AiFillCloseCircle color='white' size='35'/>
                    </div>
                    <p>Cancelar</p>
                </button>
            </div>
        </div>
    );
};