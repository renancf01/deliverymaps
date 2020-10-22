const app = require('express')();

app.get('/', (req, res) => {
    let objeto = req.query
    return res.send({message:"Tudo ok com o método GET"})
});

app.get('/', (req, res) => {
    return res.send({message:"Tudo ok com o método POST"})
})
app.listen(3000, () => {
    console.log('Online na porta 3000')
});

module.exports = app;