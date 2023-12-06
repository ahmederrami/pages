// Contact.js
import React from 'react';

const Contact = () => {
  const imageUrl = './unknown.png';
  return (
    <>
      <div>Contact Content</div>
      <div className='cards'>
      <div class="card">
        <img src={imageUrl} alt="Card" className="img"/>
        <div class="card-content">
          <h2>Youssef AFEKHAR</h2>
          <p>Responsable Ressources Humaines - Formation</p>
          <p>Email : y.afekhar@supratourstravel.com</p>
          <p>Tél : 0660-342385</p>
        </div>
      </div>
      <div class="card">
        <img src={imageUrl} alt="Card" className="img"/>
        <div class="card-content">
          <h2>Ahmed ERRAMI</h2>
          <p>Responsable Financier</p>
          <p>Email : a.errami@supratourstravel.com</p>
          <p>Tél : 0660-147499</p>
        </div>
      </div>
      <div class="card">
        <img src={imageUrl} alt="Card" className="img"/>
        <div class="card-content">
          <h2>Mohammed LAHMOUZ</h2>
          <p>Responsable Services</p>
          <p>Email : m.lahmouz@supratourstravel.com</p>
          <p>Tél : 0660-133501</p>
        </div>
      </div>
      <div class="card">
        <img src={imageUrl} alt="Card" className="img"/>
        <div class="card-content">
          <h2>Noureddine MARJANI</h2>
          <p>Responsable Facility Management</p>
          <p>Email : n.marjani@supratourstravel.com</p>
          <p>Tél : 0660-348453</p>
        </div>
      </div>
      <div class="card">
        <img src={imageUrl} alt="Card" className="img"/>
        <div class="card-content">
          <h2>Adam BOUDARA</h2>
          <p>Responsable Tourisme</p>
          <p>Email : a.boudara@supratourstravel.com</p>
          <p>Tél : 0702-066281</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
