export type Coordinate = {
    x: number;
    y: number;
};
export type DraggableOption = {
    pressDelay?: number;
};
export declare const params: ({ x, y }: Coordinate, offset?: number) => {
    button: number;
    clientX: number;
    clientY: number;
    force: boolean;
};
