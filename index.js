import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))


var today = new Date();
var dd = today.getDay();
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var zile = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
today = zile[dd]+ ' ' + mm + ' ' + yyyy;
var Works = ['Empty', 'Empty', 'Empty','Empty', 'Empty','Empty', 'Empty', 'Empty','Empty', 'Empty']
var Azi = ['Empty', 'Empty', 'Empty','Empty', 'Empty','Empty', 'Empty', 'Empty','Empty', 'Empty']

app.get("/", (req, res) => {
  const newItem = req.body['newItem']
  Azi.push(newItem)
  Azi.shift()
  const data = {titlu: today, lista: Azi, value: zile[dd]}
  console.log(Azi)
  res.render("index.ejs", data);
});


app.post("/", (req, res) => {
  const newItem = req.body['newItem']
  Azi.push(newItem)
  Azi.shift()
  const data = {titlu: today, lista: Azi, value: zile[dd]}
  console.log(Azi)
  res.render("index.ejs", data);
});

app.get("/work", (req, res) => {
  const newItem = req.body['newItem']
  Works.push(newItem)
  Works.shift()
  const data = {titlu: 'Work List', lista: Works, value: 'Work'}
  console.log(Works)
  res.render("index.ejs", data);
});

app.post("/work", (req, res) => {
  const newItem = req.body['newItem']
  Works.push(newItem)
  Works.shift()
  const data = {titlu: 'Work List', lista: Works, value: 'Work'}
  console.log(Works)
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
