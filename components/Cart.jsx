import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { toast } from 'react-hot-toast';
// import PaystackPop from '@paystack/inline-js';
import { PaystackButton } from 'react-paystack'
import { useRouter } from 'next/navigation'
import { useAuth0 } from "@auth0/auth0-react";

import { useStateContext } from '@/context/StateContext';
import { client, urlFor } from '@/lib/client';

const Cart = () => {
  const cartRef = useRef();
  const router = useRouter()
  const { totalPrice, totalQuantites, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, isAuthenticated, isLoading)
  
  console.log(totalPrice, totalQuantites, cartItems, user)
  let email = user?.email
  let amount = (totalPrice * 100).toFixed(2)
  let currency = "GHS"
  let phone = "099897978"
  let publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
  // Generate a unique reference
  let reference = `ref_${Math.floor(Math.random() * 1000000000)}`

  const componentProps = {
    email,
    amount,
    currency,
    metadata: {
      phone,
    },
    publicKey,
    reference,
    text: "Pay Now",
    onSuccess: () => handlePaymentSuccess(),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  }

  const handlePaymentSuccess = () => {
    // check the verify api to confirm transaction was successful
    fetch("/api/verify_payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        reference: reference,
        secretKey: process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY
      })
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        saveTransactionHistory(data.data)
      })
      .catch((err) => console.log(err))
  }

  const saveTransactionHistory = (verificationResponse) => {
    let transaction = {
      _type: 'transaction',
      id: JSON.stringify(verificationResponse.id),
      userName: verificationResponse.customer.email,
      email: verificationResponse.customer.email,
      products: [],
      price: (verificationResponse.amount / 100).toFixed(2),
      currency: verificationResponse.currency,
      payment_option: verificationResponse.channel,
      account: verificationResponse.metadata.phone,
      status: verificationResponse.status,
      paid_at: verificationResponse.paid_at,
      created_at: verificationResponse.created_at
    }

    // pass products as well
    cartItems.map((cartItem) => {
      transaction.products.push({
        image: cartItem.image[0],
        name: cartItem.name,
        details: cartItem.details,
        price: cartItem.price,
        quantity: cartItem.quantity,
        service: cartItem.service,
        company: cartItem.company,
        slug: cartItem.slug
      })
    })

    client.create(transaction)
      .then((data) => {
        toast.success("saved to sanity successfully")
      })
      .catch((err) => console.log(err))
  }

  const handleRedirect = (e) => {
    e.preventDefault()
    setShowCart(false)
    router.push('/sign-in', { scroll: false })
  }

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button
          type="button"
          className='cart-heading'
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantites} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className='btn'
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div className='product' key={item._id}>
              <img src={urlFor(item?.image[0])} className='cart-product-image' />
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className='flex bottom'>
                  <div>
                    <p className='quantity-desc'>
                      <span className='minus' onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></span>
                      <span className='num'>{item.quantity}</span>
                      <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></span>
                    </p>
                  </div>

                  <button
                    type='button'
                    className='remove-item'
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal: </h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='btn-container'>
              {isAuthenticated ?
                <PaystackButton {...componentProps} className='btn' />
                :
                <button onClick={handleRedirect} className='btn'>Sign In</button>
              }
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart