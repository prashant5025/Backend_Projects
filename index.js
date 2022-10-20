const axios = require('axios');
const express = require('express');
const app = express();

let person = [
    {name: "prashant", age: 30},
    {name: "john", age: 25},
    {name: "smith", age: 40}

]


app.get('/', async (req, res) => {

    try{
        const data = {
            person: person
        }
        res.send(data);

    }catch(err){
        console.log(err);
    }
})


app.get('/api/users', async (req, res) => {
    try{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        res.send(data);
    }catch(err){
        console.log(err);
    }
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})