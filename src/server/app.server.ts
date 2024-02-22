import mongoose from 'mongoose';
import { config } from '../config/config';

mongoose.connect(`${config.mongo.url}`)
    .then(() => console.log('connected to server'))
    .catch(err => console.log(err))