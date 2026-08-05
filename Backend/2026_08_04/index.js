import express from "express";

const app = express();
const PORT = 8080;


app.use(express.json())
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Express Server</title>
      </head>
      <body>
        <h1>Hello from Express 🚀</h1>
        <p>My server is running!</p>
      </body>
    </html>
  `);
  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


const movies = [ 
    {id:1 , title : "Inception",genre : "Sci-fi", watched:true},
    {id:2 , title : "SpiderMan",genre : "Action", watched:true},
    {id:3 , title : "Dhamal ",genre : "funny", watched:true},
    {id:4 , title : "Science",genre : "Sci-fi", watched:true},
]

let AdminEmail = "admin@gmail.com"
let AdminPassword = "adminPassword"

// for the below dynamic route fetch all the movies in the genre
app.get('/:movies/:genre',(req , res)=>{
    
    const genre = req.params.genre
    const title = req.params.movies
    const filteredGenre = movies.filter(item =>{return item.genre === genre && item.title === title})    
    res.json(filteredGenre)
})


// What is POST request 
// Updating data 

app.post('/login',(req,res)=>{
    const {email} = req.body
    const {password} = req.body
    if(email == AdminEmail && password == AdminPassword){
        res.json({message:"admin login successful"})
    }else{
        res.json({message:"wrong credentials"})
    }
})

app.post("/movies",(req,res)=>{
   const { title, genre, watched } = req.body;

    const newMovie = {
        id: movies[movies.length - 1].id + 1,
        title,
        genre,
        watched
    };

    movies.push(newMovie);
    res.json({message:"Movie Added sucessfully",movies:newMovie}
    )

})