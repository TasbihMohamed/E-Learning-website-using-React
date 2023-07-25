import React from 'react'
import FrequentSkelton from '../../Atoms/SharedComponents/FrequentSkelton';
import LearningContent from './LearningContent';

export default function Learning() {
    return <>
        {/*   ----------------- Custom Component Adding bg-color and some styles -----------------  */}
        <FrequentSkelton
            title='Learning Process'
            subtitle='Learn the latest skills to reach your professional goals'
        >
        </FrequentSkelton>
        {/* ------------------------------ Display Static Img and Title ----------------------- */}
        <LearningContent />
    </>
}
