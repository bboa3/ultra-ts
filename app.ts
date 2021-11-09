import routes from "./routes";
import cors from 'cors'
import express from 'express'
import helmet from 'helmet';

import { config } from 'dotenv';
import dotenvExpand from 'dotenv-expand';
dotenvExpand(config());

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json()); 

app.use('/', routes);


app.listen(process.env.HTTP_PORT || 3002);
