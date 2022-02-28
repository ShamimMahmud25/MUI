import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Typography, MenuItem} from "@material-ui/core";
const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "60px",
    padding: "5px",
  },
  header: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    fontWeight: "500",
    wrap: "wrap",
  },
}));

export default function Page7() {
  const classes = useStyles();
  const [currency, setCurrency] = useState('EUR');
  const [firstName,setFirstName]= useState('');
  const [errors,setErrors]= useState({
    firstName:false
  });
  const [errorMessage,setErrorMessage]= useState({
    firstName:""
  });
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleFirstName=(event)=>{
    setFirstName(event.target.value);
  }
  const validator=(value,Name)=>{
    if(Name==="FirstName"){
      if(value!==""){
        if(value.length>15){
          setErrors((prevState)=>({
            ...prevState,
            firstName:true
          }))
          setErrorMessage((prevState)=>({
            ...prevState,
            firstName:"Maximum length will be 15"
          }))
        }
        else if(!/^([A-Za-z\s]*)$/g.test(value)){
          setErrors((prevState)=>({
            ...prevState,
            firstName:true
          }))
          setErrorMessage((prevState)=>({
            ...prevState,
            firstName:"Name can not contain special characters"
          }))
        }
        else{
          setErrors((prevState)=>({
            ...prevState,
            firstName:false
          }))
          setErrorMessage((prevState)=>({
            ...prevState,
            firstName:""
          }))
        }
      
      }
      else {
        setErrors((prevState)=>({
          ...prevState,
          firstName:true
        }))
        setErrorMessage((prevState)=>({
          ...prevState,
          firstName:"Name Required"
        }))
      }
     
    }
  }

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.header}>
          TextField
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField id="standard-basic" fullWidth label="Standard" />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          id="filled-basic"
          fullWidth
          label="Filled"
          variant="filled"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          id="outlined-basic"
          fullWidth
          label="Outlined"
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          error={errors.firstName}
          fullWidth
          id="standard-error-helper-text"
          label="Standard"
          value={firstName}
          onChange={handleFirstName}
          onBlur={()=>validator(firstName,"FirstName")}
          helperText={errorMessage.firstName}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          error={errors.firstName}
          fullWidth
          id="standard-error-helper-text"
          label="Filled"
          variant="filled"
          value={firstName}
          onChange={handleFirstName}
          onBlur={()=>validator(firstName,"FirstName")}
          helperText={errorMessage.firstName}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          error={errors.firstName}
          fullWidth
          id="standard-error-helper-text"
          label="Outlined"
          variant="outlined"
          value={firstName}
          onChange={handleFirstName}
          onBlur={()=>validator(firstName,"FirstName")}
          helperText={errorMessage.firstName}
        />
      </Grid>
      <Grid item xs={12} sm={5}>
      <TextField
          id="standard-select-currency"
          select
          fullWidth
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={5}>
      <TextField
          id="standard-select-currency-native"
          select
          fullWidth
          label="Native select"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={5}>
      <TextField
          id="standard-select-currency"
          select
          fullWidth
          variant="filled"
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={5}>
      <TextField
          id="standard-select-currency-native"
          select
          fullWidth
          variant="filled"
          label="Native select"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={5}>
      <TextField
          id="standard-select-currency"
          select
          fullWidth
          variant="outlined"
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={5}>
      <TextField
          id="standard-select-currency-native"
          select
          fullWidth
          variant="outlined"
          label="Native select"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
}
