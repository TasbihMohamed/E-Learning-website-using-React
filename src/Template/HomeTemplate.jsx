/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Learning from '../Organisms/HomePage/Learning'
import TopCategories from '../Organisms/HomePage/TopCategories'
import LearningBenfits from '../Organisms/HomePage/LearningBenfits'
import OurClients from '../Organisms/HomePage/OurClients'
import MostPopular from '../Organisms/HomePage/MostPopular'
import PopularCertificates from '../Organisms/HomePage/PopularCertificates'
import Layout from '../Organisms/Layout/Layout'
import Home from '../Organisms/HomePage/Home'
import WhatsIcon from '../Atoms/SharedComponents/WhatsIcon'

export default function HomeTemplate({
    loading,
    getSubjectRequest,
    fetchAllSubjectsRequest,
    fetchFilteredSubjectsRequest,
    isActive,
    setIsActive,
    finalData,
    categoriesSubjects,
    handleClick,
    coursesArr,
    coursesLoading
}) {

    return <>
        <Layout >
            <Home />
            <Learning />
            <TopCategories
                loading={loading}
                getSubjectRequest={getSubjectRequest}
                fetchAllSubjectsRequest={fetchAllSubjectsRequest}
                fetchFilteredSubjectsRequest={fetchFilteredSubjectsRequest}
                isActive={isActive}
                setIsActive={setIsActive}
                finalData={finalData}
                categoriesSubjects={categoriesSubjects}
                handleClick={handleClick}
            />
            <LearningBenfits />
            <MostPopular
                title='Most Popular'
                subTitle='Learn the latest skills to reach your professional goals'
                coursesArr={coursesArr}
                coursesLoading={coursesLoading}
            />
            <OurClients />
            <PopularCertificates />
            <WhatsIcon />
        </Layout>
    </>
}
