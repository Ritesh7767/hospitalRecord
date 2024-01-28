// fill in javascript code here
let data = []
document.querySelector("form").addEventListener("submit", function(){
    event.preventDefault()
    let name = document.querySelector("#name").value
    let id = document.querySelector("#docID").value
    let department = document.querySelector("#dept").value
    let exp = document.querySelector("#exp").value
    let email = document.querySelector("#email").value
    let contact = document.querySelector("#mbl").value

    let obj = new MakeObject(name, id, department, exp, email, contact)
    data.push(obj)

    AppendData()

})

function MakeObject(name, id, department, exp, email, contact){
    this.name = name
    this.id = id
    this.department = department
    this.exp = exp
    this.email = email
    this.contact = contact

}

function AppendData(){

    container = document.querySelector("tbody")
    container.innerHTML = ""

    data.forEach(function(ele){
        let tablerow = document.createElement("tr")
        let name = document.createElement("td")
        let id = document.createElement("td")
        let department = document.createElement("td")
        let exp = document.createElement("td")
        let email = document.createElement("td")
        let contact = document.createElement("td")
        let role = document.createElement("td")
        let Del = document.createElement("td")
        let delbtn = document.createElement("button")

        name.innerText = ele.name
        id.innerText = ele.id
        department = ele.department
        exp.innerText = ele.exp
        email.innerText = ele.email
        contact.innerText = ele.contact
        
        ele.exp > 5 ? role.innerText = "Senior" : ele.exp >= 2 ? role.innerText = "Junior" : role.innerText = "Trainee"
        delbtn.innerText = "Delete"

        delbtn.addEventListener("click", function(){
            DeleteData(ele.id)
        })

        Del.append(delbtn)
        tablerow.append(name, id, department, exp, email, contact, role, Del)

        container.append(tablerow)
    })
}

function DeleteData(id){

    data = data.filter(function(ele){
        return ele.id != id
    })

    AppendData()
}

