import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useThemePalette } from '../../Theme/useThemePalatte';

function LinearProgressWithLabel(props) {
    const { blackTwo } = useThemePalette()
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" sx={{ bgcolor: '#f1f1f1', height: '9px' }} {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color={blackTwo} fontWeight='500' >
                    {/* {`${Math.round(
                        props.value,
                    )}%`} */}
                    {`${props.value.toFixed(2)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

export default function CustomProgressBar({ custom }) {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        // const timer = setInterval(() => {
        setProgress((custom >= 100 ? 10 : custom));
        // }, 800);
        // return () => {
        // clearInterval(timer);
        // };
    }, []);

    return (
        <Box sx={{ width: '260px' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );
}