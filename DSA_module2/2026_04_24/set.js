console.log("Set")

// its a built in collection that stores only unique vlaues , meaning duplicates are ignored 
// it alse preseves the insertion order during iteration 
const set = new Set()

// .add() adds the item indside set , if the item already exists it will ignore that item

set.add(10)
set.add(30)
set.add(10)
console.log(set)

// set also has .has() ,.delete(),.size, .clear

console.log(set.delete(10))
console.log(set.has(10))
console.log(set.size)


let usernames = ["sid", "john", "sid", "alex", "john"]

// method 1 ideal and better method 
let uniqueUsers = new Set(usernames)

console.log(uniqueUsers)

// method 2
let sets = new Set()
for(const item of usernames){
    sets.add(item)
}
console.log(sets)
