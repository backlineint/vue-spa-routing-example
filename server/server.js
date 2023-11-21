const express = require('express');
var history = require('connect-history-api-fallback');

const app = express();
const port = 3000;

// Serve the static build from the dist folder
const staticFileMiddleware = express.static('dist');
app.use(staticFileMiddleware);
// Use connect-history-api-fallback to handle SPA routing
app.use(history({
  disableDotRule: true,
  verbose: true
}));
// Include the static file middleware again so that rewritten requests can be served.
app.use(staticFileMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
