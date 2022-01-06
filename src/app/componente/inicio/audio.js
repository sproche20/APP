audio_file.onchange = function audio(){
    var files = this.files;
    var file = URL.createObjectURL(files[0]); 
    audio_player.src = file; 
    audio_player.play();
};