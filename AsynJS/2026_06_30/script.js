// // task-1
// // task display list the name of all the products title whos categores is groceries

// let div = document.querySelector("div")

// let API_URL = "https://dummyjson.com/products"


// async function fetchData(Api) {

//     try{
//         let res1 = await fetch(Api)
//         let data = await res1.json()
//         render(data)

//     }catch(err){
//         div.textContent = "Error "+ err
//     }
// }
// fetchData(API_URL)

// let lists = document.getElementById("lists")
// function render(data){
//     let filteredData = data.products.filter((item)=> item.category === "groceries")
//     filteredData.map(item =>{
//         let li = document.createElement("li")
//         li.textContent = item.title
//         lists.appendChild(li)
//     })
// }

// to get the details oof this api we can get it in inspect , in network
// status code = 200 ok sucessfull 
// contain type

// when we are fetching the data from an url or server we that is called as get 
// and when we are uploading it is called as post  


// -------------------------- Post ----------------------

async function createPost() {
    const newPost = {
        title: "My first Post",
        body: "This is body",
        userId: 1
    }
    const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newPost)
    })
    const savedPost = await res.json()
    console.log("Created", savedPost);
}
createPost()


// ------------ PUT ----------------
// Updating a field in DataBase

async function updatePost(id) {
    const updatedFields = {
        title: "Updated title",
        body: "Updated field",
        
    }
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: "PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(updatedFields)
    })
    const data = await res.json()
    console.log("Updated", data);
}
updatePost(1)

// -------------- Delete --------------------

async function deletePosts(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: "PUT"
    
    })
    console.log(res);
    if(res.ok){
        console.log("Post deleted");
    }else{
        console.log("Post not deleted");
    }
}
deletePosts(1)