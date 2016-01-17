var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarPost = function(){
  var randomId = faker.random.number();
  var randomName = faker.name.findName();
  var randomContent = faker.lorem.sentence();
  var randomDate = faker.date.recent();
  var randomImage = faker.image.image();

  return {
    id : randomId,
    nombre : randomName,
    contenido : randomContent,
    fecha : randomDate,
    imagen : randomImage
  }
}

app.get('/post', function(req, res){
  var cantidad = _.random(5, 10)
  var post = _.times(cantidad, generarPost)
  res.json(post);
})

app.listen(3001);
