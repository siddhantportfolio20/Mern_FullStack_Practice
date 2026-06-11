// ------------------- Accessing Html Elements ------------------------------------------

// console.log(document.body);  
// console.log(document.querySelector("h1"));// Targets only the first element 
// console.log(document.querySelector(".head"))


// console.log(document.querySelectorAll("h1"));// knowing the index of the h1 tag
// console.log(document.querySelectorAll("h1")[1]);// getting control of the 2nd h1 tag but this is not a good practice so we use only id 


// for getting each element in the h1 we use foreach

// document.querySelectorAll("h1").forEach(item => console.log(item.textContent))

// Now by using for loop we can do the same thing

// let info = document.querySelectorAll("h1")
// for(let i =0 ;i < info.length ; i++){
//     console.log(info[i].textContent);
// }

// console.log(document.querySelectorAll(".post .featured"));

// using textContent you can access and update the text inside a component
// document.querySelector("").textContent ="hello new world ";

// let posts = document.querySelectorAll(".post .featured")

// for(let i = 0; i < posts.length ;i++){
//     posts[i].textContent =`new post ${i+1}`
// }

//inner html -> gets and sets the HTML content inside the elements

// console.log(document.querySelector(".post").innerHTML)
// document.querySelector(".post").innerHTML =`texting innerHTML`
// document.querySelector(".post").innerHTML = ""

// document.querySelector(".list").innerHTML = ""
// for(let i =1 ; i<6 ;i++){

//     document.querySelector(".list").innerHTML += `<li>item ${i}</li>`

// }
// Note:- 
// when you want to update the text use textContent ans 
// when you want to update the HTML use innerHTML 
// textContent is faster than innerHTML -> in innerHTML the HTML tags are parsed and 
// rendered again to display the updated HTML



//--------------------- Get elements by Id and ClassName ----------------------------

// getElementById & getElementByClassName
// document.getElementById("elem")
// document.getElementByClassName("elem")


