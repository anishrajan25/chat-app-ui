import { useState } from "react";
import ContactList from "../ContactList/index";
import ChatArea from "../ChatArea/index";

const ChatApp = ({data, setData}) => {
  const contacts = data.map((obj) => ({image: obj.image, name: obj.name}));
  const [activeChatIndex, setActiveChatIndex] = useState(null);
  
  const openChat = (index) => {
    if(index === activeChatIndex) return;
    setActiveChatIndex(index);
  }

  const addMessage = (message) => {
    let newData = data;
    newData[activeChatIndex].chat.push(message);

    setData(newData);
  }

  return(
    <div className="container-fluid">
      <div className="row" style={{height: '100vh'}}>
        <div className="col-3 p-0">
          <ContactList contacts={contacts} openChat={openChat} activeChatIndex={activeChatIndex} />
        </div>
        <div className="col-9 p-0">
          <ChatArea chat={data[activeChatIndex]} addMessage={addMessage} />
        </div>
      </div>
    </div>
  );
}

export default ChatApp;