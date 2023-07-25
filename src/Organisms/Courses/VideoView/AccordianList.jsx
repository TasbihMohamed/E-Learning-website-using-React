import { Stack, Typography } from "@mui/material";
import React from "react";
import CustomAccordian from "../../../Atoms/SharedComponents/CustomAccordian";
import Lock from "../../../Assets/Images/Lock.png";
import { useState, useEffect } from "react";
import accordianVideoIcon from "../../../Assets/Images/accordianIcon1.png";
import accordianAssignmentIcon from "../../../Assets/Images/accordianIcon3.png";
import accordianQuizIcon from "../../../Assets/Images/accordianIcon2.png";
import { useNavigate, useParams } from "react-router-dom";

export default function AccordianList({ section, sectionIndex }) {
    const fullAccordianStyle = { boxShadow: 0 ,pb:2, "& .MuiAccordionDetails-root": { p:0 }};
    const accordianTitleStyle = { fontWeight: 700, fontSize: "20px" }
    const { courseId, sectionId, sessionId } = useParams();
    const [finalSessionId, queryParams] = sessionId.split("&");


    const navigate = useNavigate();

    const ViewSession = (section_id, id, content_type) => {
        // console.log(section_id, id, content_type ,"content_type");
        navigate(`/courses-details/${courseId}/${section_id}/${id}?type=${content_type}`)

    };
    const [coursedata, setCourseData] = useState([...section?.sessions]);
    useEffect(()=>{
        section?.sessions?.map((data)=>{
            setCourseData((prev)=>[...prev , ...data?.quizzes , ...data?.assignments])
        })
    },[section?.sessions])
    console.log([...new Set(coursedata)],'coursedata')


    // const accordianDetails = coursedata?.map((session, index) => {
    //     return (

    //         <Stack direction="row" key={session.course_session_id}
            
    //             onClick={() => ViewSession(section.section_id, session.course_session_id, session.content_type)}
    //             sx={{
    //                 background: finalSessionId == session.course_session_id
    //                     // background: sessionId == session.course_session_id
    //                     //   && session.content_type === searchParams.get('type')

    //                     ? "#D9D9D966" : "transparent",
    //                 p: 2, justifyContent: "space-between", "&:hover": { cursor: "pointer" },
    //             }}
    //         >
    //             <Stack direction="row">
    //                 <Stack>
    //                     <img src={accordianVideoIcon} />
    //                 </Stack>
    //                 <Typography sx={{ px: 1, color: "rgb(52, 52, 52)", fontWeight: 600 }}>
    //                     {session.content_type}:

    //                 </Typography>
    //                 <Typography
    //                     sx={{
    //                         color: "rgba(52, 52, 52,.6)", display: "-webkit-box", overflow: "hidden",
    //                         WebkitBoxOrient: "vertical",
    //                         WebkitLineClamp: 2,
    //                     }}
    //                 >
    //                     {session.text}

    //                 </Typography>
    //             </Stack>
    //             <Stack sx={{ pl: 1 }}>
    //                 {session.is_blocked ? null : <img src={Lock} />}
    //             </Stack>

    //         </Stack>

    //     )
    // })
    const accordianDetails = section?.sessions.map((session, index) => {
        return (
            <Stack key={index}>
                <Stack direction="row" key={session.course_session_id}
                    onClick={() => ViewSession(section.section_id, session.course_session_id, session.content_type, index)}
                    sx={{
                        background: finalSessionId == session.course_session_id ? "#D9D9D966" : "transparent",
                        p: 2, justifyContent: "space-between", "&:hover": { cursor: "pointer" },
                    }}
                >
                    <Stack direction="row">
                        <Stack>
                            <img src={accordianVideoIcon} />
                        </Stack>
                        <Typography sx={{ px: 1, color: "rgb(52, 52, 52)", fontWeight: 600 }}>
                            {session.content_type}:

                        </Typography>
                        <Typography
                            sx={{
                                color: "rgba(52, 52, 52,.6)", display: "-webkit-box", overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 2,
                            }}
                        >
                            {session.text}

                        </Typography>
                    </Stack>
                    <Stack sx={{ pl: 1 }}>
                        {session.is_blocked ? null : <img src={Lock} />}
                    </Stack>


                </Stack>

                {/* ==================quiz================================== */}
                {
                    session.quizzes.length >= 1 && <>{session.quizzes.map((quiz, i) => (

                        <Stack direction="row" key={quiz.quiz_id}
                            onClick={() => ViewSession(section.section_id, quiz.quiz_id, 'quiz', index)}
                            sx={{
                                background: finalSessionId == quiz.quiz_id ? "#D9D9D966" : "transparent",
                                p: 2, justifyContent: "space-between", "&:hover": { cursor: "pointer" },
                            }}
                        >
                            <Stack direction="row">
                                <Stack>
                                    <img src={accordianQuizIcon} />
                                </Stack>
                                <Typography sx={{ px: 1, color: "rgb(52, 52, 52)", fontWeight: 600 }}>
                                    Quiz :

                                </Typography>
                                <Typography
                                    sx={{
                                        color: "rgba(52, 52, 52,.6)", display: "-webkit-box", overflow: "hidden",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: 2,
                                    }}
                                >
                                    {quiz.description}

                                </Typography>
                            </Stack>
                            <Stack sx={{ pl: 1 }}>
                                {quiz.is_blocked ? null : <img src={Lock} />}
                            </Stack>
                        </Stack>
                    ))}
                    </>
                }
                {/* ==================assignment================================== */}

                {
                    session.assignments.length >= 1 && <>{session?.assignments.map((assignment, i) => (

                        <Stack direction="row" key={assignment.assignment_id}
                            onClick={() => ViewSession(section.section_id, assignment.assignment_id, 'assignment', index)}
                            sx={{
                                background: finalSessionId == assignment.assignment_id ? "#D9D9D966" : "transparent",
                                p: 2, justifyContent: "space-between", "&:hover": { cursor: "pointer" },
                            }}
                        >
                            <Stack direction="row">
                                <Stack>
                                    <img src={accordianAssignmentIcon} />
                                </Stack>
                                <Typography sx={{ px: 1, color: "rgb(52, 52, 52)", fontWeight: 600 }}>
                                    Assignment:

                                </Typography>
                                <Typography
                                    sx={{
                                        color: "rgba(52, 52, 52,.6)", display: "-webkit-box", overflow: "hidden",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: 2,
                                    }}
                                >
                                    {assignment.title}
                                </Typography>
                            </Stack>
                            <Stack sx={{ pl: 1 }}>
                                {assignment.is_blocked ? null : <img src={Lock} />}
                            </Stack>
                        </Stack>
                    ))} </>
                }
               
            </Stack>
        );
    });

    return (<>
        <CustomAccordian
            accordianTitle={`Section ${sectionIndex + 1}`}
            accordianTitleStyle={accordianTitleStyle}
            accordianDetails={accordianDetails}
            fullAccordianStyle={fullAccordianStyle}
            isExpanded={sectionId == section.section_id ? true : false}
        />

    </>

    );
}

