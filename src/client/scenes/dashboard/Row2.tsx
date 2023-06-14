import DashboardBox from "@/client/components/DashboardBox";
import React from "react";

type Props = {};

const Row2 = (props: Props) => {
   return (
      <>
         <DashboardBox gridArea="d"></DashboardBox>
         <DashboardBox gridArea="e"></DashboardBox>
         <DashboardBox gridArea="f"></DashboardBox>
      </>
   );
};

export default Row2;
