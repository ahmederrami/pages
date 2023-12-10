// ContactList.jsx (functional component)
import React from 'react';
import '../Reference.css';

const ReferenceList = ({ references }) => {
    return (
        <>
            <h2 className='title'>References</h2>
            <div className="slide-show">
                <div className="slides-container">
                {references.map((reference) => (
                    <div className="slide">
                        <div key={reference.id} className="slide-filter">
                            <h1>Slide {reference.id}</h1>
                            <img src={reference.imageUrl} alt="" />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
};

const Reference = () => {
  const referenceList = [
    { id: 1, name: 'Youssef AFEKHAR', imageUrl:'./unknown.png', position: 'Responsable RH et Formation', email: 'y.afekhar@supratourstravel.com', telephone:'0660-342385' },
    { id: 2, name: 'Ahmed ERRAMI', imageUrl:'./unknown.png', position: 'Responsable Financier', email: 'a.errami@supratourstravel.com', telephone:'0660-147499' },
    { id: 3, name: 'Mohammed LAHMOUZ', imageUrl:'./unknown.png', position: 'Responsable Services', email: 'm.lahmouz@supratourstravel.com', telephone:'0660-133501' },
    { id: 4, name: 'Noureddine MARJANI', imageUrl:'./unknown.png', position: 'Responsable Facility Management', email: 'n.marjani@supratourstravel.com', telephone:'0660-348453' },
    { id: 5, name: 'Adam BOUDARA', imageUrl:'./unknown.png', position: 'Responsable Tourisme', email: 'a.boudara@supratourstravel.com', telephone:'0702-066281' },
  ];

  return (
    <div>
      <ReferenceList references={referenceList} />
    </div>
  );
};

export default Reference;
