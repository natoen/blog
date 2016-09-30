import bodyParser from 'body-parser';
import logger from 'morgan';

module.exports = (app, express) => {
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(express.static(`${__dirname}/../${process.env.NODE_ENV === 'development' ? 'dev' : ''}`));
};
