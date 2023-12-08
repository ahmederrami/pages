import React from 'react';

const Organigramme = () => {
  const imageUrl = './organigramme_st.png';

  return (
    <div className='image-container'>
      <img src={imageUrl} alt="Organigramme" />
    </div>
  );
};

export default Organigramme;