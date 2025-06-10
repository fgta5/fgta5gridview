import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
import express from 'express';
import favicon from 'serve-favicon';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();



app.set('view engine', 'ejs');

app.use(favicon('favicon.ico'))
app.use(express.json()); 


app.use('/dist', express.static('dist'))
app.use('/images', express.static('images'))
app.use('/src', express.static('src'))
app.use('/styles', express.static('styles'))


app.use('/:env/dist', express.static('dist'))
app.use('/:env/images', express.static('images'))
app.use('/:env/src', express.static('src'))
app.use('/:env/styles', express.static('styles'))


app.get('/', function(req, res) {
	res.render('index', {
		title: 'Fgta5gridview Development',
	});
})


/* Debug Test */
app.get('/debug/:page', function(req, res) {
	const pageName = req.params.page;
	res.render(pageName, {
		title: pageName + ' - Fgta5gridview Debug',
		script: 'head-script-dev.ejs',
		style: 'head-style-dev.ejs'
	}, (err, html)=>{
		if (err) {
			console.error('Error rendering EJS:', err.message);
			return res.status(404).send('Halaman tidak ditemukan');
		}
		res.send(html);
	});
});


/* Release */
app.get('/release/:page', function(req, res) {
	const pageName = req.params.page;
	res.render(pageName, {
		title: pageName + ' - fgta5form Build',
		script: 'head-script-build.ejs',
		style: 'head-style-build.ejs'
	}, (err, html)=>{
		if (err) {
			console.error('Error rendering EJS:', err.message);
			return res.status(404).send('Halaman tidak ditemukan');
		}
		res.send(html);
	});
});




app.listen(3001);
console.log('Server is listening on port 3001');