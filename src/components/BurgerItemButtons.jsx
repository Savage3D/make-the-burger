import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {
	moveItemUp,
	moveItemDown,
	deleteItem,
	setPickerStatus,
	pickerStatuses,
} from '../store/actions';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& > *': { margin: '0 6px' },
	},
});

function BurgerItemButtons(props) {
	const classes = useStyles();
	const { index, dispatch, buttons } = props;

	return (
		<div className={classes.root}>
			{ buttons.openPickerInAddMode
				&& (
					<Fab
						color="secondary"
						size="large"
						aria-label="Open ingredient picker for adding new item"
						onClick={() => dispatch(setPickerStatus(pickerStatuses.OPENED_IN_ADD_MODE))}
					>
						<AddIcon />
					</Fab>
				)}
			{ buttons.moveItemUp
				&& (
					<Fab
						color="primary"
						size="small"
						aria-label="Move item up"
						onClick={() => dispatch(moveItemUp(index))}
					>
						<ExpandLessIcon />
					</Fab>
				)}
			{ buttons.moveItemDown
				&& (
					<Fab
						color="primary"
						size="small"
						aria-label="Move item down"
						onClick={() => dispatch(moveItemDown(index))}
					>
						<ExpandMoreIcon />
					</Fab>
				)}
			{ buttons.openPickerInChangeMode
				&& (
					<Fab
						color="primary"
						size="small"
						aria-label="Open ingredient picker for changing selected item"
						onClick={() => dispatch(setPickerStatus(pickerStatuses.OPENED_IN_CHANGE_MODE))}
					>
						<EditIcon />
					</Fab>
				)}
			{ buttons.deleteItem
				&& (
					<Fab
						color="primary"
						size="small"
						aria-label="Delete item"
						onClick={() => dispatch(deleteItem(index))}
					>
						<DeleteIcon />
					</Fab>
				)}
		</div>
	);
}

BurgerItemButtons.propTypes = {
	index: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired,
	buttons: PropTypes.exact({
		openPickerInAddMode: PropTypes.bool,
		moveItemUp: PropTypes.bool,
		moveItemDown: PropTypes.bool,
		openPickerInChangeMode: PropTypes.bool,
		deleteItem: PropTypes.bool,
	}).isRequired,
};

export default BurgerItemButtons;
