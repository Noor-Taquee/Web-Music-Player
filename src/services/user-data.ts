import { loadInfo } from "./dropbox.js";

/** Gets all users info from database and populates userUIDmap and usersList */
export async function fetchUsersInfo() {
  loadingMessage.textContent = "progress: Collecting users...";
  const response = await loadInfo("/JSON/UserList.json");
  userUIDmap = response;
  usersList = Object.keys(response);
}
