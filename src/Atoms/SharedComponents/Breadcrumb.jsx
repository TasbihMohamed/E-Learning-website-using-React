import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function handleClick(event) {
  event.preventDefault();
  console.log('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs separator={<ArrowForwardIosIcon sx={{color:'#808080' ,fontSize:'.8rem'}}/>} aria-label="breadcrumb">
        <Link underline="hover" color="#28A19C" href="/" sx={{fontWeight: '700' ,px:1 }}>
          Design
        </Link>
        <Link
          underline="hover"
          color="#28A19C"
          href="/material-ui/getting-started/installation/"
          sx={{fontWeight: '700' ,px:1}}>
          User Experience Design
        </Link>
        <Typography color="#343434" sx={{fontWeight: '700' ,px:1 ,color:"#28A19C"}}>Chapter 1</Typography>
      </Breadcrumbs>
    </div>
  );
}