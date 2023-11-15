import CustomAxios from "../FetchApi";

// ----------------------------EXAMPLE---------------------------
// export const getUserById = async (id) => {
//     const response = await CustomAxios().get('us/api/get-user-by-id/' + id);
//     return response;
// }

// //Them hinh anh
// export const addPicture = async (url, idSubProduct, idReview) => {
//     const response = await CustomAxios().post('/pictures/api/add-picture', { url, idSubProduct, idReview });
//     return response;
// }

// //Upload hinh anh
// export const uploadPicture = async (picture) => {
//     const response = await CustomAxios('multipart/form-data').post('/pictures/api/upload-picture', picture);
//     return response;
// }
// ----------------------------EXAMPLE---------------------------

export const login = async (username, email, password, tokenFcm) => {
    const body = {
        username: username,
        email: email,
        password: password,
        fcmToken: tokenFcm
    }
    const response = await CustomAxios().post('users/api/login', body);
    return response;
}


