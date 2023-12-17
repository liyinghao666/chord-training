export const base64ToArrayBuffer = (str: string) => {
  return Uint8Array.from(atob(str), (c) => c.charCodeAt(0)).buffer;
};