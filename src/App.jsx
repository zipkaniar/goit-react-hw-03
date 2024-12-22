import './App.css'
import ContactForm from './components/ContactForm.jsx'
import SearchBox from './components/SearchBox.jsx'
import ContactList from './components/ContactList.jsx'

import { useState, useEffect } from 'react';

import data from './data/contactData.json'

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [contacts, setContacts] = useState(data);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const removeContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== contactId));
  };
  
  const handleSearchChange = (evt) => {
    setSearchValue(evt.target.value); 
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
  <div>
    <h1>Phonebook</h1>
    <ContactForm onAddContact={addContact} />
    <SearchBox inputValue={searchValue} handleChange={handleSearchChange} />
    <ContactList data={filteredContacts} onDelete={removeContact} />
  </div>
  )
}

export default App