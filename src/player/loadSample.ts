import { Note } from "tone/build/esm/core/type/NoteUnits";
import A1 from "../assets/A1.mp3";
import A2 from "../assets/A2.mp3";
import A3 from "../assets/A3.mp3";
import A4 from "../assets/A4.mp3";
import A5 from "../assets/A5.mp3";
import A6 from "../assets/A6.mp3";
import A7 from "../assets/A7.mp3";
import C1 from "../assets/C1.mp3";
import C2 from "../assets/C2.mp3";
import C3 from "../assets/C3.mp3";
import C4 from "../assets/C4.mp3";
import C5 from "../assets/C5.mp3";
import C6 from "../assets/C6.mp3";
import C7 from "../assets/C7.mp3";
import Ds1 from "../assets/Ds1.mp3";
import Ds2 from "../assets/Ds2.mp3";
import Ds3 from "../assets/Ds3.mp3";
import Ds4 from "../assets/Ds4.mp3";
import Ds5 from "../assets/Ds5.mp3";
import Ds6 from "../assets/Ds6.mp3";
import Ds7 from "../assets/Ds7.mp3";
import Fs1 from "../assets/Fs1.mp3";
import Fs2 from "../assets/Fs2.mp3";
import Fs3 from "../assets/Fs3.mp3";
import Fs4 from "../assets/Fs4.mp3";
import Fs5 from "../assets/Fs5.mp3";
import Fs6 from "../assets/Fs6.mp3";
import Fs7 from "../assets/Fs7.mp3";
import { base64ToArrayBuffer } from "./utils";

const getSample = (): Partial<Record<Note, ArrayBuffer>> => {
  return {
    A1: base64ToArrayBuffer(A1),
    A2: base64ToArrayBuffer(A2),
    A3: base64ToArrayBuffer(A3),
    A4: base64ToArrayBuffer(A4),
    A5: base64ToArrayBuffer(A5),
    A6: base64ToArrayBuffer(A6),
    A7: base64ToArrayBuffer(A7),
    C1: base64ToArrayBuffer(C1),
    C2: base64ToArrayBuffer(C2),
    C3: base64ToArrayBuffer(C3),
    C4: base64ToArrayBuffer(C4),
    C5: base64ToArrayBuffer(C5),
    C6: base64ToArrayBuffer(C6),
    C7: base64ToArrayBuffer(C7),
    "D#1": base64ToArrayBuffer(Ds1),
    "D#2": base64ToArrayBuffer(Ds2),
    "D#3": base64ToArrayBuffer(Ds3),
    "D#4": base64ToArrayBuffer(Ds4),
    "D#5": base64ToArrayBuffer(Ds5),
    "D#6": base64ToArrayBuffer(Ds6),
    "D#7": base64ToArrayBuffer(Ds7),
    "F#1": base64ToArrayBuffer(Fs1),
    "F#2": base64ToArrayBuffer(Fs2),
    "F#3": base64ToArrayBuffer(Fs3),
    "F#4": base64ToArrayBuffer(Fs4),
    "F#5": base64ToArrayBuffer(Fs5),
    "F#6": base64ToArrayBuffer(Fs6),
    "F#7": base64ToArrayBuffer(Fs7),
  };
};
export default getSample;
