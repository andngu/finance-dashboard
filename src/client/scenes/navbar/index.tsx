import { useState } from "react";
import { Link } from "react-router-dom";
import CycloneIcon from "@mui/icons-material/Cyclone";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/client/components/FlexBetween";

const NavBar = () => {
   const { palette } = useTheme();
   const [selected, setSelected] = useState("dashboard");
   return (
      <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
         {/* LEFT SIDE */}
         <FlexBetween gap="0.75rem">
            <CycloneIcon sx={{ fontSize: "28px" }} />
            <Typography variant="h4" fontSize="16px">
               SpectraFinance
            </Typography>
         </FlexBetween>

         {/* RIGHT SIDE */}
         <FlexBetween gap="2rem">
            <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
               <Link to="/" onClick={() => setSelected("dashboard")} style={{ color: selected === "dashboard" ? "inherit" : palette.grey[700], textDecoration: "inherit" }}>
                  DASHBOARD
               </Link>
            </Box>
            <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
               <Link to="/predictions" onClick={() => setSelected("predictions")} style={{ color: selected === "predictions" ? "inherit" : palette.grey[700], textDecoration: "inherit" }}>
                  PREDICTIONS
               </Link>
            </Box>
         </FlexBetween>
      </FlexBetween>
   );
};

export default NavBar;
