const {createProxyMiddleware} = require('http-proxy-middleware')
 
// module.exports = function(app) {
//   app.use('/auth/google', { target: 'http://localhost:5000/' })
// }

module.exports = function(app) {
  app.use(
    '/auth/google',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true
    })
  );
};