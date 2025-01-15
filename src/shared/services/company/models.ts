export interface IIndustry {
  id: number;
  name: string;
}

export interface ICompany {
  uuid: number;
  industries: IIndustry[];
  name: string;
  total_jobs_available: number;
  images: IImage;
}

export interface IImage {
  "32x32": string;
}
