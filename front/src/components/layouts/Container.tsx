interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='m-auto w-11/12 py-3'>{children}</div>
}

export default Container
