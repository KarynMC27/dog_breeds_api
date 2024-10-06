const express = require(`express`)
const app = express()
const PORT = 8000

const dogs = {
    'papillon': {
        'category': 'toy',
        'originRegion': 'Europe',
        'originYear': '1500s',
        'height': '8-11 inches',
        'weight': '5-10 pounds',

    },

    'schnauzer': {
        'category': 'working' ,
        'originRegion': 'Europe',
        'originYear': '1880s',
        'height': '18-20 inches',
        'weight': '31-44 pounds',

    },

    'aussie': {
        'category': 'herding' ,
        'originRegion': 'U.S.A.',
        'originYear': '1800s',
        'height': '18-23 inches',
        'weight': '35-70 pounds',

    },

    'unknown': {
        'category': 'unknown' ,
        'originRegion': 'unknown',
        'originYear': 'unknown',
        'height': 'unknown',
        'weight': 'unknown',

    },
   
   


}

app.get(`/`, (request, response) => {
    response.sendFile(__dirname + `/index.html`)

})

app.get('/api/:dog', (request, response) => {
    const dogBreed = request.params.dog.toLowerCase()
 

    if (dogs[dogBreed]) {
            response.json(dogs[dogBreed])
    } else {
        response.json(dogs.unknown)
    }
    
    // response.json(dogs)
})

app.listen(PORT, () => {
    console.log(`this server is on ${PORT}`)
})