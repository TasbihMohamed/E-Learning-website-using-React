import React from 'react'
import video1 from "../../Assets/Images/movie.mp4"
import Vimeo from '@u-wave/react-vimeo';
import { Box } from '@mui/material';

export default function ChapterVideo() {
    return (
        <div>
            {/* <video src={video1} width="600" height="300" controls="controls" autoplay="true" /> */}
            <Box sx={{border:1}}>
            <Vimeo
                // video={studentCoursesDetails?.classified_product?.video_url}
                video={video1}
                autoplay={false}
                loop
                muted={false}
                controls={true}
            />
            </Box>
            {/* <Vimeo
  video={video1}
  autoplay
/> */}


        </div>
    )
}


/// done 

///////////////////
// import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
// import React from 'react'
// import video1 from "../../Assets/Images/movie.mp4"

// export default function ChapterVideo() {
//     return (
//         <div>

//             <Card 
//             //  raised={true}
//              >
//                 <CardHeader
//                     // title={camera.cameraName}
//                     title='hhh'
//                     />

//                 <CardActionArea>
//                     <CardMedia
//                         component='video'
                    
//                         image={video1}
//                     />
//                     <CardContent>

//                         <Typography variant="body2" color="textSecondary" component="p">
//                             Some Text
//                         </Typography>
//                     </CardContent>
//                 </CardActionArea>
//             </Card>        </div>
//     )
// }

// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import video1 from "../../Assets/Images/movie.mp4"

// export default function ChapterVideo() {
//   const theme = useTheme();

//   return (
//     <Card sx={{ display: 'flex' }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <CardContent sx={{ flex: '1 0 auto' }}>
//           <Typography component="div" variant="h5">
//             Live From Space
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" component="div">
//             Mac Miller
//           </Typography>
//         </CardContent>
//         <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
//           <IconButton aria-label="previous">
//             {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//           </IconButton>
//           <IconButton aria-label="play/pause">
//             <PlayArrowIcon sx={{ height: 38, width: 38 }} />
//           </IconButton>
//           <IconButton aria-label="next">
//             {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//           </IconButton>
//         </Box>
//       </Box>
//       <CardMedia 
//   component="video"
//   height="140"
//   image={video1}
//   title="Contemplative Reptile" 
//   autoPlay
// />
//       {/* <CardMedia
//         component="video"
//         sx={{ width: 151 }}
//         image={video1}
//         alt="Live from space album cover"
//       /> */}
//     </Card>
//   );
// }