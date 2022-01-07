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
