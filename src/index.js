import { App } from './app.js';
import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'dev') {
  dotenv.config();
}

const start = () => {
  const app = new App();
  app.listen();
};

start();