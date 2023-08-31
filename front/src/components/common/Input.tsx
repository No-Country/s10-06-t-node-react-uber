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
    handlerKeyDownEvent
}) => {
    if(keyDownEventActive){
        return (
            <input
                onChange={(event) => {
                    handler(event)
                }}
                onKeyDown={() => {handlerKeyDownEvent ? handlerKeyDownEvent() : console.log("Error")}}
                value={value}
                className={`w-full rounded-full border-2 border-solid border-dark px-[12px] py-[6px] placeholder-dark shadow-setTripItems focus:outline-none ${className}`}
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
            value={value}
            className={`w-full rounded-full border-2 border-solid border-dark px-[12px] py-[6px] placeholder-dark shadow-setTripItems focus:outline-none ${className}`}
            type={inputType}
            placeholder={inputPlaceholder}
        />
    )
}

export default Input