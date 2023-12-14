import { NextResponse } from "next/server";
import { Stripe } from 'stripe'
import { PrismaClient } from '@prisma/client';
import { getSession } from "next-auth/react";
import { NextApiRequest } from "next";


export const POST = async (request) => {
  try {
  const {priceId, user}= await request.json()
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const session = await stripe.checkout.sessions.create({
    mode:'subscription',
    payment_method_types: ['card'],
    line_items:[
      { price: priceId, quantity: 1 }
    ],
    success_url: 'http://localhost:3000',
    cancel_url: 'http://localhost:3000/pricing'
  })
  await updateAccessAllPost(user.id);
  return NextResponse.json({ url: session.url})
  } catch (error) {
    console.error("Error al procesar la suscripción:", error);
  }
}


const updateAccessAllPost = async (userId: string) => {
  const prisma = new PrismaClient();
  try {
    await prisma.user.update({
      where: { id: userId },
      data: { accessAllPost: true }
    });
  } catch (error) {
    console.error('Error al actualizar el campo accessAllPost:', error);
  }
}