const express= require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('<h1 style="color:green;">ECS Pipeline Test</h1>\n');
});


app.listen(PORT, () => {
    console.log('Listening on ${PORT}');
});