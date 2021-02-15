const ContactListItem = ({name, image, openChat, active}) => {
  let classes = `row border-bottom pt-2 pl-2 pb-3 ${active ? 'bg-info text-white' : 'bg-white'}`;

  return (
      <div 
        className={classes} 
        style={{cursor: "pointer"}} 
        onClick={openChat}
      >
        <div className="col-2 align-self-center">
          <img 
            alt='DP'
            src={image} 
            className="ml-2 img-fluid rounded-circle float-left" 
          />
        </div>
        <div className="col-10">
          <h4>{name}</h4>
        </div>
      </div>
  );
}

export default ContactListItem;