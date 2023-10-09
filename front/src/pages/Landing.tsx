import { BsFillCarFrontFill, BsArrowUpRight } from 'react-icons/bs'

export const LandingPage: React.FC = () => {
  return (
    <main>
      <section className='relative h-[850px] select-none'>
        <img
          src={landingImageUrl}
          alt='Landing'
          className='h-full w-full bg-no-repeat object-cover object-top'
        />
        <div
          className='absolute left-0 right-0 top-24 mx-6 flex flex-col 
          items-center rounded-3xl border-2 border-lightGray 
          border-opacity-60 shadow-md backdrop-blur-[50px] transition-all 
          md:left-auto md:right-16 md:mx-0 md:h-[426px] md:w-[660px] lg:right-24'
        >
          <div
            className='flex w-full items-center justify-between rounded-3xl 
          px-16 py-8 backdrop-blur-2xl sm:px-20'
          >
            <button
              className='flex flex-col items-center gap-2 
              font-medium text-[#29103A] duration-500 hover:text-white'
            >
              <BsFillCarFrontFill className='text-2xl' />
              Transporte
            </button>
          </div>

          <div className='w-full px-14 py-5'>
            <h3 className='pb-3 text-24 font-bold sm:pb-0 sm:text-36 md:leading-[64px]'>
              ¿A donde vamos?
            </h3>

            <span className='leading-[40px] md:leading-[64px]'>
              Únete a la plataforma líder con vasta red de pasajeros activos.
            </span>

            <div className='flex w-60 flex-col gap-9'>
              <button className='mt-5 h-[46px] w-[134px] rounded-3xl bg-primary px-6 py-3 text-white duration-500 hover:bg-darkGray'>
                Comenzar
              </button>
              <button
                className='text-md flex items-center 
                justify-start gap-1 border-b-2 border-neutral-300 pb-1
               duration-500 hover:border-dark'
              >
                Para más información <BsArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='relative h-[520px] select-none'>
        <img
          src={landingImageUrl2}
          alt='Landing'
          className='h-full w-full object-cover'
        />
        <div className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center px-6'>
          <h1
            className='text-5xl font-bold leading-[64px] text-white'
            style={{
              fontFamily: 'Accia Moderato',
            }}
          >
            URBAN MOVE
          </h1>
          <p
            className='text-center text-18 leading-10 text-white md:text-24 md:leading-[64px]'
            style={{
              fontFamily: 'Montserrat',
            }}
          >
            Una plataforma para gestionar viajes.
          </p>
          <button className='mt-6 rounded-3xl bg-lightGray px-7 py-3'>
            Comenzar
          </button>
        </div>
      </section>
    </main>
  )
}

const landingImageUrl =
  'https://res.cloudinary.com/danjwp1pg/image/upload/v1696828529/urban%20move/v1c2xlbknduxni9hjvdh.webp'

const landingImageUrl2 =
  'https://res.cloudinary.com/danjwp1pg/image/upload/v1696828529/urban%20move/n6z2tnxfaeo4lsfaxrjh.webp'
