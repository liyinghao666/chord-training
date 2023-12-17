export const base64ToArrayBuffer = (str: string) => {
  return Uint8Array.from(atob(str), (c) => c.charCodeAt(0)).buffer;
};

/**
 * 
 */
// export const sumOfTime = (timeA: string, timeB: string) => {
//     const shortRule = /^\+?(\d)\:(\d)$/;
//     const longRule = /^\+?(\d)\:(\d)\:(\d)$/;
//     const [A1, A2, A3] = ();
//     const [B1, B2, B3] = ();
//     return `${A1 + B1}:${A2 + B2}:${A3 + B3}`;
// }
