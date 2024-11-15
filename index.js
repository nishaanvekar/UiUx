import express from "express";
import ejs from "ejs";
import bandname from "bandname";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3001;
const band_random = bandname();
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",(req,res)=>{
    
    res.render("index.ejs");
});

app.post("/generate",(req,res)=>{
   res.render("index.ejs",{band_nm:band_random});
});


app.listen(port,()=>{
    console.log(`server started on ${port}`);
});

