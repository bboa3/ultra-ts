import { Router } from 'express';
import randomuserController from '../bin/randomuserController';
import userDeleteController from '../bin/userDeleteController';
import userGetController from '../bin/userGetController';
import userUpdateController from '../bin/userUpdateController';

const routes = Router(); 

routes.get('/randomuser', randomuserController);
routes.get('/user/:name', userGetController);
routes.delete('/user/:email', userDeleteController);
routes.put('/user', userUpdateController);

export default routes;