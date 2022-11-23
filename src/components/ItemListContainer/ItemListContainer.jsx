import React from 'react';

const ItemListContainer = ({ greeting }) => {
  //recibimos la prop y la mostramos
  return (
    <div>
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
