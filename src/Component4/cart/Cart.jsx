import React, { useContext } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "../../App";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const updateCart = (id, action) => {
    const newCartItems = { ...cart };
    const index = newCartItems.items.findIndex(el => el._id == id);
    if (action == "inc") newCartItems.items[index].qty++;
    else if (action == "dec") newCartItems.items[index].qty--;

    setCart(newCartItems);
  };
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
               <Button> <FaMinus
                  onClick={() => {
                    updateCart(item._id, "dec");
                  }}
                /></Button>
                <span className="mx-2">{item.qty}</span>
                <Button><FaPlus
                  onClick={() => {
                    updateCart(item._id, "inc");
                  }}
                /></Button>
              </td>
              <td>{(item.price * item.qty).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;