import { type FC } from 'react';
import logo from '@/assets/logo.png'
import { BsCashCoin } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

// SOLO ES UN PROTOTIPO, EN ESPERA DEL REAL.

export const InvoiceModal: FC = () => {
    return (
        <div className='h-screen'>
            <div className="flex flex-col items-center justify-center h-1/3 bg-center bg-[url('../assets/login-elipse.jpg')] text-white rounded-bl-[50px] rounded-br-[50px]">
                <img src={logo} alt="logo-urban-move" />
                <h1 className='uppercase text-xl'>recibo de pago</h1>
            </div>
            <div className='h-[470px] w-[90%] m-auto relative top-[-40px] rounded-[40px] p-5 shadow-3xl z-50h-[470px] w-[90%] m-auto absolute top-[-40px] rounded-[40px] p-5 shadow-3xl z-50 bg-white'>
                <div className='flex justify-between text-[#29103A]'>
                    <h2 className='text-xl font-bold uppercase'>Factura</h2>
                    <i><AiFillCloseCircle size='25'/></i>
                </div>
                <div className='flex justify-between border-b-2 py-5 border-[#29103A]'>
                    <h3 className='font-bold text-xl'>Total</h3>
                    <p className='font-bold text-xl'>ARS 480.00</p> 
                </div>
                <div className='flex justify-between py-5 border-b-[1px] py-5 border-slate-500'>
                    <p>Tarifa de viaje</p>
                    <p>ARS 440.00</p>
                </div>
                <div className='flex-col py-5 border-b-[1px] py-5 border-slate-500'>
                    <div className='flex justify-between'>
                        <p>Subtotal</p>
                        <p>ARS 440.00</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Tarifa de reserva</p>
                        <p>ARS 40.00</p>
                    </div>
                </div>
                <div className='py-5 border-b-[1px] py-5 border-slate-500'>
                    <h3 className='font-semibold'>Payments</h3>
                    <div  className='flex justify-between py-2'>
                        <div className='flex'>
                            <i className='flex items-center justify-center'><BsCashCoin color='green' size='32'/></i>
                            <div className='pl-2'>
                                <p>Cash</p>
                                <p className='text-slate-500'>23/08/2023 8:07 AM</p>
                            </div>
                        </div>
                        <p className='font-semibold'>ARS 480.00</p>
                    </div>
                </div>
                <div className='flex justify-between py-5'>
                    <p>Distancia recorrida</p>
                    <p>2 km</p>
                </div>
            </div>  
        </div>
        
    );
};