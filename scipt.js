console.log("Stopify- Where music don't stop");

//Initialization of all the elements that we will be using 
let songIndex=0;
let Audioelement= new Audio('Nothing.mp3');
let Play=document.getElementById('Play');
let MyProgressBar=document.getElementById('Progress');
let gif=document.getElementById('Gif');
let songItems= Array.from(document.getElementsByClassName('songItem'));

//Initialization of all the songs that is in our playlist
let songs=[
    {songName:"Nothing", filepath:"nothing.mp3",coverpath:"Nothingcover.jpg"},
    {songName:"Cold/Mess", filepath:"cold-mess.mp3",coverpath:"Cold-mess.jpeg"},
    {songName:"Night Changes", filepath:"NightChanges.mp3",coverpath:"Nightchanges.jpeg"},
    {songName:"Tere Hi Hum", filepath:"tere hi hum.mp3",coverpath:"Tere hi hum.jpeg"},
    {songName:"Nothing", filepath:"nothing.mp3",coverpath:"Nothingcover.jpg"},
    {songName:"Nothing", filepath:"nothing.mp3",coverpath:"Nothingcover.jpg"},
    {songName:"Nothing", filepath:"nothing.mp3",coverpath:"Nothingcover.jpg"}
];

songItems.forEach((element,i)=> {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src= songs[i].coverpath;
    element.getElementsByClassName("Songname")[0].innerText = songs[i].songName;
});

//The song will start playing when you will click this button 
Play.addEventListener('click',()=>{
    if(Audioelement.paused|| Audioelement.currentTime<=0)
    {
        Audioelement.play();
        Play.classList.remove('fa-play');
        Play.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        Audioelement.pause();
        Play.classList.remove('fa-pause');
        Play.classList.add('fa-play');
        gif.style.opacity=0;
    }
});
//The Progress Bar will get updated as soon as you play the song
Audioelement.addEventListener('timeupdate',()=>{
    console.log("The time is getting updated");
    progressing=parseInt((Audioelement.currentTime/Audioelement.duration)*100);
    MyProgressBar.value=progressing;
})
//This is so that when we click the different parts of the Audio bar, the song seeks to that place.
MyProgressBar.addEventListener('change',()=>{
    Audioelement.currentTime= MyProgressBar.value * Audioelement.duration/100;
})

const makeallPlays= ()=>{
    Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element)=>{
            element.classList.remove("fa-pause");
            element.classList.add("fa-play");
        });
}

Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index= parseInt(e.target.id);
        makeallPlays();
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        Audioelement.src= `songs/${index}.mp3`;
        Audioelement.currentTime=0;
        Audioelement.play()
        Play.classList.remove('fa-play');
        Play.classList.add('fa-pause');
        gif.style.opacity=1;
    })
});