import { type FC } from 'react';
import { HiUserCircle } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { BsCreditCard2Back } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import { GrFormNext } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/context/GoogleAuthContext';

type Profile = {
    name: string,
    icon: React.ReactNode,
    link?: string | undefined
}

export const AccountManager: FC = () => {

    const { user, signOut } = useAuthStore();
    const navigate = useNavigate();

    const profileButtonData: Profile[] = [
        {
            name: 'editar perfil',
            icon: <HiUserCircle color='#29103A' size='25'/>,
            link: 'edit-profile'
        },
        {
            name: 'mis direcciones',
            icon: <FaLocationDot color='#29103A' size='25'/>,
            link: 'my-directions'
        },
        {
            name: 'medios de pago',
            icon: <BsCreditCard2Back color='#29103A' size='25'/>,
            link: ''
        },
        {
            name: 'salir',
            icon: <RxExit color='#E10000' size='25'/>,
        },
    ];

    const handleProfileButtons = (link: string | undefined, sectionName: string)=>{
        link && navigate(link);
        sectionName === 'salir' && signOut();
    }

    return (
        <div className='h-full px-5 pt-16'>
            <h1 className='text-[24px] font-semibold'>Perfil</h1>
            <div className='flex items-center justify-center'>
                <img className='w-[90px] h-[97px] rounded-full bg-slate-300' src="" alt="" />
            </div>
            <h2 className='border-b-[1px] border-[#29103A] text-[24px] text-center py-5 font-semibold'>{user.firstName || 'Gonzalo'} {user.lastName || 'Ramirez'}</h2>
            <ul>
                {
                    profileButtonData.map((profileButton, index)=>(
                        <li className='h-[34px] flex justify-between items-center 
                            px-2 rounded-3xl shadow-lg mt-5 py-5'
                            key={index}
                            onClick={()=> handleProfileButtons(profileButton.link, profileButton.name)}
                        >
                            <div className='flex'>
                                {profileButton.icon}
                                <p className='capitalize pl-3 text-[16px]'>{profileButton.name}</p>
                            </div>
                            <GrFormNext className='font-bold' size='20'/>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    );
};