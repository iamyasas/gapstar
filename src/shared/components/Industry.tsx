import React, { FC } from "react";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { IDecoratedIndusty } from "../../pages/Industries/models";
import CompanyList from "./CompanyList";

const Industry: FC<{ industry: IDecoratedIndusty }> = ({ industry }) => {
  return (
    <Card sx={{ minWidth: 400, margin: 1 }}>
      <CardHeader title={industry.name} subheader={industry.companies.length} />
      <CardContent>
        <Box borderBottom={1} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} width={"100%"}>
          <Box>Name</Box>
          <Box>Total jobs available</Box>
        </Box>
        <CompanyList companies={industry.companies} />
      </CardContent>
    </Card>
  );
};

export default Industry;
