window.addEventListener('keydown',function(e){
    if(e.keyCode==65){
       document.getElementById('65').classList.add("playing");
        var x = document.getElementById('65');
        x.play();
        
     }
     else if(e.keyCode==66){
      document.getElementById('66').classList.add("playing");
        var x = document.getElementById('66');
        x.play();
     }
     else if(e.keyCode==67){
      document.getElementById('67').classList.add("playing");
        var x = document.getElementById('67');
        x.play();
     }
     else if(e.keyCode==68){
      document.getElementById('68').classList.add("playing");
        var x = document.getElementById('68');
        x.play();
     }
});