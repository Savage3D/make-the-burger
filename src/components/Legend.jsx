import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
	root: {
		maxWidth: 500,
		margin: 10,
		padding: '10px 0px',
	},
});

function Legend() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Paper elevation={3}>
				<Container>
					<Typography variant="h6">
						To start editing a burger click on any ingredient.
						Then use buttons to change the shape of the burger.
					</Typography>
				</Container>
			</Paper>
		</div>
	);
}

export default Legend;
