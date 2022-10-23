import TextField from "@mui/material/TextField";
import { alpha, styled } from '@mui/material/styles';

const InputTextField = styled((props) => (
    <TextField  {...props} />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid  rgb(151, 151, 151)',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: 'rgb(51, 55, 50)',
        color: 'white',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            borderColor: 'rgb(174, 255, 36)',
            backgroundColor: 'rgb(51, 55, 50)',
        },
        '&.Mui-focused': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: 'rgb(174, 255, 36)',
            backgroundColor: 'rgb(51, 55, 50)',
        },
    },
    '&.MuiInputBase-readOnly': {
        border: 'none'
    }
}));

//components need to be made more generic,currently included only the props necessary for this assignment

function InputBox({ onChange, textName, value, number, readOnly }) {
    return <>
        <InputTextField
            InputProps={{
                autoComplete: 'off',
                readOnly: readOnly ? true : false,
                disableUnderline: true 
            }}
            onChange={onChange}
            name={textName}
            variant="filled"
            placeholder={textName}
            value={value}
            type={number && 'number'}
        />
    </>
}

export default InputBox;

