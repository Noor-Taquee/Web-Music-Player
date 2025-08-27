#searchPanel {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  background: transparent;
  width: 90%;
  height: 80%;
  margin: 0;
  padding: 0;
  border: none;
}
#searchPanel::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

#searchBar {
  display: flex;
  justify-content: center;
  height: 10%;
  width: 100%;
  margin: 0;
  padding: 2%;
}

#searchBox {
  font-size: 100%;
  backdrop-filter: blur(50px);
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 75%;
  margin: 0;
  padding: 0;
  padding-left: 5vw;
  border: none;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
}

#searchBox::placeholder {
  font-size: 100%;
  color: rgba(255, 255, 255, 0.7);
}

#bnSearch {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(50px);
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 25%;
  margin: 0;
  padding: 0;
  gap: 5%;
  border: none;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
}

#searchHistoryTextDiv {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: transparent;
  height: 40%;
  min-height: 10rem;
  width: 100%;
}

#searchedTextDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  backdrop-filter: blur(50px);
  background-color: rgba(0, 0, 0, 0.1);
  height: 85%;
  width: 100%;
  margin: 0;
  padding: 0;
  gap: 1%;
  border: none;
  border-radius: 1.5rem;
}

#searchedTextDiv::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

#searchedText {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(50px);
  background-color: rgba(0, 0, 0, 0.2);
  height: 25%;
  min-height: 2.5rem;
  width: 100%;
  margin: 0;
  padding: 0;
  padding-left: 5%;
  padding-right: 5%;
  border: none;
  border-radius: 2rem;
}

#searchedText p {
  font-size: 3vmin;
  color: rgba(255, 255, 255, 0.7);
}

#searchedText i {
  color: rgba(255, 255, 255, 0.7);
}

#searchHistorySongDiv {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: transparent;
  height: 50%;
  min-height: 15rem;
  width: 100%;
}

#recentSearches,
#recentSongs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: default;
  font-size: 5vmin;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.7);
  height: 15%;
  width: 100%;
  margin-top:  1vh;
  margin-bottom: 1vh;
}

#searchedSongDiv {
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  backdrop-filter: blur(50px);
  background-color: rgba(0, 0, 0, 0.1);
  height: 85%;
  width: 100%;
  margin: 0;
  padding: 0;
  gap: 1%;
  border: none;
  border-radius: 1.5rem;
}

#searchedSongDiv::-webkit-scrollbar {
  height: 0;
  background: transparent;
}

#searchedSong {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(50px);
  background-color: rgba(0, 0, 0, 0.2);
  height: 30vh;
  width: 30vh;
  margin: 0;
  padding: 0;
  flex-shrink: 0;
  border: none;
  border-radius: 1rem;
}
#searchedSongPic {
  display: flex;
  background-size: cover;
  height: 85%;
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0.5rem;
}
#searchedSongName {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
  font-size: 3vmin;
  color: rgba(255, 255, 255, 0.7);
  height: 15%;
  width: 90%;
  margin: 0;
  padding: 0;
}
