import { Sampler, Time as TimeClass, Transport, context } from "tone";
import getSample from "./loadSample";
import { Note } from "tone/build/esm/core/type/NoteUnits";
import { getModeNotes } from "../chords";
import { MainNote, ModeType } from "../chords/const";
import { Time } from "tone/build/esm/core/type/Units";

export class Player {
  constructor(onload?: () => void) {
    this.sampler = new Sampler({
      urls: {},
      onload,
    }).toDestination();
    this.loadSample().then(onload);
    Transport.set({ bpm: 320 });
    Transport.start();
  }
  sampler!: Sampler;
  loadSample = async () => {
    const samplerMap = getSample();
    const loadPromise: Array<Promise<void>> = [];
    Object.entries(samplerMap).forEach((value, index) => {
      const [note, buffer] = value as [Note, ArrayBuffer];
      loadPromise.push(
        (async () => {
          const audioBuffer = await context.decodeAudioData(buffer);
          this.sampler.add(note, audioBuffer);
        })()
      );
    });
    return Promise.all(loadPromise);
  };
  play = (notes: Note[], duration: Time = '1:0', start: Time = '+0:0') => {
    return new Promise(resolve => {
        Transport.scheduleOnce(() => {
            console.log('play end');
            resolve(0);
        }, TimeClass(duration).toSeconds() + TimeClass(start).toSeconds());
        this.sampler.triggerAttackRelease(notes, duration, start);
    })
  };
  playModeNotes = (mainNote: MainNote, modeType: ModeType) => {
    const promiseArr: Promise<unknown>[] = [];
    const notes = getModeNotes(mainNote, modeType);
    notes.forEach((note, index) => {
        promiseArr.push(this.play([note], "1:0", `+0:${index}`));
    });
    return Promise.all(promiseArr);
  };
}

export default new Player();
