import { type FC } from 'react';
import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';

interface CampoInputFieldsetProps {
  label: string,
  type: string, 
  value?: string,
  fieldName: "firstName" | "lastName" | "email" | "dateOfBirth" | "nationality" | "cellnumber";
  register: (name: "firstName" | "lastName" | "email" | "dateOfBirth" | "nationality" | "cellnumber", options?: RegisterOptions) => UseFormRegisterReturn;
}

export const CampoInputFieldset: FC<CampoInputFieldsetProps> = ({ label, value, type,  register, fieldName }) => {
  return (
    <fieldset className='bg-[#CCCCCC] h-[56px] border-b-[1px] border-[#29103A] mt-5 pt-1 px-5 flex flex-col justify-center'>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} defaultValue={value} className='bg-[#CCCCCC]' {...register(fieldName)} />
    </fieldset>
  );
};
