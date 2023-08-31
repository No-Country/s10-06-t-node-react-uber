import { PiUserListFill } from 'react-icons/pi'
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
        <div className='absolute left-0 right-0 top-24 mx-6 flex flex-col items-center rounded-3xl bg-[#FCFCFD] shadow-md transition-all md:left-auto md:right-16 md:mx-0 md:h-[617px] md:w-[660px] lg:right-24'>
          <div className='flex w-full items-center justify-between rounded-3xl border-b border-b-[#E4E7EC] bg-[#F9FAFB] px-16 py-8 sm:px-20'>
            <button className='flex w-32 flex-col items-center gap-2 font-medium leading-4 text-primary'>
              <PiUserListFill className='text-4xl' />
              Registrarse como conductor
            </button>
            <button className='flex w-32 flex-col items-center gap-2 font-medium text-gray duration-500 hover:text-dark'>
              <BsFillCarFrontFill className='text-2xl' />
              Transporte
            </button>
          </div>

          <div className='w-full px-14 py-12'>
            <h3 className='pb-3 text-24 font-bold sm:pb-0 sm:text-36 md:leading-[64px]'>
              Toma el asiento del conductor y comienza a convertir kilómetros en
              efectivo
            </h3>

            <span className='leading-[40px] md:leading-[64px]'>
              Únete a la plataforma líder con vasta red de pasajeros activos.
            </span>

            <div className='flex w-60 flex-col gap-9'>
              <button className='mt-5 rounded-3xl bg-primary px-6 py-3 text-white duration-500 hover:bg-darkGray'>
                Seguir como conductor
              </button>
              <button className='flex items-center justify-start gap-1 border-b-2 border-neutral-300 text-sm text-darkGray duration-500 hover:border-dark'>
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
            Una plataforma para gestionar viajes y entregas locales para su
            negocio.
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
  'https://s3-alpha-sig.figma.com/img/949b/d29e/ff41d2d0c4a63aa72ae16b1a1f61a275?Expires=1693785600&Signature=gdpHLOIWepnMzyDLhqNhsD79-UpwRq3RVCGVI1EcFXk1GHm6lxESD6mTstFqxoybklDgj504ZDImPBMQmI53emzkawKPxUxtc-ZHzsY2meuUnxqoPaGRN-4dhZItwLvMF9Jr5jq8RyGeRpQWFh6b6BMZejkzyBtg9rOpJt1v3TQdy5K6OYVS2hxDiGr~Ke8mMckFO2Ldhz1cKgv8ZeviPqQkSfAo7bb5YiBg1k4HFAtSmHzup52fqmmj~BDd-fFzWqB1KyEdmUoLqhDUD7HLgmi0PhRBM1GOYUjkpHF3hb~3f7byOukbSPlHCoZwuwUkLYjqW17VbrB2D0fZQVwqgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

const landingImageUrl2 =
  'https://s3-alpha-sig.figma.com/img/516a/4e34/f0db9d7c64a2407ffe4bf7883fe6f3d1?Expires=1693785600&Signature=VCMXFcPUgY56fLMoh2Z0IIdEXb~hsXtVL8RLR0rl-bbIU5~2RQhJRjHkR3lUjGtq32yt00mebCqC8CAtlKB6kMJP5r1xTTDNYp08GLzq4weVyCgOYHXu0hcQdPLoWx-ffkfpc5Z5zQ68OaW~is9zHR6W0w8gEw7z~8onUYubm-HDwIYjZrFUimBFaHfLWQuyP4-3wSoghGVKGApxw2kOCIAQ~KqC63Z0WQiFLiVi6CaZR6fOlYdnv9iAWfHGV7QRPgjanpawN1bR9k1TwUpm3GzsRJkF9PhBGk~2U3HGD~bxUUztjcx5pn3QeY-9E9paKENS-~RQyx4mq9avoYb5Cg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
