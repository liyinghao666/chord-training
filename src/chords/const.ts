import { Note } from "tone/build/esm/core/type/NoteUnits";

export const template = [
  "C3",
  "C#3",
  "D3",
  "D#3",
  "E3",
  "F3",
  "F#3",
  "G3",
  "G#3",
  "A3",
  "A#3",
  "B3",
  "C4",
  "C#4",
  "D4",
  "D#4",
  "E4",
  "F4",
  "F#4",
  "G4",
  "G#4",
  "A4",
  "A#4",
  "B4",
  "C5",
  "C#5",
  "D5",
  "D#5",
  "E5",
  "F5",
  "F#5",
  "G5",
  "G#5",
  "A5",
  "A#5",
  "B5",
] as Note[];
export type MainNote = (typeof template)[number];
export enum ChordType {
  Major3,
  Major7,
  Minor3,
  Minor7,
}
export enum ModeType {
  Normal,
  Ionian,
}
// 各类和弦内音的音程关系
const Minor3Step = [3, 4];
const Major3Step = [4, 3];
const Minor7Step = [...Minor3Step, 3];
const Major7Step = [...Major3Step, 4];
export const ChordStyleMap: Record<ChordType, Array<number>> = {
  [ChordType.Major3]: Major3Step,
  [ChordType.Minor3]: Minor3Step,
  [ChordType.Major7]: Major7Step,
  [ChordType.Minor7]: Minor7Step,
};
// 各类调式的音程关系
const Normal = [2, 2, 1, 2, 2, 2, 1]; // 自然大调
const Ionian = [2, 1, 2, 2, 1, 2, 2]; // 自然小调
export const ModeMap: Record<ModeType, Array<number>> = {
  [ModeType.Normal]: Normal,
  [ModeType.Ionian]: Ionian,
};
