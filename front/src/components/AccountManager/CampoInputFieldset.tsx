import { type FC } from 'react';
import { type RegisterOptions, type UseFormRegisterReturn } from 'react-hook-form';

interface CampoInputFieldsetProps {
  label: string;
  type: string;
  value?: string;
  fieldName: "firstName" | "lastName" | "email" | "dateOfBirth" | "nationality" | "cellNumber" | "titulo";
  register: (name: "firstName" | "lastName" | "email" | "dateOfBirth" | "nationality" | "cellNumber" | "titulo", options?: RegisterOptions) => UseFormRegisterReturn;
  holder?: string;
};

export const CampoInputFieldset: FC<CampoInputFieldsetProps> = ({ label, value, type,  register, fieldName, holder }) => {
  
  return (
    <fieldset className='bg-[#CCCCCC] h-[56px] border-b-[1px] text-12
      text-[#49454F] border-[#29103A] mt-5 pt-1 px-5 flex flex-col justify-center'
    >
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} 
        required
        placeholder={holder}
        defaultValue={value} 
        className='bg-[#CCCCCC] border-none p-0 text-[16px] text-[#1D1B20]' 
        {...register(fieldName)} 
      />
    </fieldset>
  );
};
