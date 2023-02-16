const form = document.getElementById('form')
const intA = document.getElementById('intA')
const intB = document.getElementById('intB')
const btn = document.getElementById('btn')

const res = await fetch(`http://universities.hipolabs.com/search?name=${name}&country=${country}`)

form.addEventListener('submit', e => {
    e.preventDefault();
    const name = e.target[0].value;
    const country = e.target[1].value;
})

const http = require('http')
const url = require('url')
const fs = require('fs')
const ListElem = require('./function.js')

const Home = fs.readFileSync('./index.html', 'utf-8', (err,data) => {
    if(err) throw err
    return data
})
const a= JSON.parse(res)

http.createServer(function(req,res){
    const {pathname, query} = url.parse(req.url, true)
    if(pathname=='/'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(ListElem(a))
        res.end(Home)
    }
}).listen(1001)