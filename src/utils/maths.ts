function clamp(min: number, input: number, max: number) {
  return Math.max(min, Math.min(input, max));
}

const mapRange = (
  in_min: number,
  in_max: number,
  input: number,
  out_min: number,
  out_max: number
) => {
  return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const lerp = (start: number, end: number, amt: number) => {
  return (1 - amt) * start + amt * end;
};

const truncate = (value: number, decimals: number) => {
  return parseFloat(value.toFixed(decimals));
};

const convertPxtoRem = (px: number) => {
  let rem = px / 16;

  return rem + "rem";
};

export { lerp, clamp, mapRange, truncate, convertPxtoRem };
