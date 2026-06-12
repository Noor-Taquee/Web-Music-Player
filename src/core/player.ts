import { audioElement } from "./audio-element.js";
import type { SongInfo } from "./song.js";

export type PlayerState = {
  /** Flag to know whether a song is playing or not. */
  playing: boolean;

  /** The info for playing mode.
   * - `repeat` - play this same song again when this song ends.
   * - `flow` - play the next song when this song ends.
   * - `end` - stop player when this song ends.
   */
  playingMode: "repeat" | "end" | "flow";

  /** Information of the currently playing or loaded song. */
  songInfo: SongInfo | null;

  play(): void;
};

export const playerState: PlayerState = {
  playing: false,
  playingMode: "flow",
  songInfo: null,
  async play() {
    await audioElement.play();
  },
};

/** Updates the songInfo of the player and changes the source of the audio element. */
export function setsSong(song: SongInfo) {
  audioElement.src = song.audioPath;
  playerState.songInfo = song;

  document.dispatchEvent(
    new CustomEvent("play-song", {
      detail: {
        song: song,
      },
    }),
  );
}
