import { Note } from "tone/build/esm/core/type/NoteUnits";
import { ChordStyleMap, ChordType, ModeMap, ModeType, template } from "./const";

/**
 * @param index 想要取值的序号
 * @param arr 被取值的数组 不传则默认 12 平均率
 * @returns value: 取到的值；times: 数组溢出了几轮
 */
export const getOverflowIndexOfArray = (
  index: number
): {
  value: (typeof template)[number];
  times: number;
} => {
  const l = template.length;
  const realIndex = index % l;
  const times = Math.floor(index / l);
  return {
    value: template[realIndex],
    times,
  };
};

/**
 * @param tone 要改变 level 的音名 如 C#4
 * @param level 想要改成的 level，比如 5
 * @returns C#5
 */
export const setToneLevel = <T extends string>(tone: T, level = 4): Note => {
  const arr = tone.match(/^[A-G][#b]?(\d)?/);
  const l = arr?.[1];
  if (!l) {
    return `${tone}${level}` as Note;
  }
  return tone.replace(l, `${level}`) as Note;
};

const getNotesByStepArray = (
    mainNote: (typeof template)[number],
    steps: number[],
    level: number = 4
) => {
    const mainIndex = template.indexOf(mainNote);
    const stepNotes = [setToneLevel(mainNote, level)];
    steps.reduce((prev, current, currentIndex) => {
        if (currentIndex === 1) {
          const { value, times } = getOverflowIndexOfArray(mainIndex + prev);
          stepNotes.push(setToneLevel(value, level + times));
        }
        const currentDistance = prev + current;
        const { value, times } = getOverflowIndexOfArray(
          mainIndex + currentDistance
        );
        stepNotes.push(setToneLevel(value, level + times));
        return currentDistance;
      });
      return stepNotes;
    
}

export const getChordNotes = (
  mainNote: (typeof template)[number],
  chordType: ChordType,
  level: number = 4
): Note[] => {
  const chordStyle = ChordStyleMap[chordType];
  const chordTones = getNotesByStepArray(mainNote, chordStyle, level);
  return chordTones;
};

export const getModeNotes = (
    mainNote: (typeof template)[number],
    modeType:ModeType,
    level = 4
) => {
    const modeStyle = ModeMap[modeType];
    const modeNotes = getNotesByStepArray(mainNote, modeStyle, level);
    return modeNotes;
}
