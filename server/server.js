const jsonServer = require('json-server');
const admin = require('firebase-admin');
const firebaseConf = require('./firebaseConf.json');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query);
})
 
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server

const firebaseApp = admin.initializeApp(firebaseConf);

const firebaseAuth = firebaseApp.auth();

// verify token and return ujid
const verifyTokenAndRetuenUid = async (token) => {
  const decodedToken = await firebaseAuth.verifyIdToken(token);
  return decodedToken.uid;
};

const verifyReq = async (req) => {
  console.log(`incomming req ${req.path}`);
  // if(req.path.startsWith('/users')){
  //   const uid = await verifyTokenAndRetuenUid(req.headers.authorization.split('Bearer ')[1]);
  //   console.log('token verify success');
  // }
};
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  verifyReq(req).then(() => {
    next();
  }).catch((err) => {
    console.error(`verify token err ${err}`);
    res.sendStatus(401);
  });
});
 
// Use default router
server.use(router);
server.listen(7000, () => {
  console.log('JSON Server is running');
});
