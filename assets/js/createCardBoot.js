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
  let swiper = document.getElementById("bootcamps");
  for (var i = 0; i < boot.length; i++) {
    var card = document.createElement("div");
    var img = document.createElement("img");
    var title = document.createElement("h1");
    var desc = document.createElement("p");
    var buttons = document.createElement("div");
    var btnDetail = document.createElement("button");
    var btnPlay = document.createElement("button");
    var link = document.createElement("a");
    
    desc.innerHTML = boot[i]["description"];
    desc.style.display = "none";
    
    btnDetail.classList.add("btn-detail");
    btnDetail.innerHTML = "Saiba mais...";

    link.href = boot[i]['url'];
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
      const desc =event["path"][2]["childNodes"][2]["innerHTML"]
      modalFactory(desc)
    })
    card.classList.add("slide");
    img.src = boot[i]["img"];

    title.innerHTML = boot[i]["title"];

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(buttons);
    swiper.appendChild(card);
  }
};
