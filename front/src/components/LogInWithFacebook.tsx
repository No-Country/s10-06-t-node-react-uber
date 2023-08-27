import { type FC } from 'react';
import FacebookLogin from 'react-facebook-login';

export const LogInWithFacebook: FC = () => {

    const responseFacebook = (response: object) => {
        console.log(response);
      }

    return (
        <div className='flex justify-center items-center h-[300px] w-screen'>
            <FacebookLogin
                appId="1253400902029705"
                autoLoad={false}
                fields="name,email"
                callback={responseFacebook} 
                textButton=''
                icon='fa-facebook'
                cssClass="
                w-10 h-10 rounded-full
                bg-blue-500 hover:bg-blue-600
                transition duration-300 text-white
                text-[30px]
                "
            />
        </div>
    );
};