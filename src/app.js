import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const useStyles = makeStyles({
  foo: {
    backgroundColor: 'red',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.foo}>Learn React</Typography>
      <Button variant="contained" color="primary">
        Learn React
      </Button>
      <AccessAlarmIcon />
    </div>
  );
}

export default App;
