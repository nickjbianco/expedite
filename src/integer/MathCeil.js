// Takes any number and rounds it up.

const mathCeil = (anyNum) => {
  if (anyNum === 0) return 0;
  for (let i = 0; i <= anyNum + 1; i++) {
    if (i > anyNum) return i;
  }
};

export default mathCeil;
