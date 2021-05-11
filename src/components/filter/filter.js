import React from 'react';
import './filter.css'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width:160,
  },
});

 function valuetext(value) {
   return `${value}°C`;
 }

function Filter(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.range);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.filter(value,props.filterBy)
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
       {props.filterBy} 
      </Typography>
      <Slider
        value={value}
        max={props.range[1]}
        onChange={ handleChange}
        onChangeCommitted={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
export default Filter;