import { useState } from 'react'
import ContactList from './components/contactlist.jsx'
import SelectedContact from './components/SelectedContact.jsx'
import './App.css'

export default function App() {

  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  )
}