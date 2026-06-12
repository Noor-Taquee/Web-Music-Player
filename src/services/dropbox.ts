import { Dropbox } from "dropbox";

const dropbox = new Dropbox({
  clientId: "t8wj3k9vzx9thyg",
  fetch: window.fetch.bind(window),
  refreshToken:
    "tx6ls_Ky8d8AAAAAAAAAAU7Tdtu3uwsD7jwGOUW91scfyH-19uhb3D9meNfK72nL",
  clientSecret: "il7htvq6cz94oqm",
});

/** Uploads data into the `path` in the cloud storage **Dropbox** */
export async function dumpInfo(path: string, data: object): Promise<void> {
  await dropbox.filesUpload({
    path: path,
    contents: JSON.stringify(data),
    mode: { ".tag": "overwrite" },
    autorename: false,
    mute: true,
  });
}

/** Gets data from dropbox.
 * * No need to parse into JSON, It does JSON.parse()  */
export async function loadInfo(path: string) {
  const response = await dropbox.filesDownload({ path: path });
  const text = await response.result.fileBlob.text();
  return JSON.parse(text);
}
