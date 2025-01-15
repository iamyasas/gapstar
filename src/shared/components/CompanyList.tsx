import React, { FC } from "react";
import { ICompany } from "../services/company/models";
import { Box, List, ListItem, ListItemIcon } from "@mui/material";

const CompanyList: FC<{ companies: ICompany[] }> = ({ companies }) => {
  return (
    <List>
      {companies?.map((company) => (
        <ListItem key={company.uuid}>
          <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} width={"100%"}>
            <Box display={"flex"} flexDirection={"row"} gap={0.5} alignItems={"center"}>
              <img src={company.images["32x32"]} width={20} height={20} alt={company.name} />
              <Box>{company.name}</Box>
            </Box>
            <Box>{company.total_jobs_available}</Box>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default CompanyList;
