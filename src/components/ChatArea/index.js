import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faVideo, faEllipsisV, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Message from '../Message/index'
import './styles.css';
import { useState } from 'react'
import { animateScroll } from "react-scroll"

const ChatArea = ({chat, addMessage}) => {

  const [text, setText] = useState('')

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: "chat",
      duration: 500,
    })
  }

  const handleSend = (e) => {
    e.preventDefault()
    
    if(text.trim().length) {
      let date = new Date().toLocaleTimeString()

      let message = {
        sent: true,
        text,
        time: `${date.substring(0, date.length - 6)} ${date.substring(date.length - 2)}`
      }

      addMessage(message)
      console.log(chat.chat)
      setText('')
      scrollToBottom()
    }
  }

  return (
    <>
      {
        chat ? 
        <div className="container-fluid h-100" style={{backgroundImage: `url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-pd-sasi-03.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=cec9b4798fd70605e2a95fa61259c5db')`}} >
          <div className="row contact-header">
              <div className="col-1 align-self-center">
                <img alt='DP' src={chat.image} className="img-fluid rounded-circle float-right" style={{height: '2.6rem'}} />
              </div>
              <div className="col-9">
                <h2 className="text-left py-2">{chat.name}</h2>
              </div>
              <div className="col-2 align-self-center pl-auto">
                <FontAwesomeIcon icon={faVideo} style={{fontSize: 23}} className="mx-3" />
                <FontAwesomeIcon icon={faPhoneAlt} style={{fontSize: 23}} className="mx-3" />
                <FontAwesomeIcon icon={faEllipsisV} style={{fontSize: 23}} className="mx-3" />
              </div>
          </div>
          <div className="py-2 container-fluid" id="chat" style={{ height: '83vh', overflowX: 'hidden', overflowY: 'scroll'}}>
            {
              chat.chat.map((msg) => <Message message={msg} />)
            }
          </div>
          <div className="row justify-content-around align-items-center">
            <form onSubmit={handleSend}>
              <input 
                type="text" 
                placeholder="Type your message" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border mb-3 p-3" 
                id="text" 
              />
              <span 
                className="ml-2" style={{padding: '0.9rem', background: "#036055", color: 'white', borderRadius: '50%'}} 
                onClick={handleSend}
              >
                <FontAwesomeIcon icon={faPaperPlane} style={{fontSize: 23}} />
              </span>
            </form>
          </div>
        </div>
        :
        <div className="bg-dark text-center align-self-center text-white" style={{height: "100%"}}>
          <div style={{height: '45vh'}} ></div>
          <h1 className="my-auto">Welcome</h1>
        </div>
      }
    </>
  )
}

export default ChatArea;