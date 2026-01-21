import ContactCard from './ContactCard';

function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {contacts.map((c) => (
        <ContactCard key={c.id} contact={c} />
      ))}
    </div>
  );
}

export default ContactList;