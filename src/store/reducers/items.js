import {
	ADD_ITEM,
	CHANGE_ITEM,
	DELETE_ITEM,
	MOVE_ITEM_UP,
	MOVE_ITEM_DOWN,
} from '../actions';

function items(state, action) {
	switch (action.type) {
		case ADD_ITEM: return [
			...state.slice(0, action.payload.index),
			action.payload.item,
			...state.slice(action.payload.index),
		];
		case CHANGE_ITEM: return [
			...state.slice(0, action.payload.index),
			action.payload.item,
			...state.slice(action.payload.index + 1),
		];
		case DELETE_ITEM: return [
			...state.slice(0, action.payload),
			...state.slice(action.payload + 1),
		];
		case MOVE_ITEM_UP: return [
			...state.slice(0, action.payload - 1),
			state[action.payload],
			state[action.payload - 1],
			...state.slice(action.payload + 1),
		];
		case MOVE_ITEM_DOWN: return [
			...state.slice(0, action.payload),
			state[action.payload + 1],
			state[action.payload],
			...state.slice(action.payload + 2),
		];
		default: return state;
	}
}

export default items;
