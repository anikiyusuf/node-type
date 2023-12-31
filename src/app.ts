// import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express'
import masterRouter from './routers/masterRouter'
import ErrorHandler from './models/ErrorHandler';
// load the environment variables from the .env file
// dotenv.config({
//   path: '.env'
// });

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
  public app = express();
  public router = masterRouter
}

// initialize server app
const server = new Server();

server.app.use('/api' , server.router);

server.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({
      status: 'error',
      statusCode: err.statusCode,
      message: err.message
    });
  });
  
// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();



// server.app.listen(port, () => console.log(`> Listening on port ${port}`));