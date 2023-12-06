const box = document.createElement("div")
const div = document.createElement("div")
div.setAttribute("id", "wrapper")
box.setAttribute("id", "box")

const h1 = document.createElement("h1")


const Name = document.createElement("input")
Name.setAttribute("placeholder", "Имя")

const Email = document.createElement("input")
Email.setAttribute("placeholder", "E-mail")

const Password = document.createElement("input")
Password.setAttribute("placeholder", "Пороль")

const button = document.createElement("button")
button.setAttribute("onclick", "valideshion()")
button.textContent = "Регистрация"

const a = document.createElement("a")
a.setAttribute("href", "http://127.0.0.1:5501/index.html")
a.textContent = "ВОЙТИ"

let data = JSON.parse(localStorage.getItem("data")) || []

function valideshion(){
    if (Name.value.trim() && Email.value.trim().includes("@", ".") && Password.value.trim().length >= 8) {
        let datas = {
            name:Name.value.trim(),
            email:Email.value.trim(),
            password:Password.value.trim()
        }
    
        data.push(datas)
        localStorage.setItem("data", JSON.stringify(data))

        Name.value = ""
        Email.value = ""
        Password.value = ""

        alert("Вы Зарегались")

    } else {
        console.log('NONE')
    }
}



div.append(button, a)
box.append(h1, Name, Email, Password, div)
document.body.append(box)