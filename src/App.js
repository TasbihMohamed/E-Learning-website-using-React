// import { ThemeProvider } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/ThemePalette";
import HomePage from "./Pages/HomePage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Atoms/SharedComponents/NotFound";
import CoursesDetailsPage from "./Pages/Courses/CoursesDetails/CoursesDetailsPage";
import { Box, Stack } from "@mui/material";
import setAuthToken from "./Modules/utils/handel_api";
import CoursesListPage from "./Pages/Courses/CoursesList/CoursesListPage";
// import ChapterQuizPage from "./Pages/Courses/QuizView/ChapterQuizPage";
import ChapterVideoPage from "./Pages/Courses/VideoView/ChapterVideoPage";
// import Test from "./Pages/Courses/QuizView/Test";
import StudentSubmitAssignment from "./Molecules/Courses/CoursesDetails/StudentSubmitAssignment";
import QuizTimer from "./Molecules/Courses/QuizView/QuizTimer";

function App() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNzUxLCJkZXZpY2VfaWQiOjI5NSwiZXhwIjo0ODM2MTMwNzUyfQ.FLwpkn30yxrJbmdqmigUu3a6R2nQx9keEB4TZwu8Zo8";
  setAuthToken(token);

  return (
    <>
      <Stack width="100%" alignItems="center">
        <Box width="100%">
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/courses-details/:course_id"
                element={<CoursesDetailsPage />}
              />
              <Route
                path="courses-details/:courseId/:sectionId/:sessionId"
                element={<ChapterVideoPage />}
              />

              <Route
                path="/courses-details/:course_id/assignment"
                element={<StudentSubmitAssignment />}
              />
              <Route path="*" element={<NotFound />} />
              <Route path="/course-list" element={<CoursesListPage />} />
              {/* <Route path="/chapter-quiz" element={<ChapterQuizPage />} /> */}
              <Route path="/chapter-video" element={<ChapterVideoPage />} />
              {/* <Route path="/Test" element={<Test />} />
              <Route path="/Test" element={<Test />} /> */}
              {/* <Route path="/TestApiVideos" element={<TestApiVideos />} /> */}
              <Route path="/QuizTimer" element={<QuizTimer />} />
            </Routes>
          </ThemeProvider>
        </Box>
      </Stack>
    </>
  );
}
export default App;
