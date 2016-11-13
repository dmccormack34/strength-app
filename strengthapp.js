const express = require('express');

const app = express();

const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(`${__dirname}/public`));

app.listen(app.get('port'), () => {
  console.log(`started listening on https://localhost:${app.get('port')}, press ctrl c to termiante`);
});

app.get('/', (req, res) => {
  res.render('home');
});

app.use((req, res) => {
  res.status(404);
  res.render('404');
});

