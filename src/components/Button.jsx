const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button className={`flex items-center justify-center 
    gap-2  text-lg px-7 py-4 border font-montserrat leading-none
    ${backgroundColor ? `${backgroundColor} $ {textColor} ${borderColor}` 
    : "bg-coral-red text-white border-coral-red rounded-full ${fullWidth && 'w-full'}"}`}>
        {label}
        {iconURL &&<img src={iconURL} alt="shop now"
        className="ml-2 rounded-full h-5 w-5" />
        }
    </button>
  )
}

export default Button