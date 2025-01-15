import { ICompany, IIndustry } from "../../shared/services/company/models";

export interface IDecoratedIndusty extends IIndustry {
  companies: ICompany[];
}
