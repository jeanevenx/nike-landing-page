const Button = ({label, iconUrl}) => {
  return (
    <button className="flex ">
        {label}
        <img 
            src={iconUrl} 
            alt="Arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
        />
    </button>

  )
}

export default Button;
