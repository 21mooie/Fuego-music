import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
// PrimeNG autocomplete fro search
import { AutoCompleteModule } from 'primeng/primeng';

// Custom imports
import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
// import { MusicDetailsComponent } from './music-details/music-details.component';
// import { MusicProgressComponent } from './music-progress/music-progress.component';
// import { MusicFooterComponent } from './music-footer/music-footer.component';
// import { MusicService } from './shared/music.service';
// import { ApiService } from './shared/api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AutoCompleteModule,
    HttpModule
  ],
  exports: [
    // Expose components
    MusicSearchComponent,
    MusicDetailsComponent,
    MusicPlayerComponent,
    // MusicProgressComponent,
    // MusicFooterComponent
  ],
  declarations: [
    // Declare components
    MusicSearchComponent,
    MusicDetailsComponent,
    MusicPlayerComponent,
    // MusicPlayerComponent,
    // MusicProgressComponent,
    // MusicFooterComponent
  ],
  providers: [
    // Services
    // ApiService,
    // MusicService
  ]
})
export class MusicModule { }
