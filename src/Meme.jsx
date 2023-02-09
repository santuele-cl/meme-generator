const Meme = (props) => {
    const { img, topText, botText} = props
    return (
        <div className="relative wrapper inner-wrapper border rounded-lg">
            <span className="badge top-4">{topText}</span>
            <img className="w-full" src={img} alt="random meme image" />
            <span className="badge bottom-4">{botText}</span>
        </div>
    )
}

export default Meme;