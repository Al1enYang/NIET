import React,{useState} from "react"
import './Body.css'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Body = () =>{
    const classes1 = useStyles1();
    const classes2 = useStyles2();
    const classes3 = useStyles3();
    const classes4 = useStyles4();

    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });
    
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    return(
        <div className={'Body-container'}>
            <div className="Body-title">
                {'Apply Now, it’s Easy.'}
            </div>

            <div className="Body-contactPage">
                <div className="Body-contactPage-text">
                    {'Use the form below to apply (both Domestic & International students), if you need help, please send us an enquiry through our contact page'}
                </div>
                <div className="Body-contactPage-link">
                    {'here>>'}
                </div>
            </div>

            <div className="Body-form">
                <div className="Body-section1">
                    {'Student name'}
                </div>
                <form className={classes1.root} noValidate autoComplete="off">
                    <TextField id="filled-basic" label="Family Name*" variant="filled" />
                    <TextField id="filled-basic" label="First Name*" variant="filled" />
                </form>

                <div className="Body-section2">
                    {'Course Selection'}
                </div>
                <div>
                    <FormControl variant="filled" className={classes2.formControl}>
                        <InputLabel htmlFor="filled-program-native-simple">{'Your Preferred Program*'}</InputLabel>
                        <Select
                            native
                            value={state.program}
                            onChange={handleChange}
                            inputProps={{
                                name: 'program',
                                id: 'filled-program-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>General English</option>
                            <option value={20}>Diploma</option>
                            <option value={30}>Certificate</option>
                            {/* {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                {name}
                              </MenuItem>
                            ))} */}
                        </Select>
                    </FormControl>

                    <FormControl variant="filled" className={classes2.formControl}>
                        <InputLabel htmlFor="filled-campus-native-simple">{'Preferred campus*'}</InputLabel>
                        <Select
                            native
                            value={state.campus}
                            onChange={handleChange}
                            inputProps={{
                                name: 'campus',
                                id: 'filled-campus-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>{'Brisbane Eight Mile Plains Campus'}</option>
                            <option value={20}>{'Hobart(Tasmania) Campus'}</option>
                        </Select>
                    </FormControl>

                    <FormControl variant="filled" className={classes2.formControl}>
                        <InputLabel htmlFor="filled-month-native-simple">{'Preferred commencement month*'}</InputLabel>
                        <Select
                            native
                            value={state.month}
                            onChange={handleChange}
                            inputProps={{
                                name: 'month',
                                id: 'filled-month-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>January</option>
                            <option value={20}>February</option>
                            <option value={30}>March</option>
                        </Select>
                    </FormControl>
                </div>

                <div>
                    <FormControl variant="filled" className={classes3.formControl}>
                        <InputLabel htmlFor="filled-academicCredit-native-simple">Academic credit not required (default)</InputLabel>
                        <Select
                            native
                            value={state.academicCredit}
                            onChange={handleChange}
                            inputProps={{
                                name: 'academicCredit',
                                id: 'filled-academicCredit-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>I am applying for Academic Credit</option>
                        </Select>
                    </FormControl>

                    <FormControl variant="filled" className={classes3.formControl}>
                        <InputLabel htmlFor="filled-instalment-native-simple">Pay in equal quarterly instalments(default)</InputLabel>
                        <Select
                            native
                            value={state.academicCredit}
                            onChange={handleChange}
                            inputProps={{
                                name: 'instalment',
                                id: 'filled-instalment-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Pay by semester (6 monthly instalments)</option>
                            <option value={20}>Pay in full in advance</option>
                            <option value={30}>{'Pay minimum deposit* and instalments (*terms & fees apply)'}</option>
                        </Select>
                    </FormControl>
                </div>

                <div>
                    <form className={classes4.root} noValidate autoComplete="off">
                        <TextField id="filled-basic" label="Please note any additional courses you wish to add or package." variant="filled" />
                    </form>
                </div>

                <div className="Body-note">
                    {'Please note: Not all courses are available at all campuses. Please check the course page for details.'}
                </div>

                <div className="Body-section2">
                    {'Student details'}
                </div>

                <div>
                <FormControl variant="filled" className={classes3.formControl}>
                        <InputLabel htmlFor="filled-residential-native-simple">{'Student residential status*'}</InputLabel>
                        <Select
                            native
                            value={state.academicCredit}
                            onChange={handleChange}
                            inputProps={{
                                name: 'residential',
                                id: 'filled-residential-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>{'I am a citizen of Australia'}</option>
                            <option value={20}>{'I am a citizen of New Zealand'}</option>
                            <option value={30}>{'I am an International Student'}</option>
                            <option value={40}>{'I am a permanent resident of Australia'}</option>
                        </Select>
                    </FormControl>

                    <FormControl variant="filled" className={classes3.formControl}>
                        <InputLabel htmlFor="filled-visa-native-simple">{'Student visa requirements'}</InputLabel>
                        <Select
                            native
                            value={state.academicCredit}
                            onChange={handleChange}
                            inputProps={{
                                name: 'visa',
                                id: 'filled-visa-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Pay by semester (6 monthly instalments)</option>
                            <option value={20}>Pay in full in advance</option>
                            <option value={30}>{'Pay minimum deposit* and instalments (*terms & fees apply)'}</option>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default Body

const useStyles1 = makeStyles((theme) => ({
    root: {
        '& > *': 
        {
            margin: theme.spacing(1),
            width: '67.5ch',
        },
    },
}));

const useStyles2 = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width:'44.5ch',
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const useStyles3 = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width:'67.5ch',
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const useStyles4 = makeStyles((theme) => ({
    root: {
        '& > *': 
        {
            margin: theme.spacing(1),
            width: '137ch',
        },
    },
}));

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const months = [
    'January', 
    'February',
    'March',
    'April',
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December',
]