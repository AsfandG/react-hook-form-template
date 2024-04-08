
import axiosInstance from "./axiosInsctance/axiosInstance";
import { BaseURL } from "./baseUrl/baseUrl";

// GET ALL  API

export const getAllCategoryApi = async () => {
  try {
    const response = await fetch(`${BaseURL}/category`, { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw Error(error.message);
  }
};

// POST API
export const createCategoryApi = async (formDataToSend: FormData) => {
  try {
    const response = await axiosInstance.post(`category`, formDataToSend);
    return response?.data;
  } catch (error) {
    throw error;
  }
};


//GET ONE API
export const getSingleCategoryApi = async (id: string) => {
  try {
    const response = await axiosInstance.get(`category/${id}`);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

//GET BY SLUG
export const getCategoryBySlug = async (slug: string) => {
  try {
    const response = await axiosInstance.get(`category/slug/${slug}`);
    return response;
  } catch (error) {
    throw error;
  }
};
//UPDATE API
export const updateCategoryApi = async (
  id: string,
  formDataToSend: FormData
) => {
  try {
    const response = await axiosInstance.patch(
      `category/${id}`,
      formDataToSend
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};
// DELETE API
export const deleteCategoryApi = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`category/${id}`);
    return response?.data;
  } catch (error) {
    throw error;
  }
};
