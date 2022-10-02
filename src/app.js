import express from 'express';
import cors from 'cors';

export class App {
  ROUTE_NOT_FOUND = 'Route does not exist on the server';

  constructor(port = process.env.PORT || 3000) {
    this.port = port;
    this.app = express();
    this.middleware();
    this.routes();
  }

  listen() {
    this.app.listen(this.port, () => {
      if (process.env.NODE_ENV === 'dev') {
        console.log(`Server listening on port: ${this.port}`);
      }
    });
  }

  middleware() {
    this.app.use(cors({ origin: '*' }));
    this.app.use(express.json());
  }

  routes() {
    this.app.get('/', (req, res) => (
      res.status(200).send({message: 'Welcome to the moviesdb API v1.0'})
    ));
    this.app.all('*', (req, res) => (
      res.status(400).send({message: this.ROUTE_NOT_FOUND})
    ));
  }
}
