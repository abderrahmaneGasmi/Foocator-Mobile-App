import { client } from "./clients";

export const getplaces = async () => {
  let req;
  try {
    req = await client.get("api/places", {});
  } catch (error: any) {
    const { response }: any = error;

    if (response?.data) return { error: response.data.response };

    return { error: error.message || error, data: null };
  }
  return { error: null, data: req.data };
};
export const getpopularplaces = async (limit = 3) => {
  let req;
  try {
    req = await client.get("api/places/popular", {
      params: {
        limit,
      },
    });
  } catch (error: any) {
    const { response }: any = error;

    if (response?.data) return { error: response.data.response };

    return { error: error.message || error, data: null };
  }
  return { error: null, data: req.data };
};
export const searchplaces = async (query: string) => {
  let req;
  try {
    req = await client.get("api/places/search", {
      params: {
        search: query,
      },
    });
  } catch (error: any) {
    const { response }: any = error;

    if (response?.data) return { error: response.data.response };

    return { error: error.message || error, data: null };
  }
  return { error: null, data: req.data };
};
