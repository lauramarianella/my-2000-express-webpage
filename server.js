let express = require('express');
let app = express();

let count = 0;
app.get('/count', (req, res) => {
  console.log('I received a requesr to /count', count);
  count++;
  let response = '<h1>This page has been visited ' + count;

  if (count === 1) response = response + ' time';
  else response = response + ' times';

  response = response + '</h1>';
  res.send(response);

  //   res.send(
  //     '<h1>This page has been visited ' +
  //       count +
  //       " times... '__dirname' = '" +
  //       __dirname +
  //       "'</h1>"
  //   );
});

app.get('/count/reset', (req, res) => {
  count = 0;
  res.send('<h1>The count have been reseted, count = ' + count);
});
app.get('/count/multiply', (req, res) => {
  count = count * 2;
  res.send(
    '<h1>The count have been duplicated count before, count after = ' + count
  );
});

app.use('/static', express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('Server started at port 3000');
});
