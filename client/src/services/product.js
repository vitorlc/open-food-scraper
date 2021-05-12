import api from "./api"
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

const find = (code) => api.get(`/products/${code}`)

const findAll = (filters) => api.get("/products", { params: filters })

export default {
  find,
  findAll
}