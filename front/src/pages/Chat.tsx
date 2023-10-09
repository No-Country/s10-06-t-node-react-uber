import { useState, useRef, useEffect } from 'react'
import { type ChatCardProps } from '@/components/Chat/ChatCard'
import { ChatsContainer } from '@/components/Chat/ChatsContainer'
import { Avatar } from '@/components/common/Avatar'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import ubiLogo from '@/assets/img/ubi.png'

export const Chat: React.FC = () => {
  const [currentChat, setCurrentChat] = useState<ChatCardProps | null>(null)
  const [ubiChat, setUbiChat] = useState<IChat>({
    id: 420,
    name: 'Ubi',
    avatar:
      ubiLogo,
    messages: [
      {
        id: 1,
        message:
          'Hola 👋, mi nombre es Ubi, soy un Chatbot programado para ayudarte con cualquier consulta que te surja o cualquier inconveniente que tengas 😁. ¿Con que te puedo ayudar hoy?',
        date: new Date(),
        isMine: false,
      },
    ],
    date: new Date(),
  })
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [ubiChat])

  const handleChatClick = (chat: ChatCardProps): void => {
    if (chat.name === 'Ubi') {
      setCurrentChat(chat)
    }
  }

  const handleUbiChat = ({
    question,
    answer,
  }: {
    question: string
    answer: string
  }): void => {
    setUbiChat((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        {
          id: prev.messages.length + 1,
          message: question,
          date: new Date(),
          isMine: true,
        },
        {
          id: prev.messages.length + 2,
          message: answer,
          date: new Date(),
          isMine: false,
        },
      ],
    }))
  }

  if (currentChat) {
    return (
      <div className='flex h-full flex-col'>
        <div className='flex h-full flex-col'>
          <div className='mt-7 flex flex-grow flex-col gap-3 px-4'>
            <div className='flex items-center gap-2'>
              <button
                className='flex items-center gap-2 rounded-full border px-1 py-1'
                onClick={() => {
                  setCurrentChat(null)
                }}
                style={{
                  background: 'rgba(41, 16, 58, 0.15)',
                }}
              >
                <AiOutlineArrowLeft size={24} color='black' />
              </button>
              <div className='flex w-full items-center justify-between gap-2'>
                <div>
                  <button className='flex items-center gap-2'>
                    <Avatar src={ubiLogo} alt={currentChat.name} />
                    <h2 className='text-2xl font-semibold'>
                      {currentChat.name}
                    </h2>
                  </button>
                </div>
                <div className='flex items-center'>
                  <button className='flex items-center gap-2 px-2 py-2'>
                    <FaPhoneAlt size={18} color='black' />
                  </button>
                  <button className='flex items-center gap-2 px-2 py-2'>
                    <BsThreeDots size={22} color='black' />
                  </button>
                </div>
              </div>
            </div>
            <div
              className='no-scrollbar flex max-h-[530px] flex-col gap-3 overflow-y-auto'
              ref={scrollRef}
            >
              <div className='mt-4 flex flex-col items-start gap-3'>
                {ubiChat.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex w-full flex-col gap-1 ${
                      message.isMine ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`flex w-3/4 items-center justify-center rounded-3xl 
                      ${
                        message.isMine
                          ? 'rounded-tr-none text-white'
                          : 'rounded-tl-none'
                      } bg-primary p-4`}
                      style={{
                        background: message.isMine
                          ? ''
                          : 'rgba(41, 16, 58, 0.10)',
                      }}
                    >
                      <p className='text-gray-800 text-sm'>{message.message}</p>
                    </div>
                    <p className='text-gray-500 ml-2 text-xs'>
                      {message.date.toLocaleString('es-AR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                      })}
                    </p>
                  </div>
                ))}

                <Faqs handleUbiChat={handleUbiChat} ubiChat={ubiChat} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex h-full flex-col gap-3 px-4'>
      <h2 className='mt-16 text-2xl font-semibold'>Chat</h2>
      <ChatsContainer
        chats={supportChat}
        containerTitle='Soporte'
        handleChatClick={handleChatClick}
      />
      <ChatsContainer
        chats={driversChat}
        containerTitle='Conductores'
        handleChatClick={handleChatClick}
      />
    </div>
  )
}

interface IChat {
  id: number
  name: string
  avatar: string
  messages: Message[]
  date: Date
}

interface Message {
  id: number
  message: string
  date: Date
  isMine: boolean
}

const chats: IChat[] = [
  {
    id: 1,
    name: 'Sergio Lozada',
    avatar:
      'https://avatar.oxro.io/avatar.svg?name=Sergio+Lozada&background=0693e3&color=000&length=2',
    messages: [
      {
        id: 1,
        message: 'Estoy llegando a tu ubicación..',
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        isMine: false,
      },
      {
        id: 2,
        message: 'Excelente servicio muchas gracias 💯💯',
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        isMine: true,
      },
    ],
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
  },

  {
    id: 2,
    name: 'Mariana Juarez',
    avatar:
      'https://avatar.oxro.io/avatar.svg?name=Mariana+Juarez&background=0693e3&color=000&length=2',
    messages: [
      {
        id: 1,
        message: 'Excelente servicio muchas gracias 💯💯',
        date: new Date(new Date().setFullYear(2023, 7, 20)),
        isMine: true,
      },
      {
        id: 2,
        message: 'Muchas gracias por confiar en nosotros',
        date: new Date(new Date().setFullYear(2023, 7, 20)),
        isMine: false,
      },
    ],
    date: new Date(new Date().setFullYear(2023, 7, 20)),
  },
  {
    id: 3,
    name: 'Paula Lopez',
    avatar:
      'https://avatar.oxro.io/avatar.svg?name=Paula+Lopez&background=0693e3&color=000&length=2',
    messages: [
      {
        id: 1,
        message: 'Te lo dejo como consejo para la próxima',
        date: new Date(new Date().setFullYear(2023, 6, 12)),
        isMine: true,
      },
      {
        id: 2,
        message: 'Gracias por el consejo',
        date: new Date(new Date().setFullYear(2023, 6, 12)),
        isMine: false,
      },
    ],
    date: new Date(new Date().setFullYear(2023, 6, 12)),
  },
  {
    id: 4,
    name: 'Ramiro Brizuela',
    avatar:
      'https://avatar.oxro.io/avatar.svg?name=Ramiro+Brizuela&background=0693e3&color=000&length=2',
    messages: [
      {
        id: 1,
        message: 'Muchas gracias',
        date: new Date(new Date().setFullYear(2023, 6, 1)),
        isMine: true,
      },
      {
        id: 2,
        message: 'Gracias a ti por confiar en nosotros',
        date: new Date(new Date().setFullYear(2023, 6, 1)),
        isMine: false,
      },
    ],
    date: new Date(new Date().setFullYear(2023, 6, 1)),
  },
  {
    id: 420,
    name: 'Ubi',
    avatar:
      ubiLogo,
    messages: [
      {
        id: 1,
        message:
          'Hola 👋, mi nombre es Ubi, soy un Chatbot programado para ayudarte con cualquier consulta que te surja o cualquier inconveniente que tengas 😁. ¿Con que te puedo ayudar hoy?',
        date: new Date(new Date().setFullYear(2023, 6, 1)),
        isMine: false,
      },
    ],
    date: new Date(new Date().setFullYear(2023, 6, 1)),
  },
]

const lastMessage = (chat: IChat): string => {
  const lastMessage = chat.messages[chat.messages.length - 1]
  return lastMessage.isMine ? `Tú: ${lastMessage.message}` : lastMessage.message
}

const supportChat = [
  {
    id: 420,
    name: 'Ubi',
    description:
      'Con ubi vas a poder resolver cualquier inconveniente que tengas',
    avatar:
      ubiLogo,
  },
]

const driversChat: ChatCardProps[] = [
  {
    id: 1,
    name: 'Sergio Lozada',
    avatar:
      'https://avatar.oxro.io/avatar.svg?name=Sergio+Lozada&background=0693e3&color=000&length=2',
    lastMessage: lastMessage(chats[0]),
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  {
    id: 2,
    name: 'Mariana Juarez',
    avatar:
      'https://avatar.oxro.io/avatar.svg?name=Mariana+Juarez&background=0693e3&color=000&length=2',
    lastMessage: lastMessage(chats[1]),
    date: new Date(new Date().setFullYear(2023, 7, 20)),
  },
  {
    id: 3,
    name: 'Paula Lopez',
    avatar:
      'https://avatar.oxro.io/avatar.svg?name=Paula+Lopez&background=0693e3&color=000&length=2',
    lastMessage: lastMessage(chats[2]),
    date: new Date(new Date().setFullYear(2023, 6, 12)),
  },
]

const faqData = [
  {
    id: 1,
    question: '🚗 ¿Cómo puedo hacer para solicitar un viaje?',
    answer:
      '🚗 Para solicitar un viaje, primero debes registrarte y luego ingresar tu ubicación 📍 y el destino al que deseas ir. ¡Así de fácil! 📱',
  },
  {
    id: 2,
    question: '❌ ¿Qué pasa si cancelo un viaje?',
    answer:
      '❌ Si cancelas un viaje, se te cobrará una multa de $200. Si cancelas un viaje por segunda vez, se te cobrará una multa de $400. 💸',
  },
  {
    id: 3,
    question: '💳 ¿Cómo puedo agregar nuevos métodos de pago?',
    answer:
      '💳 Para agregar nuevos métodos de pago, debes ir a la sección de métodos de pago 💰 y seleccionar la opción de agregar nuevo método de pago. ¡Así de fácil! 🤑',
  },
  {
    id: 4,
    question: '💰 Quiero solicitar un reembolso',
    answer:
      '💰 Para solicitar un reembolso, debes ir a la sección de viajes ✈️, seleccionar el viaje que deseas solicitar un reembolso y luego seleccionar la opción de solicitar reembolso. ¡Así de fácil! 📋',
  },
]

interface IFaq {
  handleUbiChat: ({
    question,
    answer,
  }: {
    question: string
    answer: string
  }) => void
  ubiChat: IChat
}

const Faqs: React.FC<IFaq> = ({ handleUbiChat, ubiChat }) => {
  return (
    <div className='flex w-full flex-col items-end gap-2 text-center'>
      {faqData.map((faq) => {
        const isAlreadyAsked =
          ubiChat.messages.find(
            (message) => message.message === faq.question,
          ) !== undefined

        return (
          <button
            key={faq.id}
            className='flex cursor-pointer flex-col gap-2 rounded-md border border-gray p-1 text-sm disabled:cursor-not-allowed disabled:opacity-40'
            onClick={() => {
              handleUbiChat({
                question: faq.question,
                answer: faq.answer,
              })
            }}
            disabled={isAlreadyAsked}
          >
            <p>{faq.question}</p>
          </button>
        )
      })}
    </div>
  )
}
