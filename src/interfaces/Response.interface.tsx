export interface companyBody {
  name: string;
  description: string;
  email: string;
  url: string;
  sector: string;
  logo: string;
  data: string;
  stamps: string[]
}

export interface ResponseAPI extends companyBody{
  _id: string;
}
