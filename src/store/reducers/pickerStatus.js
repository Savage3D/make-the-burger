import {
	ADD_ITEM,
	CHANGE_ITEM,
	SET_PICKER_STATUS,
	pickerStatuses,
} from '../actions';

function pickerStatus(state, action) {
	switch (action.type) {
		case ADD_ITEM: return pickerStatuses.CLOSED;
		case CHANGE_ITEM: return pickerStatuses.CLOSED;
		case SET_PICKER_STATUS: return action.payload;
		default: return state;
	}
}

export default pickerStatus;
