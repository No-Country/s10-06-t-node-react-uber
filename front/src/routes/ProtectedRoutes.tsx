import { type FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes: FC = () => {

    const tokenNames = ['facebookAccessToken', 'googleAccessToken', 'appAccessToken'];

    const existingToken = (): boolean => {
        return tokenNames.some(tokenName => {
            const token = localStorage.getItem(tokenName);
            return token !== null && token !== '';
        });
    };

    if(existingToken()){
        return <Outlet />
    } else { 
        return <Navigate to='/login' />
    }                    
};                       