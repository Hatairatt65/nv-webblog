//console.log('Hello nodejs server')
let express = require('express')
const app = express()
 
app.get('/status', function (req, res){
    res.send('Hatairat titnam 65315369 Kaimook')
})
 
let port = 8080
 
app.listen(port, function (){
    console.log('server running on ' + port)
})