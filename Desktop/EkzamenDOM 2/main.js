const box = document.createElement("div")
const div = document.createElement("div")
div.setAttribute("id", "wrapper")
box.setAttribute("id", "box")

const h1 = document.createElement("h1")


const Email = document.createElement("input")
Email.setAttribute("placeholder", "E-mail")

const Password = document.createElement("input")
Password.setAttribute("placeholder", "Пороль")

const button = document.createElement("button")
button.setAttribute("onclick", "valideshion()")
button.textContent = "Войти"

const a = document.createElement("a")
a.setAttribute("href", "http://127.0.0.1:5500/index.html")
a.textContent = "РЕГИСТРАЦИЯ"

let data = JSON.parse(localStorage.getItem("data")) || []

function valideshion(){
    if (Email.value.trim().includes("@", ".") && Password.value.trim().length >= 8) {
        data.forEach(elem => {
            if (elem.email === Email.value && elem.password === Password.value) {
                console.log("Ураааааа")
                alert("Ураааа Вы Зашли")
            }
        })

    } else {
        console.log('NONE')
    }
}



div.append(button, a)
box.append(h1, Email, Password, div)
document.body.append(box)