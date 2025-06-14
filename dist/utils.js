"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = void 0;
const params = ({ x, y }, offset = 0) => ({
    button: 0,
    clientX: x + offset,
    clientY: y + offset,
    force: true,
});
exports.params = params;
