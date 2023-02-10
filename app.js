console.log("Welcome to Spotify");
let songIndex = 1;
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let progressBar = document.getElementById("progressBar");

let songs = [
  { fileName: "Revenge", filePath: "songs/1.mp3" },
  { fileName: "Hope", filePath: "songs/2.mp3" },
  { fileName: "Jocelyn Flores", filePath: "songs/3.mp3" },
  { fileName: "Sad!", filePath: "songs/4.mp3" },
];
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});
let audioElement = new Audio("songs/1.mp3");
audioElement.addEventListener("timeupdate", () => {
  progress = (audioElement.currentTime / audioElement.duration) * 100;
  progressBar.value = progress;
});
progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioElement.paused || audioElement.currentTime<=0){
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        document.getElementById('MasterSongName').innerHTML = songs[songIndex-1].fileName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
        }
        else {
                audioElement.pause();
                masterPlay.classList.remove("fa-pause");
                masterPlay.classList.add("fa-play");
                Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
                    element.classList.remove('fa-pause');
                    element.classList.add('fa-play');})
                gif.style.opacity = 0;
            }
    })
})
document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex=0;
    }
    else{
        songIndex = songIndex+1;
        audioElement.src = `songs/${songIndex}.mp3`;
        document.getElementById('MasterSongName').innerHTML = songs[songIndex-1].fileName;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
})
document.getElementById("previous").addEventListener('click',()=>{
    if (songIndex<=1){
        songIndex=4;
    }
    else{
        songIndex = songIndex-1;
        audioElement.src = `songs/${songIndex}.mp3`;
        document.getElementById('MasterSongName').innerHTML = songs[songIndex-1].fileName;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
})