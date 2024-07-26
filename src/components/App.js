import React from 'react';
import { useState, useEffect } from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from './Header';
import './App.css';

function App() {
  const LOCAL_storage_key = "contacts";
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, contact])
  }
  useEffect(() => {
    const retrive = JSON.parse(localStorage.getItem(LOCAL_storage_key))
    if (retrive) setContacts(retrive)
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_storage_key, JSON.stringify(contacts))
  }, [contacts]);
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
