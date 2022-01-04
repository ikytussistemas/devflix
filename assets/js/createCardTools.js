var requestt = new XMLHttpRequest();
requestt.open("GET", "assets/dados/tools.json");
requestt.responseType = "json";
requestt.send();

requestt.onload = function () {
  var tools = request.response;
  creatCardsTools(tools);
};

const creatCardsTools = (tools) => {
  let swiper = document.getElementById('tools');
  for (var i = 0; i < tools.length; i++) {
    var card = document.createElement('div');
    var img = document.createElement('img');
    var title = document.createElement("h1");

    
    card.classList.add('slide');
    img.src = tools[i]["img"];
    
    title.innerHTML = tools[i]["title"];
    
    card.appendChild(img);
    card.appendChild(title);
    swiper.appendChild(card);
   
  }
};
