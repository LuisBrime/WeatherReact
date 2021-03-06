import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
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
    table: {
        minWidth: 200,
        margin: theme.spacing.unit,
    },
    head: {
        backgroundColor: theme.palette.primary.main,
    },
    body: {
        fontSize: 14,
    },
});

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: WeatherStore.getCity(),
            weather: {
                humidity: 0,
                pressure: 0,
                temp: 0,
                temp_max: 0,
                temp_min: 0
            }
        };

        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        var aux = WeatherStore.getData();
        //console.log(aux);
        this.setState({
            city: WeatherStore.getCity(),
            weather: {
                humidity: aux.humidity,
                pressure: aux.pressure,
                temp: aux.temp,
                temp_max: aux.temp_max,
                temp_min: aux.temp_min
            }
        });
    }

    componentWillMount() {
        WeatherStore.addChangeListener(this._onChange);
        //console.log(this.props);
        var aux = ""
        if (this.props.match.params.id) {
            aux = this.props.match.params.id;
            //console.log(aux);
            WeatherActions.changeCity(aux); 
            WeatherActions.remoto(aux);
        }
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
                    <Typography component="h1" variant="h5">
                        {this.state.city}
                    </Typography>
                    <Divider variant="middle" />
                    <Table className={classes.table}>
                        <TableHead className={classes.head}>
                            <TableRow>
                                <TableCell>Weather</TableCell>
                                <TableCell>Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className={classes.body}>
                            <TableRow>
                                <TableCell>Humidity</TableCell>
                                <TableCell>{this.state.weather.humidity}%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Pressure</TableCell>
                                <TableCell>{this.state.weather.pressure} hpa</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Temperature</TableCell>
                                <TableCell>{this.state.weather.temp}ºC</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Max Temperature</TableCell>
                                <TableCell>{this.state.weather.temp_max}ºC</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Min Temperature</TableCell>
                                <TableCell>{this.state.weather.temp_min}ºC</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

Info.propTypes = {
    classes: PropTypes.object.isRequired,
}; 

export default withRoot(withStyles(styles)(Info));