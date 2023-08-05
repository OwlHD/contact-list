import './ContactInfo.css'

export default function ContactInfo({ contact, setSelectedContactId}) {
    return (
        <div id="details">
            <h1>{contact.name}'s Details: </h1>
            <p>Username: {contact.username}</p>
            <p>Email: {contact.email}</p>
            <p>Address: {contact.address.street} {contact.address.suite} {contact.address.city} {contact.address.zipcode}</p>
            <p>Phone: {contact.phone}</p>
            <p>Website: {contact.website}</p>
            <button onClick={() => {setSelectedContactId(null);}}>Return To List</button>
        </div>
    )

}