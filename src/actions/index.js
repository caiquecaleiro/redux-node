import { PLACE, REPORT, ROTATE, MOVE } from './types';

export function place(position) {
	return {
		type: PLACE,
		position
	};
}

export function report() {
	return {
		type: REPORT
	};
}

export function rotate(direction) {
	return {
		type: ROTATE,
		direction
	};
}

export function move(direction) {
	return {
		type: MOVE
	};
}