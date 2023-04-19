
import { CircularProgress, Typography, Box } from '@mui/material/';

function ProgressTimer(props) {
    return (
        <Box container sx ={{display:"grid", justifyContent:"center",alignContent:"center",justifyItems:"center"}} >
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="determinate"  {...props} size={85}   sx={{ border: "solid thick "+`${props.customcolor}`, borderRadius: "50%", color: `${props.customcolor}` }} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <Typography variant="h4" component="div" color={props.customcolor} >
                        {`${(props.time)}s`}
                    </Typography>
                </Box>
            </Box >
            <Box sx={{ borderRadius: "15px", backgroundColor: `${props.customcolor}` }}>
                <Typography variant="h6" component="div"  >
                    {props.title}
                </Typography>

            </Box>


        </Box>

    );

}

export default ProgressTimer