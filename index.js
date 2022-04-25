const video = document.querySelector('#movie');
        const playButton = document.querySelector('#playButton');
        const muteButton = document.querySelector('#muteButton');

        playButton.addEventListener("click",()=>{
            video.paused 
                ? video.play()   
                : video.pause()
            
        });

        muteButton.addEventListener("click",()=>{
            video.muted = !video.muted;
        });

//for con settimeout

const mostrarFecha = () =>{
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    document.querySelector(".fecha").innerHTML = hora+":"+minutos+":"+segundos;
    setTimeout(mostrarFecha,1000);
}

mostrarFecha()

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
      console.log(error.message);
    });
  }