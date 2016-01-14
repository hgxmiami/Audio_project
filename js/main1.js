var bridgePlaying = false;

document.getElementById("play-btn").onclick = function(){
  if (bridgePlaying){
    document.getElementById("bridj").pause();
    document.getElementById("play-btn").innerHTML = "Play";
    bridgePlaying = false;
  }
  else{
    bridgePlaying = true;
    document.getElementById("play-btn").innerHTML = "Pause";
    document.getElementById("bridj").play();
  }
  
};

document.getElementById("speedup-btn").onclick = function(evt){
  document.getElementById("bridj").playbackRate += 0.1;
};

document.getElementById("speeddown-btn").onclick = function(evt){
  document.getElementById("bridj").playbackRate -= 0.1;
};