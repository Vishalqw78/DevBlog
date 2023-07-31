function Button({
    title,
    onclick,
    variant='primary-contained',
    disabled
}){
    return (
        <button 
        className={`px-5 h-10 ${variant==='primary-contained' && 'bg-primary text-white'}
        ${variant==='primary-outlined' && 'border-primary bg-primary text-white'}
        ${disabled && 'opacity-50 cursor-not-allowed'}`
        } onClick={onclick} disabled={disabled}>
            {title}
        </button>
    )
}

export default Button;