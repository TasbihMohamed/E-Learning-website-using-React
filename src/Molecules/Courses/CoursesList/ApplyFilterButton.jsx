import { Button } from '@mui/material';
import React from 'react'

export default function ApplyFilterButton({ onApply, selectedTitle, setOpen }) {
    const handleFilter = () => {
        setOpen(false);
        onApply(selectedTitle);
        console.log("mmm", selectedTitle);
      
    };
  
    return (
        <Button
            sx={{ color: "#28a19c", fontSize: ".8rem", fontWeight: 600 }}
            onClick={handleFilter}
        >
            Apply
        </Button>
    )
}
