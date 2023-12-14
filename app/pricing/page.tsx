import React from 'react'
import { Stripe } from "stripe";
import styles from './Pricing.module.css';
import ButtonCheckout from '../components/ButtonCheckout/ButtonCheckout';

async function loadPrices() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const prices = await stripe.prices.list();
  const sortedPrices = prices.data.sort(
    (a, b) => a.unit_amount! - b.unit_amount!
  );
  return sortedPrices;
}
const pricingPage = async () => {
  const prices = await loadPrices();
  return (
    <div className={styles.container}>
      <h1>prices</h1>
      {
        prices.map(price => (
          <div className={styles.card} key={price.id}>
            <h3>{price.nickname}</h3>
            <h2>{price.unit_amount! /100 }$ </h2>
            <ButtonCheckout priceId={price.id} />
          </div>
        ))
      }
    </div>
  )
}

export default pricingPage