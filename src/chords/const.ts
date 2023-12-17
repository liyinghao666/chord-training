export const template = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
] as const; // 十二平均律绝对音高
export type MainNote = (typeof template)[number];
export enum ChordType {
  Major3,
  Major7,
  Minor3,
  Minor7,
}
export enum ModeType {
  Normal,
  Ionian
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
    [ModeType.Ionian]: Ionian
}
