import axios from "axios";
const baseUrl = "/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const addNew = (newObj) => {
  const request = axios.post(baseUrl, newObj);
  return request.then((response) => response.data);
};

const deletePers = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const updatePers = (id, newObj) => {
  const req = axios.put(`${baseUrl}/${id}`.newObj);
  return req.then((res) => res.data);
};

export default { getAll, addNew, deletePers };
