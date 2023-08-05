import { useState } from 'react'
import ContactList from './components/contactlist.jsx'
import SelectedContact from './components/SelectedContact.jsx'
import './App.css'

export default function App() {
//the id
  const [selectedContactId, setSelectedContactId] = useState(null);
 // console.log(selectedContactId, 'from app')

  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  )
}