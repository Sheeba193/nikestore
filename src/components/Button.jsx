const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center justify-center 
    gap-2 bg-coral-red text-lg px-7 py-4 border font-montserrat
    leading-none text-white border-coral-red rounded-full w-fit">
        {label}
        <img src={iconURL} alt="shop now"
        className="ml-2 rounded-full h-5 w-5" />

    </button>
  )
}

export default Button