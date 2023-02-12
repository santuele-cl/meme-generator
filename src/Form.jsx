import { useState } from 'react';
import memesData from './memesData.js';
// import Meme from './Meme.jsx'

const Form = () => {
    /* New state for allMemegesImages*/ 
    const [allMemegesImages, setAllMemesImages] = useState(memesData)
    
    /* Get random image index */ 
    const randomIndex = Math.floor( Math.random() * allMemegesImages.data.memes.length )
    const randomURL = allMemegesImages.data.memes[randomIndex].url

    // Form obj state
    const [ formData, setFormData ] = useState({
        topText: "",
        botText: ""
    })
    // onChange handler for two form text inputs
    function handleChange(event) {
        setFormData(prevFormData => {
            return {...prevFormData, [event.target.name]: event.target.value}
        })
    }
    /* memeObj state */ 
    const [memeImgURL, setMemeImgURL] = useState(randomURL)

    const handleSubmit = (event) => {
        /* Disable the default submit behavior of a form */ 
        event.preventDefault()

        /* Set new memeImg state with the newly acquired random index */ 
        setMemeImgURL(randomURL)
    }
    


    return (
        <div className="wrapper inner-wrapper my-8">
            <form onSubmit={handleSubmit} id="form">
                <div className="form-input flex flex-wrap gap-2 my-4">
                    <input className="input" type="text" onChange={handleChange} name="topText" value={formData.topText} placeholder="Top text"/>
                    <input className="input" type="text" onChange={handleChange} name="botText" value={formData.botText} placeholder="Bottom text" />
                </div>
                <button className="bg-purple-500 text-white mb-8 w-full px-5 py-3 rounded-md">
                    <span>Get new meme image</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block ml-2 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </button>
            </form>
            <div className="relative wrapper inner-wrapper border rounded-lg">
                <span className="badge top-4">{formData.topText}</span>
                <img className="w-full" src={memeImgURL} alt="random meme image" />
                <span className="badge bottom-4">{formData.botText}</span>
            </div>
            {/* <Meme 
                {...memeObj}
                /> */}
        </div>
    )
}

export default Form;