import { PLACE, REPORT } from './types';

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