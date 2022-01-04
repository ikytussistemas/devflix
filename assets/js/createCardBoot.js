
var url = "assets/dados/bootcamps.json";

var request = new XMLHttpRequest();
request.open("GET", url);
request.responseType = "json";
request.send();

request.onload = function () {
  var boot = request.response;
  creatCardsBoot(boot);
};

const creatCardsBoot = (boot) => {
  let swiper = document.getElementById('bootcamps');
  for (var i = 0; i < boot.length; i++) {
    var card = document.createElement('div');
    var img = document.createElement('img');
    var title = document.createElement("h1");

    
    card.classList.add('slide');
    img.src = boot[i]["img"];
    
    title.innerHTML = boot[i]["title"];
    
    card.appendChild(img);
    card.appendChild(title);
    swiper.appendChild(card);
   
  }
};
