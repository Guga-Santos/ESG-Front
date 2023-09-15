import { client } from "@/api/client";
import { ResponseAPI, companyBody } from "@/interfaces/Response.interface";


export const createCompany = async (body: companyBody): Promise<ResponseAPI | any> =>  {
  try {
    const { data } = await client.post('/company', body);
    return data;
  } catch (err) {
    console.error('Error: ', err);
  }

}

export const getCompanies = async (): Promise<ResponseAPI[] | any> => {
  try {
    const { data } = await client.get('/companies');
    return data;
  } catch (err) {
    console.error('Error: ', err);
  }
}

export const getCompaniesById = async (id: string): Promise<ResponseAPI | any> => {
  try {
    const { data } = await client.get(`/company/${id}`);
    return data;
  } catch (err) {
    console.error('Error: ', err);
  }
}

export const deleteCompany = async (id: string) => {
  try {
    await client.delete(`/company/${id}`);
  } catch (err) {
    console.error('Error: ', err);
  }
}

export const editCompany = async (id: string, editable: Partial<companyBody>): Promise<ResponseAPI | any> => {
  try {
    const { data } = await client.put(`/company/${id}`, editable);
    return data;
  } catch (err) {
    console.error('Error: ', err);
  }
}