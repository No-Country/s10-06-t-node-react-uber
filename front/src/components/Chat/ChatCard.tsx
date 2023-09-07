import { parseChatDate } from '@/utils/parseChatDate'
import { Avatar } from '../common/Avatar'

export type ChatCardProps =
  | {
      id: number
      name: string
      avatar: string
      description: string
    }
  | {
      id: number
      name: string
      avatar: string
      lastMessage: string
      date: Date
    }

export const ChatCard: React.FC<ChatCardProps> = (chat) => {
  if ('lastMessage' in chat) {
    return (
      <div
        className='flex h-20 cursor-pointer items-center gap-4 border-b p-4'
        style={{
          background: 'rgba(41, 16, 58, 0.10)',
        }}
      >
        <Avatar src={chat.avatar} alt={chat.name} />
        <div className='flex h-20 w-full flex-1 flex-col p-3'>
          <span className='font-medium'>{chat.name}</span>
          <span className='line-clamp-2 text-xs font-medium text-[#49494A]'>
            {chat.lastMessage}
          </span>
        </div>
        <span className='text-xs font-semibold'>
          {parseChatDate(chat.date)}
        </span>
      </div>
    )
  }

  if ('description' in chat) {
    return (
      <div
        className='flex h-20 cursor-pointer items-center gap-4 rounded-3xl border p-4 shadow-md'
        style={{
          background: 'rgba(41, 16, 58, 0.10)',
        }}
      >
        <Avatar src={chat.avatar} alt={chat.name} />
        <div className='flex h-20 w-full flex-1 flex-col p-3'>
          <span className='font-medium'>{chat.name} (Chatbot de soporte)</span>
          <span className='line-clamp-2 text-xs font-medium text-[#49494A]'>
            {chat.description}
          </span>
        </div>
      </div>
    )
  }
}
