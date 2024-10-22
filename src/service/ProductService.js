import axios from "axios";

const REST_API_BACE_URL = 'http://localhost:8080/test';

//test jira======================================================
const JIRA_MANAGER_URL = 'http://localhost:8099/manager';
export const managerName =() =>axios.get(JIRA_MANAGER_URL);

//==============================================================

const apiClient = axios.create({
    baseURL: REST_API_BACE_URL,
});

// Добавьте интерсептор для добавления токена в заголовки
apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Функции API
export const listProduct = () => apiClient.get('/'); // Получение всех продуктов

export const createProduct = (product) => apiClient.post('/', product); // Создание продукта

export const getProduct = (productId) => apiClient.get(`/${productId}`); // Получение продукта по ID

export const updateProduct = (productId, product) => apiClient.put(`/${productId}`, product); // Обновление продукта

export const deleteProduct = (productId) => apiClient.delete(`/${productId}`); // Удаление продукта