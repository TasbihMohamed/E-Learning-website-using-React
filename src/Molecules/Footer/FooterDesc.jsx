import { Box, Stack } from "@mui/material";
import logo from "../../Assets/Images/Logo@2x.webp";
import { Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function FooterDesc() {
  return (
    <>
      <Stack>
        <Box width="266px">
          <img src={logo} className="w-100 footer-logo" alt="edugram logo" />
        </Box>
        <Box>
          <Typography fontWeight="600" fontSize="13px" my="2.5rem">
            Discover the fastest, most effective way to build your skills with
            courses, certificates, and degrees. Get started with us.
          </Typography>
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          color="primary.main"
          width="220px"
        >
          <FacebookRoundedIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <LinkedInIcon />
          <WhatsAppIcon />
        </Stack>
      </Stack>
    </>
  );
}
