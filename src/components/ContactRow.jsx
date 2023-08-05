export default function ContactRow({ setSelectedContactId, contact }) {
    //console.log(contact)
    return (
        <tr id="selectable"
        onClick={() => {
          setSelectedContactId(contact.id);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    )
  }