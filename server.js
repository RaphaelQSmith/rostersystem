const express = require('express');

const app = express();

app.get('/api/customers', (req, res)=>{
    const roster = [
            {id: 1, firstName: 'John', lastName: 'Doe'},
            {id: 2, firstName: 'Brad', lastName: 'Traversy'},
            {id: 3, firstName: 'Mary', lastName: 'Swanson'}
        ]
    res.json(roster);    
})

const port = 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));

