export type SongInfo = {
  /** Name of the song */
  songName: string;
  /** List of the artists of the song */
  artistName: string[];
  /** Duration of the song in milliseconds */
  duration: number;
  /** URL of the album art of the song */
  albumArtPath: string;
  /** URL of the audio */
  audioPath: string;
};
