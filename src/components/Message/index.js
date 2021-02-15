const Message = ({message}) => {

  if(message.sent) {
    return (
      <div 
        className="row p-2 my-2 ml-auto mr-2"
        style={{ maxWidth: '20vw', background: '#e2ffc7', borderRadius: '5px'}} 
      >
        <div className="col-12 p-0">
          <span style={{overflowWrap: 'break-word'}} >{message.text}</span>
        </div>
        <div className="col-12 p-0  text-right">
          <span className="text-uppercase ml-auto text-secondary small">
            {message.time}
          </span>
        </div>
      </div>
    )
  }
  else {
    return(
      <div 
        className="row p-2 ml-2"
        style={{ maxWidth: '20vw', background: '#f7fcf6', borderRadius: '5px'}} 
      >
        <div className="col-12 p-0">
          <span style={{overflowWrap: 'break-word'}}>{message.text}</span>
        </div>
        <div className="col-12 p-0 text-right">
          <span className="text-uppercase ml-auto text-secondary small">
            {message.time}
          </span>
        </div>
      </div>
    )
  }
}

export default Message;