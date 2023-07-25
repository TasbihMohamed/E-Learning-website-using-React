import { Button } from '@mui/material';
import whatsapp from '../../Assets/Images/Whatsapp.svg'

export default function WhatsIcon() {
    return <>
        <Button
            sx={{ position: 'fixed', zIndex: 999, right: '15px', bottom: '10px' }}
            aria-label='whatsapp icon'
        >
            <img src={whatsapp} alt='whatsapp icon'/>
        </Button>
    </>
}
