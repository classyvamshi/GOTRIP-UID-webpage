Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('ketup',(el)=>{
      if (e.value.length > 0) {
        document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)";
      } else {
        document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)";
      }
    })
})
let videoBtn = document.querySelectorAll('.vid-btn');
            videoBtn.forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelector('.controls .active').classList.remove('active');
                    btn.classList.add('active');
                    let src = btn.getAttribute('data-src');
                    document.querySelector('#video-slider').src = src;
                });
            });