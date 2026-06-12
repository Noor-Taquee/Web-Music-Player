import { songStore } from "../core/song-store.js";
import type { SongInfo } from "../core/song.js";
import { loadHomeSongs } from "../pages/home-panel/page.js";
import { loadInfo } from "./dropbox.js";

export type DropboxSongInfo = {
  name: string;
  audio: string;
  image: string;
  artist: string[];
};

export type DropboxSongData = {
  [songName: string]: DropboxSongInfo;
};

/** Imports song data from dropbox and displays it in home. */
export function fetchSongData() {
  // loadingMessage.textContent = "progress: getting songs ready...";

  loadInfo("/JSON/HindiSongs.json").then((data: DropboxSongData) => {
    const songs = Object.values(data).map((object) => modify(object));
    // const HindiTitles = Object.keys(data);
    // Object.assign(songData, data);
    songStore.push(...songs);
    // titleNames.push(...HindiTitles);
    loadHomeSongs(songs, "hindi");
    // songAttendance();
  });
  loadInfo("/JSON/PunjabiSongs.json").then((data: DropboxSongData) => {
    const songs = Object.values(data).map((object) => modify(object));
    // PunjabiTitles = Object.keys(data);
    // Object.assign(songData, data);
    songStore.push(...songs);
    // titleNames.push(...PunjabiTitles);
    loadHomeSongs(songs, "punjabi");
    // songAttendance();
  });
  loadInfo("/JSON/EnglishSongs.json").then((data: DropboxSongData) => {
    const songs = Object.values(data).map((object) => modify(object));
    // EnglishTitles = Object.keys(data);
    // Object.assign(songData, data);
    songStore.push(...songs);
    // titleNames.push(...EnglishTitles);
    loadHomeSongs(songs, "english");
    // songAttendance();
  });
  loadInfo("/JSON/PhonkSongs.json").then((data: DropboxSongData) => {
    const songs = Object.values(data).map((object) => modify(object));
    // PhonkTitles = Object.keys(data);
    // Object.assign(songData, data);
    songStore.push(...songs);
    // titleNames.push(...PhonkTitles);
    loadHomeSongs(songs, "phonk");
    // songAttendance();
  });
  loadInfo("/JSON/SpanishSongs.json").then((data: DropboxSongData) => {
    const songs = Object.values(data).map((object) => modify(object));
    // SpanishTitles = Object.keys(data);
    // Object.assign(songData, data);
    songStore.push(...songs);
    // titleNames.push(...SpanishTitles);
    loadHomeSongs(songs, "spanish");
    // songAttendance();
  });
  loadInfo("/JSON/Tunes.json").then((data: DropboxSongData) => {
    // TunesTitles = Object.keys(data);
    // Object.assign(songData, data);
    const songs = Object.values(data).map((object) => modify(object));
    songStore.push(...songs);
    // titleNames.push(...TunesTitles);
    loadHomeSongs(songs, "tunes");
    // songAttendance();
  });
}

function modify(object: DropboxSongInfo): SongInfo {
  return {
    songName: object.name,
    artistName: object.artist,
    albumArtPath: object.image,
    audioPath: object.audio,
    duration: 2000,
  };
}
