import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.github.com/',
  Headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export const getCurrentRepo = (name, page, pageSize) => {
  return instance.get(`users/${name}/repos?page=${page}&per_page=${pageSize}`);
};

export const getUser = (name) => {
  return instance.get(`users/${name}`);
}