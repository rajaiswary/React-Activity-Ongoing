import "./App.css";
import React, { useState,useEffect } from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import uuid from 'react-uuid';


function App() {

  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,{id : uuid(),...contact} ]);
  };

  const removeContactHandler = (id) =>{

    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });

    setContacts(newContactList);

  }

  useEffect(()=>{
   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(retriveContacts) 
   {
    setContacts(retriveContacts);
   }

  },[]);

  useEffect(()=>{
    if(contacts.length) {
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
    }
  },[contacts]);

  return (
    <div className="ui container">
      <Header />
      
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId = {removeContactHandler} />
      
    </div>
  );
}

export default App;
