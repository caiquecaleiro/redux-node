import { PLACE, REPORT, ROTATE } from './types';

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