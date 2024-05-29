import React from 'react';
import './cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineDelete } from "react-icons/ai";
import { incrementCartQuantity, removeFromCart, decrementCart } from '../../context/Cart/cartSlice';
import Swal from 'sweetalert2';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);

  const total = cartItems?.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleRemoveFromCart = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to remove ${item.title} from the cart?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(item.id));
        Swal.fire(
          'Deleted!',
          `${item.title} has been removed from the cart.`,
          'success'
        );
      }
    });
  };


  return (
    <div className="product__cart Container">
      <table>
        <thead>
          <tr>
            <th>Delete</th>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th className='th'>QTY</th>
            <th className='th'>UNIT PRICE</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((user) => (
            <tr key={user.id}>
              <td onClick={() => handleRemoveFromCart(user)}><AiOutlineDelete className='removeicon' /></td>
              <td>
                <div className="tr">
                  <div className="tr_th">
                    <img className='trrimg' src={user.image} alt={user.title} />
                  </div>
                  <div className="tr_th">
                    {user.title}
                  </div>
                </div>
              </td>
              <td>
                <h1>$ {(user.price * user.quantity).toFixed(2)}</h1>
              </td>
              <td>
                <div className="btns_table">
                  <button disabled={user.quantity <= 1} onClick={() => dispatch(decrementCart(user))}>-</button>
                  <span>{user.quantity}</span>
                  <button onClick={() => dispatch(incrementCartQuantity(user))}>+</button>
                </div>
              </td>
              <td>
                <h1>$ {user.price.toFixed(2)}</h1>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <h2>Total: $ {total.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
