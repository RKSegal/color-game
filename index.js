const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
	const htmlPath = path.join(__dirname+'/public/index2.html');
	console.log(htmlPath);
	res.sendFile(htmlPath);
});


app.get('/color', (req, res) => res.send('Hello color'));

app.get('/users/:username', (req, res) => res.send(`Hi ${req.params.username}`));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
