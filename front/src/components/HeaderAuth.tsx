import { Link } from 'react-router-dom'
export const HeaderAuth: React.FC = () => {
  return (
    <div className='align-center relative flex items-center bg-center'>
      <Link to='/'>
        <div className='h-[284px] w-[360px] text-white'>
          <img
            className='absolute left-0 top-0 h-[360px] w-[360px]'
            alt='Ellipse'
            src='https://generation-sessions.s3.amazonaws.com/4312a83e34b65680c6affa9f9593c406/img/ellipse-28.svg'
          />
          <img
            className='absolute left-[74px] top-[62px] h-[76px] w-52 object-cover'
            alt='Logo'
            src='https://generation-sessions.s3.amazonaws.com/4312a83e34b65680c6affa9f9593c406/img/logo@2x.png'
          />
          <div className='relative'>
            <div className='font-graduate jtext-center absolute left-[79px] top-[138px] flex h-[100px] w-[211px] flex-col gap-[6px] text-[17px]'>
              CONECTANDO CIUDADES
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='206'
                height='6'
                viewBox='0 0 206 6'
                fill='none'
              >
                <path
                  d='M1 2.5C0.723858 2.5 0.5 2.72386 0.5 3C0.5 3.27614 0.723858 3.5 1 3.5L1 2.5ZM206 2.99998L201 0.113231L201 5.88673L206 2.99998ZM1 3.5L201.5 3.49998L201.5 2.49998L1 2.5L1 3.5Z'
                  fill='white'
                />
              </svg>
              <span className='text-center'>ACERCANDO DESTINOS</span>
            </div>
          </div>
        </div>
      </Link>
      <div className='z-10 flex flex-col items-center justify-center text-white'></div>
    </div>
  )
}
