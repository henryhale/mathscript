export const deg = (x: number) => (x * 180) / Math.PI;
export const rad = (x: number) => (x * Math.PI) / 180;
export const sin = (x: number) => Math.sin(x);
export const cos = (x: number) => Math.cos(x);
export const tan = (x: number) => Math.tan(x);
export const sind = (x: number) => Math.sin(rad(x));
export const cosd = (x: number) => Math.cos(rad(x));
export const tand = (x: number) => Math.tan(rad(x));
export const asin = (x: number) => Math.asin(x);
export const acos = (x: number) => Math.acos(x);
export const atan = (x: number) => Math.atan(x);
// export const atan2 = (x: number, y: number) => Math.atan2(y, x);
export const csc = (x: number) => 1 / Math.sin(x);
export const sec = (x: number) => 1 / Math.cos(x);
export const cot = (x: number) => 1 / Math.tan(x);
export const sinh = (x: number) => Math.sinh(x);
export const cosh = (x: number) => Math.cosh(x);
export const tanh = (x: number) => Math.tanh(x);
export const asinh = (x: number) => Math.asinh(x);
export const acosh = (x: number) => Math.acosh(x);
export const atanh = (x: number) => Math.atanh(x);
export const hypot = (...x: number[]) =>
    Math.sqrt(x.reduce((s, c) => s + c * c, 0));
export const versin = (x: number) => 1 - Math.cos(x);
export const versind = (x: number) => 1 - Math.cos(rad(x));
export const coversin = (x: number) => versin(x) / 2;
export const coversind = (x: number) => versind(x) / 2;
