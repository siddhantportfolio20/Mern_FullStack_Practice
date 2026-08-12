import express from "express";

const app = express();
const PORT = 3000;


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

// Note : if the routes are same remeber to keep the methods different , if both are same then the 
// 1st route which is created onnly hits 


// getting particular detials about a movie and updating 

// app.patch()

app.patch("/movies/:id",(req,res)=>{
  console.log("Patch is running ");
  const {id} = req.params;
  console.log(id);
  const {watched} =req.body
  const {title , genre} = req.body
  const searchMovie = movies.find(item => item.id == id)
  console.log(watched);
  if(!searchMovie) res.status(404).send("movie does not exists")
  if(watched !== undefined) searchMovie.watched = watched
  
  if(title !== undefined)   searchMovie.title = title
  
  if(genre !== undefined)   searchMovie.title = genre

  console.log(title);
  searchMovie.title = title
  const index = movies.findIndex(m => m)
  
  movies[id -1 ] = searchMovie
  res.json(movies)

  
})


app.put("/movies/:id",(req,res)=>{
  const {id} = req.params
  const {watched ,title , genre} = req.body

  const searchMovie = movies.find(item => item.id == id)

  const index = movies.findIndex(m => m.id == id)
  if(!searchMovie){
    res.status(404).send("movies does not exist")
  }

  const updatMovie = {
    id : Number(id) , title , genre , watched
  }
  movies[index] = updatMovie
  res.json(movies)
})


app.delete("/movies/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = movies.findIndex(movie => movie.id === id);

  movies.splice(index, 1);

  res.json({
    message: "Movie deleted successfully",
    movies
  });
});



const todos = [
  {id: 101, task: "todo1",  complete:false},
  {id: 102, task: "todo1",  complete:false},
  {id: 103, task: "todo1",  complete:false},
  {id: 104, task: "todo1",  complete:false},
  {id: 105, task: "todo1",  complete:false},

]

// implement the below routes 

app.get("/todo", (req, res) => {
  res.send("Get all todos");
});

app.post("/todo", (req, res) => {
  res.send("Create todo");
});

app.patch("/todo/toggle-completed/:id", (req, res) => {
  res.send("Toggle todo");
});

app.put("/todo/:id", (req, res) => {
  res.send("Edit todo");
});

app.delete("/todo/:id", (req, res) => {
  res.send("Delete todo");
});