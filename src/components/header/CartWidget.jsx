import React from 'react';


const CartWidget = () => {
  const contador = 1;

  return (
    <div>
      <img  className="carrito" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="carrito" />
      <span className="notificacion">{contador}</span>
    </div>
  );
};

export default CartWidget;
