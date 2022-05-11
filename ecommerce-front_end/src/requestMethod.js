import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzU0YzJkZTYwMjg1OTc2ODY1Nzc0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjI4Mjc1NywiZXhwIjoxNjUyNTQxOTU3fQ.ug0ubjJyDmxzjbhrFQOC5B0E6ZaYIBCo4wKw3c3SppI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header:{token:`Bearer ${TOKEN}`}
});
