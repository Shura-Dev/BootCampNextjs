import { db } from '@/lib/server/db';

export const GET = async () => {
  try {
    const subscriptionOptions = await db.subscription.findMany({
      skip: 0
    })
    
    return new Response(JSON.stringify(subscriptionOptions))
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Something went wrong!'}), { status: 500 })
    
  }
}