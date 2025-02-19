import axios from "axios";

// Общая функция для создания клиентов API
const createApiClient = (baseURL) => {
    const client = axios.create({ baseURL });
  
    client.interceptors.request.use(config => {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      } else {
        redirectUserToLogin();//перенаправление на странцу логина
      }
      return config;
    }, error => Promise.reject(error));
  
    return client;
  };

const redirectUserToLogin = () =>{
    localStorage.removeItem("authToken"); // Удаляем токен из localStorage
    window.location.href = "/login"; //перенаправление на страницу логина
}


// Обработка ошибок (например, 401 Unauthorized)
// createApiClient.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response && error.response.status === 401) {
//         redirectUserToLogin();
//       }
//       return Promise.reject(error);
//     }
//   );

// Клиенты для разных API
export const productApiClient = createApiClient('http://localhost:8080/test');
export const commentApiClient = createApiClient('http://localhost:8080/comment');
export const jiraManagerApiClient = createApiClient('http://localhost:8099/manager');
export const userApiClient = createApiClient('http://localhost:8080/reg'); // Добавили клиент для регистрации

// Функции для работы с продуктами
export const listProduct = () => productApiClient.get('/');
export const createProduct = (product) => productApiClient.post('/', product);
export const getProduct = (productId) => productApiClient.get(`/${productId}`);
export const updateProduct = (productId, product) => productApiClient.put(`/${productId}`, product);
export const deleteProduct = (productId) => productApiClient.delete(`/${productId}`);

// Функции для работы с комментариями
export const sendComment = (comment) => commentApiClient.post('/', { comment });
export const listComment = () => commentApiClient.get('/');
export const deleteComment = (commentId) => commentApiClient.delete(`/${commentId}`);

// Функция для работы с JIRA
export const getManagerName = () => jiraManagerApiClient.get('/');
export const createUser = (user) => userApiClient.post('/', user);

export default redirectUserToLogin;