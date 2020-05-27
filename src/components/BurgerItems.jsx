import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import BurgerItem from './BurgerItem';

function BurgerItems(props) {
	const { itemInfo, dispatch } = props;
	const burgerItems = [];
	const itemCount = itemInfo.length - 1;

	for (let i = itemCount; i >= 0; i--) {
		burgerItems.push((
			<BurgerItem
				key={uuidv4()}
				index={i === itemCount ? -1 : i}
				dispatch={dispatch}
				name={itemInfo[i].name}
				imageSrc={itemInfo[i].imageSrc}
				topPosition={itemInfo[i].topPosition}
				buttons={itemInfo[i].buttons}
			/>
		));
	}
	return burgerItems;
}

BurgerItems.propTypes = {
	itemInfo: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		imageSrc: PropTypes.string,
		topPosition: PropTypes.number,
		buttons: PropTypes.exact({
			openPickerInAddMode: PropTypes.bool,
			moveItemUp: PropTypes.bool,
			moveItemDown: PropTypes.bool,
			openPickerInChangeMode: PropTypes.bool,
			deleteItem: PropTypes.bool,
		}),
	})).isRequired,
};

export default BurgerItems;
