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

app.use((req, res, next) => {
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
  next();
});

app.get('/', (req, res) => {
  res.render('home', {
    test: 'TEST CONTENT',
    pageTestScript: '/qa/tests-global.js',
  });
});

app.use((req, res) => {
  res.status(404);
  res.render('404');
});

