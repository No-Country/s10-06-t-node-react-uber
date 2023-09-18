import { type FC } from 'react';
import { BiSolidPencil } from "react-icons/bi";

interface FixedField {
  label: string,
  dataUser: string
}

export const FixedFieldInputs: FC<FixedField> = ({ label, dataUser }) => {
  return (
    <div className='bg-[#CCCCCC] h-[56px] border-b-[1px] 
      border-[#29103A] mt-5 pt-1 rounded-t-[5px]
      px-5 flex items-center justify-between w-full'
    >
      <div className='flex flex-col'>
          <p className='text-12 text-[#49454F]'>{label}</p>
          <p className='text-[16px] text-[#1D1B20]'>{dataUser}</p>
      </div>
      {
        label === 'Contraseña' && <BiSolidPencil size='25' color='#29103A'/>
      }
    </div>
  );
};