import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export default class InitializeApp{
   app = express();
   port = 3100;

  constructor(){
    this.app.use(morgan('tiny'));
    this.app.use(cors());  

  }
  
  routes(){
    this.app.get('/greet', (req, res) => {
      console.log('--req',req);
      console.log("----request recieve ----");
      console.log("----yajuvendra recieve ----");
      res.send('Hello World!');

    });
  }

  listen(){
    this.app.listen(this.port, () => {
      return console.log(`my own personal ujjajkaj Express is listening at http://localhost:${this.port}`);
    });
  }

}
