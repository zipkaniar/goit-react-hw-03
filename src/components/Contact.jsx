function Contact({ contact, deleteContact }) {
  return (
    <li className="contact-container">
      <div className="contact-info">
        <h2 className="contact-name">{contact.name}</h2>
        <p className="contact-number">{contact.number}</p>
      </div>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  );
}

export default Contact;