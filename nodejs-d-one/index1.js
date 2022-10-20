const express = require('express');
const app = express();

let person = [
    {name: 'John', age: 30},
    {name: 'Mary', age: 25},
    {name: 'Peter', age: 40}

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




const PORT = 3000;

app.listen(PORT, () => {
    try{
        console.log(`Server is running on port ${PORT}`);
    }catch(err){
        console.log(err);
    }
})