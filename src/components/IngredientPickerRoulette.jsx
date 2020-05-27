import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		alignItems: 'center',
		'& > button': { margin: '12px' },
	},
});

function IngredientPickerRoulette(props) {
	const classes = useStyles();
	const { itemInfo, handlePrevClick, handleNextClick } = props;
	return (
		<div className={classes.root}>
			<IconButton
				aria-label="previous ingredient"
				color="primary"
				disabled={handlePrevClick === undefined}
				onClick={handlePrevClick}
			>
				<ChevronLeftIcon />
			</IconButton>
			<img
				src={itemInfo.imageSrc}
				alt={itemInfo.name}
			/>
			<IconButton
				aria-label="next ingredient"
				color="primary"
				disabled={handleNextClick === undefined}
				onClick={handleNextClick}
			>
				<ChevronRightIcon />
			</IconButton>
		</div>
	);
}

IngredientPickerRoulette.propTypes = {
	itemInfo: PropTypes.shape({
		name: PropTypes.string,
		imageSrc: PropTypes.string,
	}).isRequired,
	handlePrevClick: PropTypes.func,
	handleNextClick: PropTypes.func,
};

IngredientPickerRoulette.defaultProps = {
	handlePrevClick: undefined,
	handleNextClick: undefined,
};

export default IngredientPickerRoulette;
