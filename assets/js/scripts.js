// navegaçãod o carousel
const nextBtns = document.getElementsByClassName('next')
const prevBtns = document.getElementsByClassName('prev')

for(let nextbtn of nextBtns) {
  nextbtn.addEventListener("click", event => {
    const slidesN = event['path'][1]
    if(slidesN.scrollLeft >= (slidesN.scrollWidth- slidesN.clientWidth)) {
      slidesN.scrollLeft = 0
    } else {
      slidesN.scrollBy(300, 0)
    }
  })
}

for(let prevBtn of prevBtns) {
  prevBtn.addEventListener("click", event => {
    const slidesP = event['path'][1]
    slidesP.scrollBy(-300, 0)
  })
}

//Criar modal
const modalFactory = async (desc) => {
  const modalEl = document.createElement('div');
  modalEl.classList.add('modal');
  modalEl.id = 'modalDetail';

  const modalContentEl = document.createElement('div');
  modalContentEl.classList.add('modal-content');

  const modalHeaderEl = document.createElement('div');
  modalHeaderEl.classList.add('modal-header');

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close');
  closeBtn.innerHTML = '&times;';

  closeBtn.addEventListener("click", () => {
    modalEl.style.display = "none";
    modalEl.remove();
  });

  const title = document.createElement('h2');
  title.innerHTML = 'Detalhes';

  modalHeaderEl.appendChild(closeBtn);
  modalHeaderEl.appendChild(title);

  const modalBodyEl = document.createElement('div');
  modalBodyEl.classList.add('modal-body');

  const description = document.createElement('p');
  description.innerHTML = desc;

  modalBodyEl.appendChild(description);

  modalContentEl.appendChild(modalHeaderEl)
  modalContentEl.appendChild(modalBodyEl)

  modalEl.appendChild(modalContentEl);

  document.getElementById('main').appendChild(modalEl);

  window.onclick = function (event) {
    if (event.target == modalEl) {
      modalEl.style.display = "none";
      modalEl.remove();
    }
  };

  return true;
}

const checkmodal = () => {
  if(document.getElementById('modalDetail')) {
    document.getElementById('modalDetail').remove()
  }

  var btns = document.getElementsByClassName("btn-detail");

  for (let button of btns) {
    button.addEventListener("click", async (event) => {
      await modalFactory(event["path"][2]["childNodes"][2]["innerHTML"]).then(
        () => {
          var modal = document.getElementById("modalDetail");
          modal.style.display = "block";
          var span = document
            .getElementsByClassName("close")[0]
            .addEventListener("click", () => {
              modal.style.display = "none";
              modal.remove();
            });
          
        }
      );
    });
  }
};