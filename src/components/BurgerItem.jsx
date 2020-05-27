import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import BurgerItemButtons from './BurgerItemButtons';
import { clickItem } from '../store/actions';

const useStyles = makeStyles({
	root: {
		maxWidth: '500px',
		position: 'absolute',
		top: (props) => props.topPosition,
		opacity: 1,
		'& > img': { maxWindth: '500px' },
	},
});

function BurgerItem(props) {
	const classes = useStyles(props);
	const { index, dispatch, name, imageSrc, buttons } = props;

	return (
		<div className={classes.root}>
			<img
				src={imageSrc}
				alt={name}
				onClick={() => dispatch(clickItem(index))}
			/>
			<BurgerItemButtons
				index={index}
				dispatch={dispatch}
				buttons={buttons}
			/>
		</div>
	);
}

BurgerItem.propTypes = {
	index: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
	// eslint-disable-next-line react/no-unused-prop-types
	topPosition: PropTypes.number.isRequired,
	buttons: PropTypes.exact({
		openPickerInAddMode: PropTypes.bool,
		moveItemUp: PropTypes.bool,
		moveItemDown: PropTypes.bool,
		openPickerInChangeMode: PropTypes.bool,
		deleteItem: PropTypes.bool,
	}).isRequired,
};

export default BurgerItem;
