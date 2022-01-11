import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-listmusica',
  templateUrl: './listmusica.component.html',
  styleUrls: ['./listmusica.component.scss'],
})
export class ListmusicaComponent implements OnInit {

    @ViewChild("range", { static: false }) range: IonRange;
  
    songs = [
      {
        title: "couting star",
        subtitle:"one republic",
        img:"",
        path:""
      },
      {
        title: "Me voy sin ti",
        subtitle:"Angelina",
        img:"",
        path:""
      },
      {
        title: "couting star",
        subtitle:"Angelina",
        img:"",
        path:""
      },
    ];
    
    //Current song details
    currTitle;
    currSubtitle;
    currImage;
  
    //progress bar value
    progress = 0;
  
    //toggle for play/pause button
    isPlaying = false;
  
    //track of ion-range touch
    isTouched= false;
  
    //ion range texts
    currSecsText;
    durationText;
  
    //ion range value
    currRangeTime;
    maxRangeValue;
  
    //Current song
    currSong: HTMLAudioElement;
  
    //Upnext song details
    upNextImg;
    upNextTitle;
    upNextSubtitle;
    constructor() {}
  
  
  ngOnInit(){
  
  }
  playSong(title, subTitle, img, song) {
    if (this.currSong != null) {
      this.currSong.pause();   
        
    }
  
    //open full player view
    document.getElementById("fullPlayer").style.bottom = "0px";
    //set current song details
    this.currTitle = title;
    this.currSubtitle = subTitle;
    this.currImage = img;
  
    //Current song audio
    this.currSong = new Audio(song);
  
    this.currSong.play().then(() => {
      //Total song duration
      this.durationText = this.sToTime(this.currSong.duration);
      //set max range value (important to show proress in ion-range)
      this.maxRangeValue = Number(this.currSong.duration.toFixed(2).toString().substring(0, 5));
  
      //set upnext song
      //get current song index
      var index = this.songs.findIndex(x => x.title == this.currTitle);
      //if current song is the last one then set first song info for upnext song
      if ((index + 1) == this.songs.length) {
        this.upNextImg = this.songs[0].img;
        this.upNextTitle = this.songs[0].title;
        this.upNextSubtitle = this.songs[0].subtitle;
      }
  
      //else set next song info for upnext song
      else {
        this.upNextImg = this.songs[index + 1].img;
        this.upNextTitle = this.songs[index + 1].title;
        this.upNextSubtitle = this.songs[index + 1].subtitle;
      }
      this.isPlaying = true;
    })
  
    this.currSong.addEventListener("timeupdate", () => {
  
      //update some infos as song plays on
      //if ion-range not touched the do update 
      if (!this.isTouched) {
  
        //update ion-range value
        this.currRangeTime = Number(this.currSong.currentTime.toFixed(2).toString().substring(0, 5));
        //update current seconds text
        this.currSecsText = this.sToTime(this.currSong.currentTime);
        //update progress bar (in miniize view)
        this.progress = (Math.floor(this.currSong.currentTime) / Math.floor(this.currSong.duration));
  
  
        //if song ends,play next song
        if (this.currSong.currentTime == this.currSong.duration) {
          this.playNext();
        }
      }
    });
  
  }
  sToTime(t) {
    return this.padZero(parseInt(String((t / (60)) % 60))) + ":" +
      this.padZero(parseInt(String((t) % 60)));
  }
  padZero(v) {
    return (v < 10) ? "0" + v : v;
  }
  
  playNext() {
    var index = this.songs.findIndex(x => x.title == this.currTitle);
  
    if ((index + 1) == this.songs.length) {
      this.playSong(this.songs[0].title, this.songs[0].subtitle, this.songs[0].img, this.songs[0].path);
    }
    else {
      var nextIndex = index + 1;
      this.playSong(this.songs[nextIndex].title, this.songs[nextIndex].subtitle, this.songs[nextIndex].img, this.songs[nextIndex].path);
    }
  }
  
  
  playPrev() {
    var index = this.songs.findIndex(x => x.title == this.currTitle);
  
    if (index == 0) {
      var lastIndex = this.songs.length - 1;
      this.playSong(this.songs[lastIndex].title, this.songs[lastIndex].subtitle, this.songs[lastIndex].img, this.songs[lastIndex].path);
    }
    else {
      var prevIndex = index - 1;
      this.playSong(this.songs[prevIndex].title, this.songs[prevIndex].subtitle, this.songs[prevIndex].img, this.songs[prevIndex].path);
    }
  }
  
  minimize() {
    document.getElementById("fullPlayer").style.bottom = "-1000px";
    document.getElementById("miniPlayer").style.bottom = "0px";
  }
  
  maximize() {
    document.getElementById("fullPlayer").style.bottom = "0px";
    document.getElementById("miniPlayer").style.bottom = "-100px";
  }
  
  pause() {
    this.currSong.pause();
    this.isPlaying = false;
  }
  
  play() {
    this.currSong.play();
    this.isPlaying = true;
  }
  
  cancel() {
    document.getElementById("miniPlayer").style.bottom = "-100px";
    this.currImage = "";
    this.currTitle = "";
    this.currSubtitle = "";
    this.progress = 0;
    this.currSong.pause();
    this.isPlaying = false;
  }
  
  touchStart() {
    this.isTouched = true;
    this.currRangeTime = Number(this.range.value);
  }
  
  touchMove() {
    this.currSecsText = this.sToTime(this.range.value);
  }
  
  touchEnd() {
    this.isTouched = false;
    this.currSong.currentTime = Number(this.range.value);
    this.currSecsText = this.sToTime(this.currSong.currentTime)
    this.currRangeTime = Number(this.currSong.currentTime.toFixed(2).toString().substring(0, 5));
  
    if (this.isPlaying) {
      this.currSong.play();
    }
  }
  
  }
  
