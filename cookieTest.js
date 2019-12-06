let express = require('express');
let app = express();
const port = 3000;
app.get('/', function (req, res) {
    res.cookie("name3", "Flavio3", {httpOnly: true});
    res.end('hellow world');
});


app.listen(port, function(){
    console.log('server running at', port);
});



