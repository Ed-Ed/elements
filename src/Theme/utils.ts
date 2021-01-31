/**
 * Returns a number whose value is limited to the given range
 */
const clamp = (value: number, min = 0, max = 1): number => {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
};

/**
 * Converts a color from CSS hex format to CSS rgb format
 */
const hexToRgb = (color: string): string => {
  color = color.substr(1);

  const re = new RegExp(`.{1,${color.length / 3}}`, "g");
  let colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }

  return colors ? `rgb(${colors.map(n => parseInt(n, 16)).join(", ")})` : "";
};

/**
 * Returns an object with the type and values of a color
 */
const decomposeColor = (color: string): { type: string; values: number[] } => {
  if (color.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf("(");
  const type = color.substring(0, marker);

  if (["rgb", "rgba"].indexOf(type) === -1) {
    throw new Error(`decomposeColor - Unsupported color ${color}`);
  }

  const stringifiedValues = color
    .substring(marker + 1, color.length - 1)
    .split(",");
  const values = stringifiedValues.map(value => parseFloat(value));

  return { type, values };
};

/**
 * Converts a color object with type and values to a string
 */
const recomposeColor = (color: { type: string; values: number[] }): string => {
  const { type } = color;
  let { values } = color;

  // only convert the first 3 values to int
  values = values.map((n: any, i: number) => (i < 3 ? parseInt(n, 10) : n));

  return `${type}(${values.join(", ")})`;
};

const darken = (color: string, coefficient: number): string => {
  const colorObject = decomposeColor(color);
  coefficient = clamp(coefficient);

  for (let i = 0; i < 3; i += 1) {
    colorObject.values[i] *= 1 - coefficient;
  }

  return recomposeColor(colorObject);
};

const lighten = (color: string, coefficient: number): string => {
  const colorObject = decomposeColor(color);
  coefficient = clamp(coefficient);

  for (let i = 0; i < 3; i += 1) {
    colorObject.values[i] += (255 - colorObject.values[i]) * coefficient;
  }

  return recomposeColor(colorObject);
};

export { darken, lighten };
