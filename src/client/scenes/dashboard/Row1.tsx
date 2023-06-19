import DashboardBox from "@/client/components/DashboardBox";
import { useGetKpisQuery } from "@/client/state/api";
import React from "react";

type Props = {};

function Row1({}: Props) {
   const { data } = useGetKpisQuery();
   console.log("data:", data);
   return (
      <>
         <DashboardBox gridArea="a"></DashboardBox>
         <DashboardBox gridArea="b"></DashboardBox>
         <DashboardBox gridArea="c"></DashboardBox>
      </>
   );
}

export default Row1;
