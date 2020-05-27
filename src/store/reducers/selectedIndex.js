import {
	CLICK_ITEM,
	ADD_ITEM,
	MOVE_ITEM_UP,
	MOVE_ITEM_DOWN,
} from '../actions';

function selectedIndex(state, action) {
	switch (action.type) {
		case CLICK_ITEM: return (action.payload === state ? -1 : action.payload);
		case ADD_ITEM: return state + 1;
		case MOVE_ITEM_UP: return state - 1;
		case MOVE_ITEM_DOWN: return state + 1;
		default: return state;
	}
}

export default selectedIndex;
