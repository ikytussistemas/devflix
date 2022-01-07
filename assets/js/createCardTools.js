var requestt = new XMLHttpRequest();
requestt.open("GET", "assets/dados/tools.json");
requestt.responseType = "json";
requestt.send();

requestt.onload = function () {
  var tools = requestt.response;
  creatCardsTools(tools);
};

const creatCardsTools = (tools) => {
  let swiper = document.getElementById('tools');
  for (var i = 0; i < tools.length; i++) {
    var card = document.createElement('div');
    var img = document.createElement('img');
    var title = document.createElement("h1");
    var desc = document.createElement("p");
    var buttons = document.createElement("div");
    var btnDetail = document.createElement("button");
    var btnPlay = document.createElement("button");
    var link = document.createElement("a");
    
    desc.innerHTML = tools[i]["description"];
    desc.style.display = "none";
    
    btnDetail.classList.add("btn-detail");
    btnDetail.innerHTML = "Saiba mais...";

    link.href = tools[i]['url'];
    link.target = '_blanc'
    link.innerHTML = "Acessar";

    btnPlay.classList.add("btn-play");
    btnPlay.appendChild(link);

    buttons.classList.add('buttons')
    buttons.appendChild(btnPlay);
    buttons.appendChild(btnDetail);

    btnDetail.addEventListener("click", event => {
      if(document.getElementById('modalDetail')) {
        document.getElementById('modalDetail').remove()
      }
      modalFactory(event["path"][2]["childNodes"][2]["innerHTML"])
    })    
    
    
    card.classList.add('slide');
    img.src = tools[i]["img"];
    
    title.innerHTML = tools[i]["title"];
    
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(buttons);
    swiper.appendChild(card);
  }
  checkmodal()
};
