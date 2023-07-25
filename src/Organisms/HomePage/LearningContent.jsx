import { Box, Typography } from '@mui/material'
import { Container, Stack } from '@mui/material'
import chooseCourse from '../../Assets/Images/Group1094.webp'
import startLearning from '../../Assets/Images/Group1096.webp'
import getCertificate from '../../Assets/Images/Group1095.webp'

export default function LearningContent() {
    const learningContents = [
        { id: 0, img: chooseCourse, description: 'Choose course' },
        { id: 1, img: startLearning, description: 'Choose course' },
        { id: 2, img: getCertificate, description: 'Choose course' },
    ]
    return <>
        <Container sx={{ my: 5 }}>
            <Stack
                sx={{ flexDirection: { xs: 'column' , sm:'row' } }}
                justifyContent='space-evenly'
                alignItems='center'
            >
                {/* --------------------------- Maping into learningContents Array to display img and description */}
                {learningContents.map(learningContent =>
                    <Stack
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                        key={learningContent.id}
                    >
                        <Box
                            width='137px'
                            height='137px'
                        >
                            <img
                                src={learningContent.img}
                                alt={learningContent.description}
                                className='w-100'
                            />
                        </Box>
                        <Box>
                            <Typography>{learningContent.description}</Typography>
                        </Box>
                    </Stack>
                )}
            </Stack>
        </Container>
    </>
}