import { ChatCard, type ChatCardProps } from './ChatCard'

export interface ChatsContainerProps {
  chats: ChatCardProps[]
  containerTitle: string
  handleChatClick: (chat: ChatCardProps) => void
}

export const ChatsContainer: React.FC<ChatsContainerProps> = ({
  chats,
  containerTitle,
  handleChatClick,
}) => {
  return (
    <section>
      <article className='flex flex-col gap-3'>
        <span className='line-h text-lg font-semibold leading-6'>
          {containerTitle}
        </span>
        <div className='flex flex-col'>
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => {
                handleChatClick(chat)
              }}
            >
              <ChatCard {...chat} />
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}
