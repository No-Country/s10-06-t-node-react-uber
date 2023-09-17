interface InputProps {
  inputType: string
  inputPlaceholder: string
  className?: string
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  keyDownEventActive?: boolean
  handlerKeyDownEvent?: () => void
}

const Input: React.FC<InputProps> = ({
  inputType,
  inputPlaceholder,
  className = '',
  handler,
  value,
  keyDownEventActive,
  handlerKeyDownEvent,
}) => {
  if (keyDownEventActive) {
    return (
      <input
        onChange={(event) => {
          handler(event)
        }}
        onKeyDown={() => {
          if (handlerKeyDownEvent) {
            handlerKeyDownEvent()
          }
        }}
        value={value.slice(0, 30)}
        className={`w-full rounded-l-[50px] border-2 border-solid border-dark px-[12px] py-[6px] placeholder-dark shadow-setTripItems focus:outline-none ${className}`}
        type={inputType}
        placeholder={inputPlaceholder}
      />
    )
  }

  return (
    <input
      onChange={(event) => {
        handler(event)
      }}
      value={value.slice(0, 35)}
      className={`w-full rounded-full border-2 border-solid border-dark px-[12px] py-[6px] placeholder-dark shadow-setTripItems focus:outline-none ${className}`}
      type={inputType}
      placeholder={inputPlaceholder}
    />
  )
}

export default Input
