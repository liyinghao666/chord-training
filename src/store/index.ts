import { createStore } from "solid-js/store";
import { ChordType, MainNote, ModeType, template } from "../chords/const";
import { effect } from "solid-js/web";
import player from "../player";
import { getChordNotes, getIndexChordInMode, getModeNotes } from "../chords";
import { Note } from "tone/build/esm/core/type/NoteUnits";

export enum TaskType {
  ChordIndex,
}
export enum TaskStatus {
  Initial,
  Playing,
  Waiting,
  Finish,
}
export interface Store {
  taskType: TaskType.ChordIndex;
  taskStatus: TaskStatus;
  modeMainNote: MainNote;
  modeType: ModeType;
  chordMainNote: MainNote;
  chordType: ChordType;
  chordIndex: number; // 这个和弦是调内几级
  userAnswer: number;
  correct: boolean;
}
const [store, setStore] = createStore<Store>({
  taskType: TaskType.ChordIndex,
  taskStatus: TaskStatus.Initial,
  modeMainNote: "C4",
  modeType: ModeType.Normal,
  chordMainNote: "C4",
  chordType: ChordType.Major3,
  chordIndex: 1,
  userAnswer: 0,
  correct: false,
});
export { store, setStore };

export const setTaskStatus = (taskStatus: TaskStatus) =>
  setStore({ taskStatus });
effect<TaskStatus>((preTaskStatus) => {
  switch (store.taskStatus) {
    case TaskStatus.Playing:
      if (preTaskStatus === store.taskStatus) return preTaskStatus;
      // const randomKeyIndex = Math.floor(Math.random() * 13);
      // const randomChordIndex = Math.floor(Math.random() * 8);
      // const modeMainNote = template[randomKeyIndex];
      const modeMainNote = 'D#3';
      const randomChordIndex = 6;
      const chordNotes = getIndexChordInMode(modeMainNote, ModeType.Normal, randomChordIndex);
      console.log(modeMainNote, randomChordIndex);
      player
        .playModeNotes(modeMainNote, ModeType.Normal)
        .then(() => player.play(chordNotes))
        .then(() => setStore({ taskStatus: TaskStatus.Waiting, chordIndex: randomChordIndex + 1 }));
    default:
      break;
  }
  return store.taskStatus;
});

export const setUserAnswer = (userAnswer: number) => setStore({ userAnswer, taskStatus: TaskStatus.Finish });
effect(() => {
  setStore({ correct: store.userAnswer === store.chordIndex });
});
