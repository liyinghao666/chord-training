import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import player from "./player";
import { onMount } from "solid-js";
import { getChordNotes } from "./chords";
import { ChordType, ModeType } from "./chords/const";

function App() {
  onMount(() => {
  })
  const handlePlay = async () => {
    const Am = getChordNotes('A', ChordType.Minor3);
    await player.playModeNotes('A', ModeType.Normal);
    await player.play(Am);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={handlePlay}>Play</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  );
}

export default App;
