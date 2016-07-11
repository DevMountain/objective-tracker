var fs = require('fs');

fs.readFile(__dirname+'/.git/logs/HEAD', 'ascii', function(err, data){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
})
