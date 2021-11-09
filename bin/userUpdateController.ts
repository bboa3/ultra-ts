import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()


const userUpdateController = async(request: Request, response: Response) => { 
  const { name, email, birthday, address } = request.body;
  
  const user = await prisma.user.findUnique({
    where: { email }
  });
  
  if(!user) 
  return response.status(404).json({
    message: 'User not found'
  });
  
  const { 
    city,
    state,
    country,
    postcode
  } = address;
  
  const updatedUser = await prisma.user.update({
    where: { email },
    data: {
      
      name,
      
      email,
      
      birthday
    }
  })
  
  await prisma.address.update({
    where: {
      user_id: updatedUser.id
    },
    data: {
      city,
      state,
      country,
      postcode: String(postcode)
    }
  });
  
  const users = await prisma.user.findUnique({
    where: { email },
    include: { address: true }
  });
  
  response.status(200).json(users)
}


export default userUpdateController;