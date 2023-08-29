import { type FC, useState } from 'react';
import { FaHouse } from "react-icons/fa6";
import { BiTimeFive } from "react-icons/bi";
import { BsChatLeftTextFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";

interface SectionManagerProps {
    handleSection: (nameSection: string) => void;
}

export const SectionManager: FC<SectionManagerProps> = ({ handleSection }) => {

    const [ nameSection, setNameSection ] = useState('inicio');

    const sectionButtons = [
        {
            name: 'inicio',
            icon: <FaHouse size='28'/>,
            component: 'Home'
        },
        {
            name: 'mi actividad',
            icon: <BiTimeFive size='28'/>,
            component: 'ActivityHistory'
        },
        {
            name: 'chat',
            icon: <BsChatLeftTextFill size='28'/>,
            component: 'Chat'
        },
        {
            name: 'mi cuenta',
            icon: <RiAccountCircleFill size='28'/>,
            component: 'AccountManager'
        }
    ];

    const sectionButtonManager = (name: string, component: string)=>{
        handleSection(component);
        setNameSection(name);
    }

    return (
        <ul className='flex w-full h-[15%] justify-between'>
            {
                sectionButtons.map((section, index)=> (
                    <li className='w-2/6 flex flex-col items-center justify-center'
                        onClick={()=> sectionButtonManager(section.name, section.component)}
                        key={index}
                    >
                        <i className={`${section.name === nameSection && 'bg-slate-300'} 
                            h-10 w-16 flex justify-center items-center rounded-3xl`}
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