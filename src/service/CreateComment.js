// import axios from "axios";
// import redirectUserToLogin from './ProductService';



// const USER_API_BASE_URLCOMMENT = 'http://localhost:8080/comment';
// const newApiClient  = axios.create({
//     baseURL: USER_API_BASE_URLCOMMENT,
// });




// // Добавьте интерсептор для добавления токена в заголовки
// newApiClient.interceptors.request.use(config => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//     }else{
//         redirectUserToLogin();//перенаправление на странцу логина
//     }
//     return config;
// }, error => {
//     return Promise.reject(error);
// });
// // Обработка ошибок (например, 401 Unauthorized)
// newApiClient.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response && error.response.status === 401) {
//         redirectUserToLogin();
//       }
//       return Promise.reject(error);
//     }
//   );

// export const sendComment = (comment) => newApiClient.post('/',  {comment});  // Создание коментария 

// export const listComment = () => newApiClient.get('/'); // Получение всех коментариев


// export const deleteComment = (commentId) => newApiClient.delete(`/${commentId}`);  // удаление коментария


