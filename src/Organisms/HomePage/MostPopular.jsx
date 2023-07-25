import CustomSlider from "../../Atoms/SharedComponents/CustomSlider";
import CoursesCard from "../../Atoms/SharedComponents/CoursesCard";
import FrequentSkelton from "../../Atoms/SharedComponents/FrequentSkelton";
import Loading from "../../Atoms/SharedComponents/Loading";
import { Box, Typography, Stack } from "@mui/material";

export default function MostPopular({
  title,
  subTitle,
  coursesArr,
  coursesLoading,
}) {
  console.log(coursesArr);
  return (
    <>
      <FrequentSkelton title={title} subtitle={subTitle} paddingBottom="4rem">
        {coursesLoading ? (
          <Loading />
        ) : coursesArr.length <= 0 ? (
          <Typography color={"error.main"}>No Courses Yet</Typography>
        ) : (
          <CustomSlider
            className="home-page"
            slides1024={3}
            slides1020={1}
            slides600={1}
          >
            {coursesArr?.map((data, i) => (
              <Stack key={i} width={{ sm: "100%", md: "272px" }}>
                <CoursesCard data={data} />
              </Stack>
            ))}
          </CustomSlider>
        )}
      </FrequentSkelton>
    </>
  );
}
