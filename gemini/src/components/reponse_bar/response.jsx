import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets';
import ImageComponent from '../ImageComponent/image';
import "./response.css"
function Response_Bar() {
    const [Display,setdisplay] = useState(false)
    const [prompt,setprompt] = useState("");
    const [sendrequest,setsendrequest] = useState("")
    const [response,setresponse] = useState("")


    useEffect(()=>{
        const fetch_data = async()=>{
                    
         try{
            const res = await fetch("http://localhost:3004/prompt",{
                method : "POST",
                headers : {
                    "Content-Type" :  "application/json",
                },
                body : JSON.stringify({prompt : sendrequest})
            })

            const response_data = await res.json()
            setresponse(response_data)
             console.log( " response " ,response_data)
         }catch(error){
            console.log(error.message)
            console.log({error : "An error occured "})
         }

        }

        fetch_data()
    },[sendrequest])
    return (
        <div className='response-container'>
            <div className='header'>

                <div className='logo'>
                    <ImageComponent
                        src={assets.Gemini_Advanced_logo}
                        style={{
                            width: 100
                        }}
                    />

                </div>
                <div className="nav">
                    <div className='nav-name'>
                        Try Gemini Advanced
                    </div>
                    <div className='nav-hamburger'>
                        <ImageComponent
                            src={assets.hamburger}
                            style={{
                                width: 40,
                                borderRadius: '50%'
                            }}
                        />
                    </div>
                    <div className='nav-user-icon'>
                        <ImageComponent
                            src={assets.user_icon}
                            style={{
                                width: 40,
                                borderRadius: '50%'
                            }}
                        />
                    </div>
                </div>
            </div>
            {
                Display ? (
                 <>
                     <div className='dialog-box'>
                        <div>{response}</div>
                     </div>
                 </>
                ) :  <div className='main'>
                <div className="greet">
                    <p><span>hello naveen</span> </p>
                    <p>how can i help you</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>suggest beautiful places to see on an upcoming road trip</p>
                        <ImageComponent className="card_image" src={assets.compass_icon} />
                    </div>
                    <div className="card">
                        <p>brief summarize this concept</p>
                        <ImageComponent className="card_image" src={assets.bulb_icon} />
                    </div>
                    <div className="card">
                        <p>five habits to follow daily</p>
                        <ImageComponent className="card_image" src={assets.message_icon} />
                    </div>
                    <div className="card">
                        <p>imporove the readibility of the code </p>
                        <ImageComponent className="card_image" src={assets.code_icon} />
                    </div>
                </div>

            </div>
            }
            <div className='footer'>
                <div className='input-bar'>
                    <input type='text'  onChange={(e) => setprompt(e.target.value)}     value={prompt} placeholder='Enter ur prompt' />
                </div>
                <div className='additonal-icons'>
                    <div className='mic-icon'>
                        <ImageComponent
                            src={assets.mic_icon}
                            style={{
                                width: 30
                            }}
                        />
                    </div>
                    <div >
                        <ImageComponent
                            src={assets.gallery_icon}
                            style={{
                                width: 30
                            }}
                            className='gallery-icon'
                        />
                    </div>
                    <div className='send-icon'>
                        <ImageComponent
                            src={assets.send_icon}
                            style={{
                                width: 30
                            }}

                            onClick={
                                ()=>setsendrequest(prompt)
                            }
                        />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Response_Bar;
