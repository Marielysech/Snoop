function Button ({text, onClick, className = "simpleButton"}) {
    return (
        <>
        <button className={className} onClick={onClick}>{text}</button>
        </>
    )
}

export default Button