
window.addEventListener('DOMContentLoaded', function(){
    onload = () => {
        const c = setTimeout(() => {
          document.body.classList.remove("not-loaded");
          clearTimeout(c);
        }, 1000);
      };


      const btn = document.getElementById('fl_btn');

      let flower = document.querySelector('.flowers');
      let night = document.querySelector('.night');
      const myAudio = document.getElementById("myAudio");
      let pavel = document.querySelector('.pavel');

      btn.addEventListener('click', () =>{
        flower.style.opacity = 1;
        night.style.opacity = 1;
        btn.style.display = 'none';
        myAudio.src = 'flower.mp3';
        myAudio.play();
      });

      
});

