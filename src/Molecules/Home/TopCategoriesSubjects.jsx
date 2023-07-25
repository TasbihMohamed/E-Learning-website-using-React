import { Typography } from '@mui/material'
import React from 'react'
import CustomSlider from '../../Atoms/SharedComponents/CustomSlider'
import { useThemePalette } from '../../Theme/useThemePalatte'

export default function TopCategoriesSubjects({ 
    setIsActive,
    isActive,
    subjectError,
    setError,
    categoriesSubjects,
    handleClick
}) {
    const { blackTwo } = useThemePalette()
    //------------------------------ Check if categoriesSubjects length existing --------------------------------
    const renderedCoures = categoriesSubjects?.length &&
        <CustomSlider className='home-page' slides1024={categoriesSubjects?.length} slides1020={3} slides600={1}>
            {/* --------------------------- mapping into categoriesSubjects to display subjects  ----------------------- */}
            {categoriesSubjects?.map(data =>
                <Typography
                    color={blackTwo}
                    fontWeight='600'
                    padding='16px 32px'
                    my='0.5rem'
                    sx={{
                        ...(isActive === data.id && {
                            color: 'primary.main',
                            boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
                            borderRadius: '8px',
                            bgcolor: 'info.main'
                        }),
                    }}
                    key={data.id}
                    onClick={_ => handleClick(data.id)}
                >
                    {data.name}
                </Typography>
            )}
        </CustomSlider>

    return <>
        {/* {subjectError ? <Error title='subjects' /> : renderedCoures} */}
        {renderedCoures}
    </>
}
