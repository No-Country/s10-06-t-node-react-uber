import { type FC } from 'react'
import FacebookLogin, {
  type ReactFacebookLoginInfo,
} from 'react-facebook-login'
import { BiLogoFacebookCircle } from 'react-icons/bi'

export const LoginFacebookButton: FC = () => {
  const responseFacebook = (response: ReactFacebookLoginInfo): void => {
    if (response.accessToken) {
      localStorage.setItem('facebookAccessToken', response.accessToken)
    }
  }

  return (
    <button>
      <FacebookLogin
        appId='1253400902029705'
        autoLoad={false}
        fields='name,email'
        callback={responseFacebook}
        icon={
          <i>
            <BiLogoFacebookCircle size='25' color='#3b5998' />
          </i>
        }
        textButton='Iniciar sesión con Facebook'
        cssClass='flex justify-center items-center 
                py-2 rounded border border-zinc-200 gap-2
                shadow w-[217px] h-[38px]
                text-12 text-zinc-500'
      />
    </button>
  )
}
