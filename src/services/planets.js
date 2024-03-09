import api from "./apiConfig.js";

export const getPlanets = async () => {
  try {
    const response = await api.get("/planets");
    return response.data;
  } catch (error) {
    console.error("Error getting all Planets:", error);
  }
};

export const getPlanet = async (id) => {
  try {
    const response = await api.get(`/planets/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting Planet", error);
  }
};

export const createPlanet = async (planetData) => {
  try {
    const response = await api.post("/planets", planetData);
  } catch (error) {
    console.error(error);
  }
};

export const editPlanet = async (id, planetData) => {
  try {
    const response = await api.put(`/planets/${id}`, planetData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deletePlanet = async (id) => {
  try {
    const response = await api.delete(`/planets/${id}`);
    return response.data;
  } catch (error) {
    console.error(error)
  }
};
