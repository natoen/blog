# Blog
A full-pledged minimal blogging app 

## Tech Stack
Node.js/Express.js, React.js, and Postgres

## Development:
- Do an `npm install`, an `npm run-script compile` to produce sources in `/dev`, and an `npm run-script dev` to start our server. Open a web browser and go to `localhost:8000`
- Make sure you have Postgresql installed (for [Mac][postgres]). Database name would be `blog` (`server/db.js`). The requried column names in inserting data to `posts` would only be the title and the body. Schema used will be in `server/schema.sql`.

## Production
- This app has an npm postinstall script that will run the webpack config in the root folder. The config contains an S3 automatic upload plugin so make sure to put an env.js in the root folder like this:
```javascript
module.exports = {
  AWS_ACCESS_KEY_ID: '******',
  AWS_SECRET_ACCESS_KEY: '*******',
  S3_BUCKET_NAME: 'mybucket',
  AWS_REGION: 'ap-northeast-1',
};
```
- We could also just erase the plugin and change the clientbundle and css sources in `index.html` and `server/template.js` to serve the files locally. 

[postgres]: http://postgresapp.com