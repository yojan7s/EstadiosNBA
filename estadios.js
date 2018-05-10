const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000


let equipos = [
	{
		id: 1,
		nombre: 'Atlanta Hawks',
		estadio: [
			{pabellon: 'Philips Arena', capacidad: '18.047', propiedad: 'Pública'}
		],
		jugadores: [
			{id: 1, nombre: 'carlos'},
			{id: 2, nombre: 'juan'}
		]
	},
	{
		id: 2,
		nombre: 'Boston Celtics',
		estadio: [
			{pabellon: 'TD Garden', capacidad: '18.624', propiedad: 'Privada'}
		],
		jugadores: [
			{id: 1, nombre: 'carlos'},
			{id: 2, nombre: 'juan'}
		]
	},
	{
		id: 3,
		nombre: 'Brooklyn Nets',
		estadio: [
			{pabellon: 'Barclays Center', capacidad: '17.732', propiedad: 'Pública'}
		],
		jugadores: [
			{id: 1, nombre: 'carlos'},
			{id: 2, nombre: 'juan'}
		]
	},{
		id: 4,
		nombre: 'Charlotte Hornets',
		estadio: [
			{pabellon: 'Spectrum Center', capacidad: '19.077', propiedad: 'Pública'}
		],
		jugadores: [
			{id: 1, nombre: 'carlos'},
			{id: 2, nombre: 'juan'}
		]
	},{
		id: 5,
		nombre: 'Chicago Bulls',
		estadio: [
			{pabellon: 'United Center', capacidad: '20.917', propiedad: 'Privada'}
		],
		jugadores: [
			{id: 1, nombre: 'carlos'},
			{id: 2, nombre: 'juan'}
		]
	},
	{
		id: 6,
		nombre: 'Cleveland Cavaliers',
		estadio: [
			{pabellon: 'Quicken Loans Arena', capacidad: '20.562', propiedad: 'Pública'}
		],
		jugadores: [
			{id: 1, nombre: 'carlos'},
			{id: 2, nombre: 'juan'}
		]
	},
	{
		id: 7,
		nombre: 'Dallas Mavericks',
		estadio: [
			{pabellon: 'American Airlines Center', capacidad: '19.200', propiedad: 'Pública'}
		],
		jugadores: [
			{id: 1, nombre: 'carlos'},
			{id: 2, nombre: 'juan'}
		]
	},
	{
		id: 8,
		nombre: 'Denver Nuggets',
		estadio: [
			{pabellon: 'Pepsi Center', capacidad: '19.155', propiedad: 'Privada'}
		],
		jugadores: [
			{id: 1, nombre: 'carlos'},
			{id: 2, nombre: 'juan'}
		]
	},
	{
		id: 9,
		nombre: 'Cleveland Cavaliers',
		estadio: [
			{pabellon: 'Quicken Loans Arena', capacidad: '20.562', propiedad: 'Pública'}
		],
		jugadores: [
			{id: 1, nombre: 'carlos'},
			{id: 2, nombre: 'juan'}
		]
	},
	{
		id: 10,
		nombre: 'Detroit Pistons',
		estadio: [
			{pabellon: 'Little Caesars Arena', capacidad: '20.491', propiedad: 'Pública'}
		],
		jugadores: [
			{id: 1, nombre: 'carlos'},
			{id: 2, nombre: 'juan'}
		]
	},
	
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ********************************************************************
// ********************************************************************

// URL raiz de la api
// http://127.0.0.1:5000
app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

// URL para listar todos los usuarios
// http://127.0.0.1:5000/equipos
app.get('/equipos', (req, res) => {
    res.send(equipos)
})

// Crear y lanzar el servidor
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})