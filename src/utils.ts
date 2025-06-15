export type Coordinate = { x: number; y: number; };

export type DraggableOption = {
    pressDelay?: number;
}

export const params = ({ x, y }: Coordinate, offset = 0) => ({
  button: 0,
  clientX: x + offset,
  clientY: y + offset,
  force: true,
});

export const calculateCoordinates = (coordinates: DOMRect) => {
  const x = coordinates.left + coordinates.width / 2;
  const y = coordinates.top + coordinates.height / 2;
  
  return { ...coordinates, x, y };
}