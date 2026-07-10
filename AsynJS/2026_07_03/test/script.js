import axios from "axios";

async function fetchdata() {
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}
fetchdata()