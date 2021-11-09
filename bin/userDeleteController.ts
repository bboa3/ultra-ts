import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()


const userDeleteController = async(request: Request, response: Response) => { 
  const { email } = request.params;
  
  const user = await prisma.user.findUnique({
    where: { email }
  })
  
  if(!user)
  return response.status(404).json({
    error: `User does not exist`
  });
  
  const deletedUser = await prisma.user.delete({
    where: { email },
  })
  
  if(deletedUser)
  return response.status(200).json({
    message: 'User deleted'
  })
  
  response.status(400).json({
    message: 'Error deleting user'
  })
}


export default userDeleteController