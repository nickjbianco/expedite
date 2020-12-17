// Takes any number and rounds it down.

const mathFloor = (anyNum) => {
  if (anyNum === 0) return 0;
  for (let i = 0; i <= anyNum + 1; i++) {
    if (i > anyNum) return i - 1;
  }
};

export default mathFloor;
