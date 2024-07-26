import React from "react";
import CardContact from "./ContactCard";
const ContactList = (props) => {
  // console.log(props);
  const renderContctList = props.contacts.map((contact) => {
    return <CardContact contact={contact}></CardContact>;
  });
  return <div className="iu celled list">{renderContctList}</div>;
};
export default ContactList;
