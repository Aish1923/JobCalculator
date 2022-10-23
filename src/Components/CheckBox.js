import Checkbox from '@mui/material/Checkbox';

//components need to be made more generic,currently included only the props necessary for this assignment
function CheckBox({value,name,onChange}) {
    return <>
        <Checkbox
            value={value}
            checked={value}
            onChange={onChange}
            name={name}
            sx={{
                color: 'rgb(174, 255, 36)',
                '&.Mui-checked': {
                    color: 'rgb(174, 255, 36)',
                },
                '& .MuiSvgIcon-root': { fontSize: 28 }
            }}
        />
    </>
}

export default CheckBox;