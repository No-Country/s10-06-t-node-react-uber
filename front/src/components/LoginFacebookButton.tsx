import { type FC } from 'react';
import FacebookLogin, { type ReactFacebookLoginInfo } from 'react-facebook-login';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { BASE_URL } from '@/utils/api';

export const LoginFacebookButton: FC = () => {

  const responseFacebook = async (responseFacebook: ReactFacebookLoginInfo): Promise<void> => {

    const nameParts = responseFacebook.name ? responseFacebook.name.split(' ') : [];
    let firstName = '';
    let lastName = '';

    if(nameParts.length > 0){
      lastName = nameParts.pop() as string;
      firstName = nameParts.join(' ');
    };

    try {
      const responseApi =  await fetch(`${BASE_URL}/api/registerLogin`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email: responseFacebook.email,
          firstName,
          lastName,
        })
      });

      const data = await responseApi.json();
      
      if(responseApi.ok){
        localStorage.setItem('token', data.token);
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    };
  };

  return (
    <FacebookLogin
      appId='1253400902029705'
      autoLoad={false}
      fields='name, email, picture'
      callback={responseFacebook}
      icon={<BiLogoFacebookCircle size='25' color='#3b5998' />}
      textButton='Iniciar sesión con Facebook'
      cssClass='flex justify-center items-center 
            py-2 rounded border border-zinc-200 gap-2
            shadow w-[217px] h-[38px]
            text-12 text-zinc-500'
    />
  );
};
