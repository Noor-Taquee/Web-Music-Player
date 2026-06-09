import "./index.css";
import "./styles/animations.css";

import "./router.js";
import { homePanel } from "./pages/home-panel/page.js";
import { searchPanel } from "./pages/search-panel/page.js";
import { libraryPanel } from "./pages/library-panel/page.js";
import { settingsPanel } from "./pages/settings-panel/page.js";

homePanel.dataset.index = "0";
searchPanel.dataset.index = "1";
libraryPanel.dataset.index = "2";
settingsPanel.dataset.index = "3";
