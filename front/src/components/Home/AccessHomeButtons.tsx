import { type FC } from 'react'
import { AiOutlineMenu, AiTwotoneSetting } from 'react-icons/ai'
import { CiPercent } from 'react-icons/ci'
import { BiCurrentLocation } from 'react-icons/bi'

interface AccessHomeButtonsProps {
  icon: string
  modal?: string
}

export const AccessHomeButtons: FC<AccessHomeButtonsProps> = ({
  icon,
}) => {
  const iconComponents: Record<string, JSX.Element> = {
    MENU: <AiOutlineMenu size='25' />,
    SETTING: <AiTwotoneSetting size='25' />,
    DISCOUNT: <CiPercent size='25' />,
    LOCATION: <BiCurrentLocation size='25' />,
  }

  return (
    <button
      className='flex h-[42px] w-[42px] items-center justify-center rounded-full
            border border-[#29103A] bg-slate-300'
    >
      {iconComponents[icon]}
    </button>
  )
}
