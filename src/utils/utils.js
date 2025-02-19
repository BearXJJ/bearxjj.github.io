export const playSounds = (path) => {
  const audio = new Audio(path);
  audio.play();
}
