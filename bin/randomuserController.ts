import { address, PrismaClient, user } from ".prisma/client";
import axios from "axios";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const randomuserController = async (request: Request, response: Response) => {
  
  axios.get('https://randomuser.me/api/').then(async res => {
    const result = res.data.results[0];

    const user = {
      name: result.name,
      email: result.email,
      birthday: result.registered,
      address: result.location
    }


    const usersNumber = await prisma.user.count();
    if(usersNumber >= 50) {
      response.status(400).json({
        error: 'You have already reached the limit of 50 user'
      })
    }

    const { first, last } = user.name;
    const { date } = user.birthday;
    const { 
      city,
      state,
      country,
      postcode,
      street,
      coordinates,
      timezone,
    } = user.address


    const newUser = await prisma.user.create({
      data: {

        name: `${ first } ${ last }`,

        email: user.email,

        birthday: date
      }
    })


    await prisma.address.create({
      data: {
        city,
        state,
        country,
        postcode: String(postcode), 
        street: {
          create: {
            number: street.number,
            name: street.name
          }
        },
        coordinates: {
          create: {
            latitude: coordinates.latitude,
            longitude: coordinates.longitude
          }
        },
        timezone: {
          create: {
            offset: timezone.offset,
            description: timezone.description
          }
        },
        user_id: newUser.id
      }
    })
    

    const users = await prisma.user.findMany({
      include: {
        address: true
      }
    });

    response.status(200).json(users)
    
  }).catch(err => {
    console.log(err);
  })
}

export default randomuserController;