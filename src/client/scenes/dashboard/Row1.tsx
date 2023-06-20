import DashboardBox from "@/client/components/DashboardBox";
import { useGetKpisQuery } from "@/client/state/api";
import { useTheme } from "@mui/material";
import React, { useMemo } from "react";
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, LineChart, Line, Legend } from "recharts";

type Props = {};

function Row1({}: Props) {
   const { palette } = useTheme();
   const { data } = useGetKpisQuery();
   console.log("data:", data);

   const revenueExpenses = useMemo(() => {
      return (
         data &&
         data[0].monthlyData.map(({ month, revenue, expenses }) => {
            return {
               name: month.substring(0, 3),
               revenue: revenue,
               expenses: expenses,
            };
         })
      );
   }, [data]);

   const revenueProfit = useMemo(() => {
      return (
         data &&
         data[0].monthlyData.map(({ month, revenue, expenses }) => {
            return {
               name: month.substring(0, 3),
               revenue: revenue,
               profit: (revenue - expenses).toFixed(2),
            };
         })
      );
   }, [data]);

   console.log(revenueProfit);
   return (
      <>
         <DashboardBox gridArea="a">
            <ResponsiveContainer width="100%" height="100%">
               <AreaChart
                  width={500}
                  height={400}
                  data={revenueExpenses}
                  margin={{
                     top: 10,
                     right: 30,
                     left: 0,
                     bottom: 0,
                  }}
               >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" dot={true} stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
                  <Area type="monotone" dataKey="expenses" dot={true} stroke={palette.primary.main} fillOpacity={1} fill="url(#colorExpenses)" />
               </AreaChart>
            </ResponsiveContainer>
         </DashboardBox>
         <DashboardBox gridArea="b">
            <ResponsiveContainer width="100%" height="100%">
               <LineChart
                  width={500}
                  height={400}
                  data={revenueProfit}
                  margin={{
                     top: 20,
                     right: 0,
                     left: -10,
                     bottom: 55,
                  }}
               >
                  <CartesianGrid vertical={false} stroke={palette.grey[800]} />
                  <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
                  <YAxis yAxisId="left" tickLine={false} axisLine={false} style={{ fontSize: "10px" }} />
                  <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} style={{ fontSize: "10px" }} />
                  <Tooltip />
                  <Legend
                     height={20}
                     wrapperStyle={{
                        margin: "0 0 10px 0",
                     }}
                  />
                  <Line yAxisId="left" type="monotone" dataKey="profit" stroke={palette.tertiary[500]} />
                  <Line yAxisId="right" type="monotone" dataKey="revenue" stroke={palette.primary.main} />
               </LineChart>
            </ResponsiveContainer>
         </DashboardBox>
         <DashboardBox gridArea="c"></DashboardBox>
      </>
   );
}

export default Row1;
