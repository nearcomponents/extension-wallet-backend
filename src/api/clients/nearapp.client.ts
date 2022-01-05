import axios from "axios";

import CreateNearWalletDTO from "../interfaces/nearApi/CreateNearWalletDTO.interface";

const baseUrl = `${process.env.NEAR_API_URL}`;

const api = {
  createUserAccount: async (nearAccount: CreateNearWalletDTO) => {
    return axios
      .post(`${baseUrl}/user/create`, nearAccount)
      .then((response) => response.data);
  },
};

export default api;
