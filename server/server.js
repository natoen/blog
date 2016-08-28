import express from 'express';
import { Server as server } from 'http';


const app = express();
const port = process.env.PORT || 8000;

require('./middleware')(app, express);
require('./router')(app, express);

server(app).listen(port, () => {
  console.log(`Server is running on ${port}`);
});

