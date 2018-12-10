//@flow
import express from 'express';
const app = express();
const port = 3000;

const dummyData = [
  {
    id: '1',
    name: 'Acil',
    umur: '90',
    pekerjaan: 'pedagang',
  },
  {
    id: '2',
    name: 'Acil2',
    umur: '89',
    pekerjaan: 'pedagang',
  },
  {
    id: '3',
    name: 'Acil4',
    umur: '67',
    pekerjaan: 'pedagang',
  },
  {
    id: '4',
    name: 'Acil5',
    umur: '23',
    pekerjaan: 'pedagang',
  },
  {
    id: '5',
    name: 'Acil6',
    umur: '54',
    pekerjaan: 'pedagang',
  },
  {
    id: '6',
    name: 'Acil7',
    umur: '29',
    pekerjaan: 'pedagang',
  },
  {
    id: '7',
    name: 'Acil8',
    umur: '29',
    pekerjaan: 'pedagang',
  },
  {
    id: '8',
    name: 'Acil9',
    umur: '89',
    pekerjaan: 'pedagang',
  },
];

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/item/:id', (req, res) => {
  console.log(req);
  if (req.params && req.params.id && dummyData) {
    for (let datum of dummyData) {
      if (datum.id === req.params.id) {
        res.send(datum);
      }
    }
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
