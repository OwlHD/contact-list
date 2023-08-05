import React from "react"
import { useState, useEffect } from 'react'
import ContactInfo from './ContactInfo.jsx'

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    // console.log(selectedContactId, 'from the selectedcontact id comp')
    const [contact, setContact] = useState(null)
    useEffect(() => {
        async function fetchSingleContact(selectedContactId) {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                  );
                  const result = await response.json();
                //  console.log(result)
                  setContact(result);
            } catch (error) {
              console.error(error);
            }
          }
          fetchSingleContact(selectedContactId)
    }, [selectedContactId])
    
    return ( 
        <>
       {contact ? <ContactInfo contact={contact} setSelectedContactId={setSelectedContactId} /> : '' }
        
        </>
        //console.log(contact)
    ); 
    
}