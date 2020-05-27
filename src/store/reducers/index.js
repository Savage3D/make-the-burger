import items from './items';
import selectedIndex from './selectedIndex';
import pickerStatus from './pickerStatus';

function burger(state, action) {
	return {
		items: items(state.items, action),
		selectedIndex: selectedIndex(state.selectedIndex, action),
		pickerStatus: pickerStatus(state.pickerStatus, action),
	};
}

export default burger;
