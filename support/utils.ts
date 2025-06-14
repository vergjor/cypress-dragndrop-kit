import { Coordinate } from "./types"

export const params = ({ x, y }: Coordinate, offset = 0) => ({
  button: 0,
  clientX: x + offset,
  clientY: y + offset,
  force: true,
});