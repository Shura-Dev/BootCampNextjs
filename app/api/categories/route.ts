import { getServerAuthSession } from "@/lib/server/auth";
import { db } from "@/lib/server/db";

export const GET = async () => {
  try {
    const categories = await db.category.findMany({
      skip: 0,
      // take: 10, // uncomment this line to limit the number of categories returned
    });

    return new Response(JSON.stringify(categories));
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Something went wrong!" }), {
      status: 500,
    });
  }
};

export const POST =async (req: Request): Promise<Response> => {
  const session = await getServerAuthSession();

  if (!session || !session.user) {
    return new Response(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();

    const post = await db.category.create({
      data: {
        ...body
      },
    });

    return new Response(JSON.stringify(post));
  } catch (err: unknown) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Something went wrong!" }), {
      status: 500,
    });
  }
  
}
export const DELETE = async (id )  => { 
const session = await getServerAuthSession();

  if (!session || !session.user) {
    return new Response(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const categoryId = id;

    const deletedCategory = await db.category.delete(categoryId)

    console.log('sde', deletedCategory);
    // return new Response(JSON.stringify(post));
  } catch (err: unknown) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Something went wrong!" }), {
      status: 500,
    });
  }
  
}
