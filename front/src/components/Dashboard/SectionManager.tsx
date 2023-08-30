import { type FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { BiTimeFive } from "react-icons/bi";
import { BsChatLeftTextFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";

export const SectionManager: FC = () => {

    const [ nameSection, setNameSection ] = useState('inicio');

    const navigate = useNavigate();

    const sectionButtons = [
        {
            name: 'inicio',
            icon: <FaHouse size='28'/>,
            link: '/dashboard'
        },
        {
            name: 'mi actividad',
            icon: <BiTimeFive size='28'/>,
            link: 'activity-history'
        },
        {
            name: 'chat',
            icon: <BsChatLeftTextFill size='28'/>,
            link: 'chat'
        },
        {
            name: 'mi cuenta',
            icon: <RiAccountCircleFill size='28'/>,
            link: 'account-manager'
        }
    ];

    const sectionButtonManager = (name: string, link: string)=>{
        setNameSection(name);
        navigate(link);
    }

    return (
        <ul className='flex w-full h-full justify-between items-center bg-[#E8DEF8]'>
            {
                sectionButtons.map((section, index)=> (
                    <li className='w-2/6 flex flex-col items-center justify-center'
                        onClick={()=> sectionButtonManager(section.name, section.link)}
                        key={index}
                    >
                        <i className={`${section.name === nameSection && 'bg-slate-300'} 
                            h-10 w-16 flex justify-center items-center rounded-3xl shadow-3xl`}
                        >
                            {section.icon}
                        </i>
                        <p className='capitalize pt-2'>{section.name}</p>
                    </li>
                ))
            }
        </ul>
    );
};