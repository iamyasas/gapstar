import axios from "axios";
import React from "react";
import { ICompany } from "./models";

const companyAPI = {
  getCompanies: async () => {
    const response = await axios.get("https://fs-industry-card.onrender.com/api/companies");
    return response.data as ICompany[];
  },
};

export default companyAPI;
