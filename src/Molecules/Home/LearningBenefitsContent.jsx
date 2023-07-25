import { Box } from '@mui/material'
import React from 'react'
import CustomColoresTitle from '../../Atoms/SharedComponents/CustomColoresTitle'
import BenefitsList from './BenefitsList'

export default function LearningBenefitsContent() {
    const benefitsTitles = [
        { title: 'Access 16,000+ expert-led courses.' },
        { title: 'Expert instructors with lifetime access on your courses.' },
        { title: 'Use project files and quizzes to practice while you learn.' },
        { title: 'View courses anytime on your computer or phone' },
        { title: 'Earn a certificate when you complete a course.' }
    ]

    return <>
        {/* ------------------------------------ Befits Title ----------------------------------------- */}
        <Box>
        <CustomColoresTitle
                firstPart='Benefits Of Learning From'
                secondPart='Edugram'
                firstPartColor='secondary.main'
                secondPartColor='primary.main'
                fontSize='2rem'
                component='h2'
                variant='h2'
                width='341px'
            />
        </Box>
        {/* -------------------------------------------- Benefits -------------------------------- */}
        <Box marginTop='2.5rem'>
            {benefitsTitles.map((benefit, i) => <BenefitsList key={i} >{benefit.title}</BenefitsList>)}
        </Box>
    </>
}
