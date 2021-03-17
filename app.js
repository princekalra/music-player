const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const songs = [
  {
  name: "prince1",
  title: "FADED",
  artist: "Alan Walker"
},
{
  name: "prince2",
  title: "Tum-Tak",
  artist: "A. R. rehman"
},
{
  name: "prince3",
  title: "Alone",
  artist: "Alan Walker"
},
{
  name: "prince4",
  title: "Cheap-Thrills",
  artist: "Demi Lovato"
},
{
  name: "prince5",
  title: "Senorita",
  artist: "Camila Cabello"
},
{
  name: "prince6",
  title: "Naag",
  artist: "Jazzy B"
},

];
let isPlaying = false;
const playMusic = () => {
  isPlaying =true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
}
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace( "fa-pause","fa-play");
  img.classList.remove("anime");
}
play.addEventListener("click",() => {
  if(isPlaying){
    pauseMusic();
  }
  else{

    playMusic();
  }

});
const loadSong = (songs) =>{
  title.textContent = songs.title;
    artist.textContent= songs.artist;
    music.src = "Music/"+ songs.name + ".mp3";
    img.src = "images/"+songs.name  + ".jfif";

};
songIndex = 0;
const prevSong =() => {
  songIndex= (songIndex-1+songs.length)%songs.length;
  loadSong(songs[songIndex]);
  playMusic();
}
const nextSong =() => {
  songIndex= (songIndex+1)%songs.length;
  loadSong(songs[songIndex]);
  playMusic();
}
// loadSong(songs[1]);
next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);
