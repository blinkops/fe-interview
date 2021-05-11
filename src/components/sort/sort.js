import React from 'react';
import './sort.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
    color:'white'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function Sort(props) {
  const classes = useStyles();
  const [sort, setSort] = React.useState('');

  const handleChange = (event) => {
    setSort(event.target.value);
    props.sort(event.target.value);
  };

  
  return (
    <div className="sorting">
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">sort by:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          onChange={handleChange}
        >
          <MenuItem value='name'>Name</MenuItem>
          <MenuItem value='age'>Age</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Sort;

    