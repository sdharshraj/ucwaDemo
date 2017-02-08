var marriott = require('marriott');
 
marriott.search({
  country: 'CN',
  province: 'CNHP',
  city: 'Sanya'
}, function(err, hotels){
  if (err)
    return console.error(err)
 
  console.log(hotels);
});