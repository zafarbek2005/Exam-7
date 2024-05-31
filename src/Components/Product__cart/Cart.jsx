import React, { useState } from 'react';
import './cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineDelete } from "react-icons/ai";
import { incrementCartQuantity, removeFromCart, decrementCart } from '../../context/Cart/cartSlice';
import Swal from 'sweetalert2';
import Paymet from '../Paymet/Paymet';
import empty from './empty.jpg'

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);
  const [voucher, setVoucher] = useState('');
  const [discount, setDiscount] = useState(0);
  const [voucherError, setVoucherError] = useState('');

  const total = cartItems?.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountedTotal = total - discount;
  const [showPaymet, setShowPaymet] = useState(false);

  const handleOpenPaymet = () => {
    setShowPaymet(true);
  };

  const handleClosePaymet = () => {
    setShowPaymet(false);
  };

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

  const handleVoucherRedeem = () => {
    if (voucher === 'ZAFARBEK') {
      setDiscount(total * 0.5); 
      setVoucherError('');
      Swal.fire(
        'Success!',
        'Voucher applied successfully.',
        'success'
      );
    } else {
      setVoucherError('Invalid voucher code');
      Swal.fire(
        'Error!',
        'Invalid voucher code.',
        'error'
      );
    }
  };

   let ProductCart = cartItems.length === 0 ? (
    <div className="empty-cart">
      <img src={empty} alt="empty.png" />
    </div>
  ) : (
    <>
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
      <div className="total_waucher Container">
        <div className="waycher">
          <input
            type="text"
            placeholder='Voucher ZAFARBEK  50% discount'
            value={voucher}
            onChange={(e) => setVoucher(e.target.value)}
          />
          <button onClick={handleVoucherRedeem}>Redeem</button>
          {voucherError && <p className="error">{voucherError}</p>}
        </div>
        <div className="chek">
          <div className="chekitem">
            <p>Subtotal</p>
            <p>$ {total.toFixed(2)}</p>
          </div>
          <div className="chekitem">
            <p>Shipping fee</p>
            <p>$20.00</p>
          </div>
          <div className="chekitem">
            <p>Coupon</p>
            <p>$ {discount > 0 ? discount.toFixed(2) : 'No'}</p>
          </div>
          <div className="chekitem">
            <h3>TOTAL</h3>
            <p>$ {(discountedTotal + 20).toFixed(2)}</p> 
          </div>
          <div className="chekitem">
            <button id='chekbtn' onClick={handleOpenPaymet}>Check out</button>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      <div className={`product__cart Container ${showPaymet ? 'checkout-active' : ''}`}>
        {showPaymet && <Paymet onClose={handleClosePaymet} />}
            {ProductCart}

      </div>
    </>
  );
};

export default Cart;
