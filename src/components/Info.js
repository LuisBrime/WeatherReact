import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import WeatherActions from '../actions/WeatherActions';
import WeatherStore from '../stores/WeatherStore';


const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
});

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: WeatherStore.getCity()
        };

        this._onChange = this._onChange.bind(this);
    }

    _remoto(event) {
        WeatherActions.remoto();
    }

    _onChange() {
        this.setState({ city: WeatherStore.getCity() });
    }

    componentWillMount() {
        WeatherStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        WeatherStore.removeChangeListener(this._onChange);
    }

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Button variant="contained" component="span" onClick={this._remoto.bind(this)}>
                        Remote
                    </Button>
                    <Typography component="h1" variant="h5">
                        {WeatherStore.getCity()}
                    </Typography>
                </Paper>
            </div>
        );
    }
}

Info.propTypes = {
    classes: PropTypes.object.isRequired,
}; 

export default withRoot(withStyles(styles)(Info));