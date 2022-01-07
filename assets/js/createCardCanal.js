
var requestc = new XMLHttpRequest();
requestc.open("GET", "assets/dados/canais.json");
requestc.responseType = "json";
requestc.send();

requestc.onload = function () {
  var dados = requestc.response;
  creatCardsCanal(dados);
};

const creatCardsCanal = (dados) => {
  let swiper = document.getElementById('canais');
  for (var i = 0; i < dados.length; i++) {
    var card = document.createElement('div');
    var img = document.createElement('img');
    var title = document.createElement("h1");
    var buttons = document.createElement("div");
    var btnPlay = document.createElement("button");
    var link = document.createElement("a");

    link.href = dados[i]['url'];
    link.target = '_blanc'
    link.innerHTML = "Acessar";

    btnPlay.classList.add("btn-play");
    btnPlay.appendChild(link);

    buttons.classList.add('buttons')
    buttons.appendChild(btnPlay);
        
    card.classList.add('slide');
    img.src = dados[i]["img"];
    
    title.innerHTML = dados[i]["title"];
    
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(buttons)
    swiper.appendChild(card);
   
  }
};
