const pasteis = [
  {
    id: 1,
    nome: "Pastel de Palmito",
    preco: 7.50,
    ingredientes: "Palmito, Cebola, Azeitona, Temperos",
    tamanho: "Médio"
  },
  {
    id: 2,
    nome: "Pastel de Pizza",
    preco: 8.00,
    ingredientes: "Presunto, Mussarela, Tomate, Orégano",
    tamanho: "Grande"
  },
  {
    id: 3,
    nome: "Pastel de Carne Seca com Catupiry",
    preco: 9.00,
    ingredientes: "Carne seca, Catupiry, Cebola",
    tamanho: "Grande"
  },
  {
    id: 4,
    nome: "Pastel de Bacalhau",
    preco: 10.00,
    ingredientes: "Bacalhau, Batata, Cebola, Azeitona",
    tamanho: "Grande"
  },
  {
    id: 5,
    nome: "Pastel de Banana com Canela",
    preco: 6.50,
    ingredientes: "Banana, Canela, Açúcar",
    tamanho: "Médio"
  },
  {
    id: 6,
    nome: "Pastel de Doce de Leite",
    preco: 7.00,
    ingredientes: "Doce de leite, Chocolate branco",
    tamanho: "Pequeno"
  },
  {
    id: 7,
    nome: "Pastel de Queijo com Orégano",
    preco: 6.50,
    ingredientes: "Mussarela, Orégano",
    tamanho: "Médio"
  },
  {
    id: 8,
    nome: "Pastel de Frango com Requeijão",
    preco: 8.50,
    ingredientes: "Frango desfiado, Requeijão, Cebola",
    tamanho: "Médio"
  },
  {
    id: 9,
    nome: "Pastel de Camarão",
    preco: 11.00,
    ingredientes: "Camarão, Requeijão, Cebola, Salsinha",
    tamanho: "Grande"
  },
  {
    id: 10,
    nome: "Pastel de Chocolate com Morango",
    preco: 9.50,
    ingredientes: "Chocolate ao leite, Morango, Granulado",
    tamanho: "Médio"
  },
  {
    id: 11,
    nome: "Pastel de vento",
    preco: 5.50,
    ingredientes: "Vento e massa",
    tamanho: "Grande"
}
];

let body = document.querySelector("body")
function renderProducts() {
    let tbody = document.querySelector("tbody")
    tbody.innerHTML = ""

    for (let index = 0; index < pasteis.length; index++) {
        let tr = document.createElement("tr")
        tr.innerHTML = `
                <td>${pasteis[index].id}</td>
                <td>${pasteis[index].nome}</td>
                <td>${pasteis[index].preco}</td>
                <td>${pasteis[index].ingredientes}</td>
                <td>${pasteis[index].tamanho}</td>
                <td>
                  <button onclick="editarPastel(${pasteis[index].id})" class="btn btn-success">Editar</button>
                  <button  onclick="deletarPasteis(${pasteis[index].id})" class="btn btn-danger">Excluir</button>
                </td>
        `
        tbody.appendChild(tr)
    }
}
renderProducts()

function deletarPasteis(id) {
  let tbody = document.querySelector("tbody")
  let pastel = pasteis.findIndex((pastel) => pastel.id === id)
  pasteis.splice(pastel,1)
  tbody.innerHTML = ""
  renderProducts()
}


function renderModal() {
    let div = document.createElement("div")
    div.classList.add("modal-overlay")
    div.innerHTML = `
        <div id="createModal" class="modal-content">
          <form action="">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Nome do pastel" aria-label="Id" aria-describedby="basic-addon1" id="inputNome">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Preço desejado" aria-label="Id" aria-describedby="basic-addon1" id="inputPreco">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Ingredientes" aria-label="Id" aria-describedby="basic-addon1" id="inputIngredientes">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Tamanho do pastel" aria-label="Id" aria-describedby="basic-addon1" id="inputTamanho">
            </div>
          </form>

        <div id="div-buttons">
          <button onclick="removeModal()" type="button" class="btn btn-secondary">Fechar</button>

          <button type="button" onclick="criarPastel()" class="btn btn-primary">Enviar</button>
        </div>
        </div>
    `
    body.appendChild(div)
}

function removeModal() {
  let createModal = document.querySelector(".modal-overlay")
  body.removeChild(createModal)
}

function criarPastel() {
  let nome = document.querySelector("#inputNome").value;
  let preco = Number(document.querySelector("#inputPreco").value);
  let ingredientes = document.querySelector("#inputIngredientes").value;
  let tamanho = document.querySelector("#inputTamanho").value;

  let maiorId = 0;
  for (let index = 0;index < pasteis.length; index++){
    if (pasteis[index].id > maiorId) {
      maiorId = pasteis[index].id;
    }
  }
  let novoId = maiorId + 1;

  pasteis.push({
    id: novoId,
    nome,
    preco,
    ingredientes,
    tamanho
  });

  removeModal();
  renderProducts();
}

function editarPastel(id) {

  const pastel = pasteis.find(p => p.id === id);
  if (!pastel) return;

  let div = document.createElement("div");
  div.classList.add("modal-overlay");
  div.innerHTML = `
    <div id="editModal" class="modal-content">
      <h3>Editar Pastel</h3>
      <form>
        <div class="form-group">
          <input type="number" class="form-control" value="${pastel.id}" id="editId" disabled>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" value="${pastel.nome}" id="editNome">
        </div>
        <div class="form-group">
          <input type="number" class="form-control" value="${pastel.preco}" id="editPreco">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" value="${pastel.ingredientes}" id="editIngredientes">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" value="${pastel.tamanho}" id="editTamanho">
        </div>
      </form>

      <div id="div-buttons">
        <button onclick="removeModal()" type="button" class="btn btn-secondary">Cancelar</button>
        <button type="button" onclick="salvarEdicao(${id})" class="btn btn-success">Salvar</button>
      </div>
    </div>
  `;
  body.appendChild(div);
}
function salvarEdicao(id) {
  const index = pasteis.findIndex(p => p.id === id);
  if (index === -1) return;

  const nome = document.querySelector("#editNome").value;
  const preco = Number(document.querySelector("#editPreco").value);
  const ingredientes = document.querySelector("#editIngredientes").value;
  const tamanho = document.querySelector("#editTamanho").value;

  pasteis[index] = {
    ...pasteis[index],
    nome,
    preco,
    ingredientes,
    tamanho
  };

  removeModal();
  renderProducts();
}

