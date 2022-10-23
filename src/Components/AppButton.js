import { Button } from "@mui/material"


//components need to be made more generic,currently included only the props necessary for this assignment

function AppButton({ size, onClick, value }) {
    return <>
        <Button
            size={size}
            sx={{
                backgroundColor: "rgb(174, 255, 36)",
                color: "black",
                fontWeight: "bold",
                fontSize: "1rem",
                width: "15px",
                "&:hover": {
                    backgroundColor: "white",
                },
            }}
            variant="contained"
            onClick={onClick}
        >
            {value}
        </Button>
    </>
}
export default AppButton;