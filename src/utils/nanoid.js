const alphabet = '_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default () => {
  let res = '';
  for (let i = 0; i < 16; i++) {
    res += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return res;
}