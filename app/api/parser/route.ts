import { PrismaClient } from "@prisma/client";

export const postPDF = async (formData: FormData, apiKey: string): Promise<Response> => {
  const prisma = new PrismaClient()
  const requestOptions = {
    method: 'POST',
    body: formData,
    headers: {
      'X-API-Key': apiKey,
    },
  };

  try {
    const response = await fetch('https://api.superparser.com/parse', requestOptions);
    const responseData = await response.json();
    const newProfile = await prisma.profileCv.create(responseData.data)
    console.log('ro',newProfile)
    return Response.json(responseData, { status: response.status });
  } catch (error) {
    console.error(error);
    return Response.json({ message: 'Error processing file' }, { status: 500 });
  }
};
