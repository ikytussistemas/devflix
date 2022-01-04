
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

    
    card.classList.add('slide');
    img.src = dados[i]["img"];
    
    title.innerHTML = dados[i]["title"];
    
    card.appendChild(img);
    card.appendChild(title);
    swiper.appendChild(card);
   
  }
};
