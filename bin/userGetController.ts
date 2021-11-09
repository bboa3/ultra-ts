import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()


const userGetController = async(request: Request, response: Response) => { 
  const {name} = request.params;

  const user = await prisma.user.findFirst({
    where: { name }
  })

  if(!user)
  return response.status(404).json({
    error: `No user found named ${name}`
  });
  
  response.status(200).json(user);
}


export default userGetController