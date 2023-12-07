import React from 'react';

const Organigramme = () => {
  const imageUrl = './organigramme_st.png';

  return (
    <div>
      <h2 className='title'>Organigramme</h2>
      <img src={imageUrl} alt="Organigramme" />
    </div>
  );
};

export default Organigramme;