export const CLICK_ITEM = 'CLICK_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const CHANGE_ITEM = 'CHANGE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const MOVE_ITEM_UP = 'MOVE_ITEM_UP';
export const MOVE_ITEM_DOWN = 'MOVE_ITEM_DOWN';
export const SET_PICKER_STATUS = 'SET_PICKER_STATUS';

export const pickerStatuses = {
	OPENED_IN_ADD_MODE: 'OPENED_IN_ADD_MODE',
	OPENED_IN_CHANGE_MODE: 'OPENED_IN_CHANGE_MODE',
	CLOSED: 'CLOSED',
};

export function clickItem(index) {
	return { type: CLICK_ITEM, payload: index };
}

export function addItem(item, index) {
	return { type: ADD_ITEM, payload: { item, index } };
}

export function changeItem(item, index) {
	return { type: CHANGE_ITEM, payload: { item, index } };
}

export function deleteItem(index) {
	return { type: DELETE_ITEM, payload: index };
}

export function moveItemUp(index) {
	return { type: MOVE_ITEM_UP, payload: index };
}

export function moveItemDown(index) {
	return { type: MOVE_ITEM_DOWN, payload: index };
}

export function setPickerStatus(status) {
	return { type: SET_PICKER_STATUS, payload: status };
}
