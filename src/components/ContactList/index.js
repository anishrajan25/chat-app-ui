import "./styles.css";
import ContactListItem from "../ContactListItem/index";

const ContactList = ({contacts, openChat, activeChatIndex}) => {

  return (
    <>
      <div className="row justify-content-center contact-header">
        <h2 className="text-center py-2">Contacts</h2>
      </div>
      {
        contacts.map((contact, index) => {
          return (
            <ContactListItem
              key={index} 
              name={contact.name} 
              image={contact.image} 
              active={activeChatIndex === index ? true : false}
              openChat={() => openChat(index)}
            />
          )
        })
      }
    </>
  );
}

export default ContactList;