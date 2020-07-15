const nunjucks = require ('nunjucks');
const express = require ('express');
const courses = require ('./data');

const server = express ();


server.use (express.static ('public'));

server.set ('view engine', 'njk');

nunjucks.configure ('views', {
  express: server,
  autoescape: false
});

server.get ('/', function (req, res) {
  const data = {
    img: 'https://rocketseat.com.br/static/images/logo-rocketseat.svg',
    alt: 'Logo da rocketseat',
    title: 'Rocketseat',
    description: 'As melhores tecnologias em programação, direto ao ponto e do jeito certo.',
    list: '<ul>Principais tecnologias utilizadas: <li>HTML;</li> <li>CSS;</li> <li>JavaScript;</li> <li>ReactJS;</li> <li>ReactNative;</li> <li>Node.js.</li> </ul>',
    links: [
      { name: 'Blog', url: 'https://blog.rocketseat.com.br/' },
      { name: 'Comunidade', url: 'https://discordapp.com/invite/gCRAFhc' },
      { name: 'Instagram', url: 'https://www.instagram.com/rocketseat_oficial/' },
      { name: 'Facebook', url: 'https://www.facebook.com/rocketseat' }
    ]
  };

  return res.render ('about', { about: data });
});

server.get ('/courses', function (req, res) {
  return res.render ('courses', { items: courses });
});

server.listen (5000, function () {
  console.log ('server is running');
});