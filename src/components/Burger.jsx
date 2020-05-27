import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BurgerItems from './BurgerItems';
import IngredientPicker from './IngredientPicker';
import burgerReducer from '../store/reducers';
import { pickerStatuses } from '../store/actions';
import { getItemInfo } from '../util/ingredients';
import { getItemTopPosition, getButtonsConfig } from '../util/burgerHelpers';

const useStyles = makeStyles({
	root: {
		windexth: '700px',
		height: '100vh',
		margin: '10px auto',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
});

const initialState = {
	items: ['White bun top', 'Sliced tomato', 'Ground-beef patty', 'White bun bottom'],
	selectedIndex: -1,
	pickerStatus: pickerStatuses.CLOSED,
};

function Burger() {
	const classes = useStyles();
	const [state, dispatch] = useReducer(burgerReducer, initialState);
	const { items, selectedIndex, pickerStatus } = state;

	const itemCount = items.length;
	const itemsInfo = items.map((item, index) => ({
		name: item,
		imageSrc: getItemInfo(item).imageSrc,
		topPosition: getItemTopPosition(index, selectedIndex, true),
		buttons: getButtonsConfig(index, selectedIndex, itemCount),
	}));

	return (
		<div className={classes.root}>
			<BurgerItems
				itemInfo={itemsInfo}
				dispatch={dispatch}
			/>
			<IngredientPicker
				selectedIndex={selectedIndex}
				selectedItem={pickerStatus === pickerStatuses.OPENED_IN_CHANGE_MODE
					? items[selectedIndex] : undefined}
				isOpened={pickerStatus !== pickerStatuses.CLOSED}
				dispatch={dispatch}
			/>
		</div>
	);
}

export default Burger;
