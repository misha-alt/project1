import axios from "axios";

const REST_API_BACE_URL = 'http://localhost:8080/test';

//test jira======================================================
const JIRA_MANAGER_URL = 'http://localhost:8099/manager';
export const managerName =() =>axios.get(JIRA_MANAGER_URL);

//==============================================================

export const listProduct = () =>axios.get(REST_API_BACE_URL);

export const createProduct =(product) =>axios.post(REST_API_BACE_URL, product);



