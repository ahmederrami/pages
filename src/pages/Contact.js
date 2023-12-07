// ContactList.jsx (functional component)
import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2 className='title'>Contacts</h2>
        {contacts.map((contact) => (
          <div key={contact.id} class="contact-card">
            <img src={contact.imageUrl} />
            <h2>{contact.name}</h2>
            <h4>{contact.position}</h4>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.telephone}</p>
          </div>
        
        ))}
    </div>
  );
};

const Contact = () => {
  const contactList = [
    { id: 1, name: 'Youssef AFEKHAR', imageUrl:'./unknown.png', position: 'Responsable RH et Formation', email: 'y.afekhar@supratourstravel.com', telephone:'0660-342385' },
    { id: 2, name: 'Ahmed ERRAMI', imageUrl:'./unknown.png', position: 'Responsable Financier', email: 'a.errami@supratourstravel.com', telephone:'0660-147499' },
    { id: 3, name: 'Mohammed LAHMOUZ', imageUrl:'./unknown.png', position: 'Responsable Services', email: 'm.lahmouz@supratourstravel.com', telephone:'0660-133501' },
    { id: 4, name: 'Noureddine MARJANI', imageUrl:'./unknown.png', position: 'Responsable Facility Management', email: 'n.marjani@supratourstravel.com', telephone:'0660-348453' },
    { id: 5, name: 'Adam BOUDARA', imageUrl:'./unknown.png', position: 'Responsable Tourisme', email: 'a.boudara@supratourstravel.com', telephone:'0702-066281' },
    // Add more contacts as needed
  ];

  return (
    <div>
      <ContactList contacts={contactList} />
    </div>
  );
};

export default Contact;
