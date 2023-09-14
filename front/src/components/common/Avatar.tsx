interface AvatarProps {
  src: string
  alt: string
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <div className='h-12 w-12 rounded-full'>
      <img src={src} alt={alt} className='h-full w-full rounded-full' />
    </div>
  )
}
