import React, { useEffect, useMemo, useState } from "react";
import companyAPI from "../../shared/services/company/companyAPI";
import { ICompany } from "../../shared/services/company/models";
import { IDecoratedIndusty } from "./models";
import { Box } from "@mui/material";
import Industry from "../../shared/components/Industry";

interface IIndustryMap {
  [industryId: number]: IDecoratedIndusty;
}

const Industries = () => {
  const [companies, setCompanies] = useState<ICompany[]>([]);

  const industries: IDecoratedIndusty[] = useMemo(() => {
    let industryMap: IIndustryMap = {};

    companies.forEach((company) => {
      company.industries.forEach((industry) => {
        const existingIndustry = industryMap[industry.id];

        if (existingIndustry) {
          existingIndustry.companies.push(company);
        } else {
          industryMap[industry.id] = { ...industry, companies: [company] };
        }
      });
    });

    return Object.values(industryMap);
  }, [companies]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const _companies = await companyAPI.getCompanies();
        setCompanies(_companies || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
      {industries?.map((industry) => (
        <Industry key={industry.id} industry={industry} />
      ))}
    </Box>
  );
};

export default Industries;
