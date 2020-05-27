import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IngredientPickerRoulette from './IngredientPickerRoulette';
import { categories, getItemInfo, getItemsInfo } from '../util/ingredients';

import { setPickerStatus, addItem, changeItem, pickerStatuses } from '../store/actions';

const useStyles = makeStyles({
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& > *': { margin: '10px 0' },
	},
	actionButtons: {
		display: 'flex',
		alignItems: 'center',
		'& > button': { margin: '6px' },
	},
	formControl: {
		minWidth: '120px',
		margin: '12px',
	},
});

function getInitialIndex(selectedItem, itemsInfo) {
	const index = itemsInfo.find((info) => info.name === selectedItem);
	return index > 0 ? index : 0;
}

function IngredientPicker(props) {
	const classes = useStyles();
	const { selectedIndex, selectedItem, isOpened, dispatch } = props;

	const [category, setCategory] = useState('All');
	const [index, setIndex] = useState(getInitialIndex(selectedItem, getItemsInfo('All')));

	function handlePrevClick() { setIndex(index - 1); }

	function handleNextClick() { setIndex(index + 1); }

	function handleCategoryChange(event) {
		setCategory(event.target.value);
		setIndex(0);
	}

	function handleClose() { dispatch(setPickerStatus(pickerStatuses.CLOSED)); }

	function handleSave() {
		const item = getItemsInfo(category)[index].name;
		const action = selectedItem
			? changeItem(item, selectedIndex)
			: addItem(item, selectedIndex + 1);
		dispatch(action);
	}

	return (
		<Dialog
			open={isOpened}
			onClose={handleClose}
			aria-labelledby="dialog-title"
			maxWidth="md"
			fullWidth
		>
			<DialogTitle id="dialog-title">
				{selectedItem
					? `Change ingredient: ${getItemInfo(selectedItem).name}`
					: 'Add new ingredient'}
			</DialogTitle>
			<DialogContent className={classes.content}>
				<FormControl className={classes.formControl}>
					<InputLabel id="choose-category-label">Category</InputLabel>
					<Select
						value={category}
						labelId="choose-category-label"
						id="choose-category-select"
						onChange={handleCategoryChange}
					>
						{categories.map((cat) => (
							<MenuItem key={cat} value={cat}>{cat}</MenuItem>
						))}
					</Select>
				</FormControl>
				<IngredientPickerRoulette
					itemInfo={getItemsInfo(category)[index]}
					handlePrevClick={index === 0 ? undefined : handlePrevClick}
					handleNextClick={index === getItemsInfo(category).length - 1
						? undefined
						: handleNextClick}
				/>
				<div className={classes.actionButtons}>
					<Fab
						color="primary"
						size="large"
						aria-label="Done"
						onClick={handleSave}
					>
						<DoneIcon />
					</Fab>
					<Fab
						color="secondary"
						size="large"
						aria-label="Cancel"
						onClick={handleClose}
					>
						<CloseIcon />
					</Fab>
				</div>
			</DialogContent>
		</Dialog>
	);
}

IngredientPicker.propTypes = {
	selectedIndex: PropTypes.number.isRequired,
	selectedItem: PropTypes.string,
	isOpened: PropTypes.bool.isRequired,
	dispatch: PropTypes.func.isRequired,
};

IngredientPicker.defaultProps = { selectedItem: undefined };

export default IngredientPicker;
