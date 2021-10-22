const express = require('express');
const cors = require('cors'); // middleware
const app = express();

app.use(cors()); // calling the middleware fuction
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from my second node.');
})

// creating api dynamically
const users = [
    { id: 0, name: 'Harry', email: 'harry@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Snape', email: 'snape@gmail.com', phone: '01799999999' },
    { id: 2, name: 'Draco', email: 'draco@gmail.com', phone: '01744444444' },
    { id: 3, name: 'Bilbo', email: 'bilbo@gmail.com', phone: '01733333333' },
    { id: 4, name: 'Albus', email: 'albus@gmail.com', phone: '0175555555' },
    { id: 5, name: 'AzogD', email: 'azog@gmail.com', phone: '0170000000' }
]

// loading all the users or according to the search
app.get('/users', (req, res) => {
    const search = req.query.search;
    // user query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
})

// dynamic API
// loading an particular single user with id
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

// app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.get('/fruits', (req, res) => {
    res.send(['mago', 'oranges', 'banana', 'apple']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('fazli am khayte onek moja');
})

app.listen(port, () => {
    console.log('listing to port', port);
})