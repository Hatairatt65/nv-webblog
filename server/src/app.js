//console.log('Hello nodejs server')
let express = require('express')//เรียกใช้ผ่าน let
const app = express()//ตั้งตัวแปรไว้รับค่า
 
app.get('/status', function (req, res){//คำสั่ง URL ให้โชว์ข้อมูล
    res.send('Hatairat titnam 65315369 Kaimook')
})

app.get('/showmyname', function (req, res){//คำสั่ง URL ให้โชว์ข้อมูล
    res.send('Akinalak')
})

app.get('/hello/:person', function (req,res) { 
    console.log('hello - ' + req.params.person) 
    res.send('sey hello with ' + req.params.person) 
})

app.get('/pow2/:answer', function (req,res) { 
    console.log('2(pow)' + req.params.person) 
    res.send('2 power 2 = ' + req.params.person) 
})
 
let port = 8080//ผ่านhttp://localhost:8080/ชื่อที่เราตั้ง url
 
app.listen(port, function (){//ตั้งค่ากำหนดให้แสดงผล
    console.log('server running on ' + port)
})