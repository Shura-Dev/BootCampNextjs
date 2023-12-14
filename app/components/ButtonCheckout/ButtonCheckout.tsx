"use client"
import React from 'react'


const ButtonCheckout = ({ priceId }:{ priceId: String}) => {
  const suscription = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({priceId}),
      headers: { 'Content-Type': 'application/json'}
    })
    
    const data = await res.json()
    window.location.href = data.url
    console.log(data);
  }
  return (
    <button
      className="bg-sky-500 text-white px-4 py-2 rounded"
      onClick={suscription}
    >
      Buy
    </button>
  );
}

export default ButtonCheckout