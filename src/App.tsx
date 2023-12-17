import "./App.css";
import player from "./player";
import { Show, onMount } from "solid-js";
import { getChordNotes } from "./chords";
import { ChordType, ModeType } from "./chords/const";
import { TaskStatus, setTaskStatus, setUserAnswer, store } from "./store";
import { JSX } from "solid-js/h/jsx-runtime";

function App() {
  const handlePlay = async () => {
    setTaskStatus(TaskStatus.Playing);
  };

  const handleIndexClick: JSX.EventHandlerUnion<HTMLDivElement, MouseEvent> = (
    e
  ) => {
    const index = parseInt(e.target.getAttribute("datatype") || "");
    setUserAnswer(index);
  };

  return (
    <>
      <div class="card">
        <Show when={store.taskStatus === TaskStatus.Finish}>
          <Show when={store.correct} fallback={"Wrong!"}>
            Correct!
          </Show>
        </Show>
        <button onClick={handlePlay}>Go!</button>
        <div onClick={handleIndexClick}>
          <button datatype="1">1</button>
          <button datatype="2">2</button>
          <button datatype="3">3</button>
          <button datatype="4">4</button>
          <button datatype="5">5</button>
          <button datatype="6">6</button>
          <button datatype="7">7</button>
        </div>
      </div>
    </>
  );
}

export default App;
