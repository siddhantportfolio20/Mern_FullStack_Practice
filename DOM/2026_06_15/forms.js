// ------------------------ forms --------------------------------------------

const forms = document.getElementById("my-form")
// another way to target form 

// const form = document.forms.myForm
// console.log(form);
// console.log(forms);


// -------- Method to target input element ----------
// const addressInput = document.getElementById("addressInput")
// console.log(forms.elements.address);

const name = forms.elements.name
const address = forms.elements.address
const age = forms.elements.age
const userinfo = forms.elements.userinfo

const table = document.querySelector("table")
const submitBtn = document.getElementById("submitBtn")
const tbody =document.querySelector("tbody")
console.log(tbody);
const dataPerson = []
// task 
// make a dynamic table

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()// for preventing the refresh of the submit button 

    // storing the data in objects 

    const personObj = {}

    if(!name.value.trim()){
        return
    }else{
        personObj.name = name.value
    }
    if(!address.value.trim()){
        return
    }else{
        personObj.address = address.value
    }
    if(!age.value.trim() || age.value < 18){
        return
    }else{
        personObj.age = age.value 
    }
    if(!userinfo.value.trim()){
        return
    }else{
        personObj.userinfo = userinfo.value 
    }


    console.log(personObj);
    dataPerson.push(personObj)
    tbody.innerHTML =""
    createTable()
    

    forms.reset()// reset all the values in form 

    // let store = []
    // store.push(personObj)
    
    // my approch  

    // let tr = document.createElement("tr")
    // let nametable = document.createElement("td")
    // let addresstable = document.createElement("td")
    // let agetable = document.createElement("td")
    // let userinfotable = document.createElement("td")
    // nametable.textContent = personObj.name
    // addresstable.textContent = personObj.address
    // agetable.textContent = personObj.age
    // userinfotable.textContent = personObj.userinfo
    // table.appendChild(tr)
    // tr.appendChild(nametable)
    // tr.appendChild(addresstable)
    // tr.appendChild(agetable)
    // tr.appendChild(userinfotable)




})

function createTable(){
    dataPerson.map(item =>{
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
        td1.textContent = item.name
    let td2 = document.createElement("td")
        td2.textContent = item.address
    let td3 = document.createElement("td")
        td3.textContent = item.age
    let td4 = document.createElement("td")
        td4.textContent = item.userinfo

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tbody.appendChild(tr)
})

}

