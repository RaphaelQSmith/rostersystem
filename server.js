const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000

app.get('/api/customers', (req, res)=>{
    const roster = [
            {id: 1, firstName: 'John', lastName: 'Doe'},
            {id: 2, firstName: 'Brad', lastName: 'Traversy'},
            {id: 3, firstName: 'Mary', lastName: 'Swanson'}
        ]
    res.json(roster);    
})

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .get('/', (req, res) => res.render('api/customers'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


