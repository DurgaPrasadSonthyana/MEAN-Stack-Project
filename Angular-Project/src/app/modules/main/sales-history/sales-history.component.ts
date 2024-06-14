import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.component.html',
  styleUrls: ['./sales-history.component.scss']
})
export class SalesHistoryComponent implements OnInit {
  currentlyHoveredVideo: HTMLVideoElement | null = null;

  constructor() { }

  playVideo(video: HTMLVideoElement) {
    if (this.currentlyHoveredVideo && this.currentlyHoveredVideo !== video) {
      this.currentlyHoveredVideo.pause();
    }
    video.play();
    this.currentlyHoveredVideo = video;
    this.currentlyHoveredVideo.controls = true; // Ensure controls are visible when playing
  }

  pauseVideo(video: HTMLVideoElement) {
    video.pause();
    video.controls = false; // Hide controls when pausing
    this.currentlyHoveredVideo = null;
  }

  restartVideo(video: HTMLVideoElement) {
    video.currentTime = 0;
    video.play();
    this.currentlyHoveredVideo = video;
    this.currentlyHoveredVideo.controls = true; // Ensure controls are visible when playing
  }

  menuList: any = [
    { id: 1, title: "Dune: Part Two | Offical Trailer", video: "assets/dunee2.mp4", production: "Warner Bros. Pictures", views: "14M views • 2 months ago" },
    { id: 2, title: "Dune: Part Two | Offical Trailer", video: "assets/dunee2.mp4", production: "Warner Bros. Pictures", views: "14M views • 2 months ago" },
    { id: 3, title: "Dune: Part Two | Offical Trailer", video: "assets/dunee2.mp4", production: "Warner Bros. Pictures", views: "14M views • 2 months ago" },
  ]
  ngOnInit(): void {
  }

}
