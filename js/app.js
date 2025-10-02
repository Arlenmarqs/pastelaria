
let icon = document.querySelector("#icon")

function darkmode() {
    let body = document.querySelector("body")
    let sectionIcon = document.querySelector("#teste")
    let icon = document.querySelector("#icon")

    body.classList.toggle("body-darkmode")
    sectionIcon.classList.toggle("section-darkmode")
    icon.classList.toggle("icon-class")
}
icon.addEventListener("click", darkmode)

const users = [
  {
    id: 1,
    username: "eliasf",
    password: "123456",
    name: "Elias Fernandes"
  },
  {
    id: 2,
    username: "maria",
    password: "senhaSegura",
    name: "Maria Oliveira"
  },
  {
    id: 3,
    username: "joaozinho",
    password: "qwerty",
    name: "João Silva"
  },
  {
    id: 4,
    username: "ana.dev",
    password: "devPass123",
    name: "Ana Costa"
  },
  {
    id: 5,
    username: "ricardo",
    password: "admin@2025",
    name: "Ricardo Souza"
  },
  {
    id: 6,
    username: "marcelo88",
    password: "m4rcel0Pass!",
    name: "Marcelo Lima"
  },
  {
    id: 7,
    username: "bianca.codes",
    password: "B!ancaDev2025",
    name: "Bianca Rodrigues"
  },
  {
    id: 8,
    username: "gabriel_x",
    password: "gx2025senha",
    name: "Gabriel Xavier"
  },
  {
    id: 9,
    username: "larissam",
    password: "Larissa#99",
    name: "Larissa Martins"
  },
  {
    id: 10,
    username: "thiago_b",
    password: "Tbg@2025",
    name: "Thiago Barros"
  },
  {
    id: 11,
    username: "paula_front",
    password: "frontEnd!11",
    name: "Paula Nunes"
  },
  {
    id: 12,
    username: "fernando_db",
    password: "dbMaster2025",
    name: "Fernando Castro"
  },
  {
    id: 13,
    username: "isabela",
    password: "isa_pass123",
    name: "Isabela Freitas"
  },
  {
    id: 14,
    username: "carlos_admin",
    password: "Adm1n#Car",
    name: "Carlos Menezes"
  },
  {
    id: 15,
    username: "sophia_ui",
    password: "uiuxSophia",
    name: "Sophia Almeida"
  },
  {
    id: 16,
    username: "pedro_api",
    password: "p3dr0_api",
    name: "Pedro Gonçalves"
  },
  {
    id: 17,
    username: "vivian.design",
    password: "V!vD3s1gn",
    name: "Vivian Costa"
  },
  {
    id: 18,
    username: "brunoops",
    password: "brun0ops!",
    name: "Bruno Oliveira"
  },
  {
    id: 19,
    username: "natalia",
    password: "nata2025$",
    name: "Natália Pereira"
  },
  {
    id: 20,
    username: "igor_s",
    password: "IgorSecure1",
    name: "Igor Santos"
  }
];

function login() {
    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value
    let user = users.find(user => user.username === username && user.password===password )
    if(user === undefined) {
        let loginForm = document.querySelector("#loginForm")
        let paragraph = document.querySelector(".text-red")
        if(paragraph === null) {
            loginForm.innerHTML += ` <p class="text-red">Login e/ou senha inválidos</p>`
        }
        return
    }
    window.location.href="./list.html"
}


