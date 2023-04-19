import express from 'express';
import bodyParser from 'body-parser';


const app = express()


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


let data = [{"place": "college library", "gender": "girl" },{"place": "cs library", "gender": "boy"}]

app.get("/api", (req,res) => {
    res.json(data)
})

app.post("/api", (req, res) =>{
    console.log(req.body)
    data.push(JSON.parse(JSON.stringify(req.body)));
    res.json(data)
})

app.listen(5000, () => {console.log("Server started on port 5000") })