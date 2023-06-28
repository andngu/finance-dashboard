import { createTheme } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";
import { themeSettings } from "./theme";
import { Box, CssBaseline, ThemeProvider, CircularProgress, Typography } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from "@/client/state/api";
import NavBar from "@/client/scenes/navbar";
import Dashboard from "@/client/scenes/dashboard";
import Predictions from "@/client/scenes/predictions";

function App() {
   const [loading, setLoading] = useState(true);
   const [showTypography, setShowTypography] = useState(false);
   const { isLoading: kpiLoading } = useGetKpisQuery();
   const { isLoading: productLoading } = useGetProductsQuery();
   const { isLoading: transactionLoading } = useGetTransactionsQuery();

   useEffect(() => {
      if (!kpiLoading && !productLoading && !transactionLoading) {
         setLoading(false);
      } else {
         // If any loading is still ongoing after 10 seconds, show Typography
         const timeoutId = setTimeout(() => {
            setShowTypography(true);
         }, 5000);

         return () => clearTimeout(timeoutId); // Clean up the timeout on unmount
      }
   }, [kpiLoading, productLoading, transactionLoading]);

   const theme = useMemo(() => createTheme(themeSettings), []);
   return (
      <>
         <div className="app">
            <BrowserRouter>
               <ThemeProvider theme={theme}>
                  <CssBaseline />
                  {loading ? (
                     <Box width="100%" height="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={5}>
                        <CircularProgress size="10rem" />
                        {showTypography && (
                           <Typography color="white" width="50%" variant="h1">
                              Please note that when starting up our website for the first time, data loading may be delayed as the backend takes a while to spin up again due to inactivity on the free version of where it's hosted
                           </Typography>
                        )}
                     </Box>
                  ) : (
                     <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
                        <NavBar />
                        <Routes>
                           <Route path="/" element={<Dashboard />} />
                           <Route path="/predictions" element={<Predictions />} />
                        </Routes>
                     </Box>
                  )}
               </ThemeProvider>
            </BrowserRouter>
         </div>
      </>
   );
}

export default App;
