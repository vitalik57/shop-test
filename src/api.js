// import axios from "axios";

// const baseURL = "https://reactmaps-1556023014107-default-rtdb.firebaseio.com/";

// export const createNewAdv = async (category, newAdv) => {
//   try {
//     const response = await axios.post(baseURL + `advertisements/${category}.json`, newAdv);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const getProductByID = async (category, id) => {
//   console.log("id :>> ", id);
//   try {
//     const response = await axios.get(baseURL + `advertisements/${category}/${id}.json`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteAdv = async id => {
//   try {
//     await axios.delete(`https://project-8f663-default-rtdb.firebaseio.com/products/${id}.json`);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const createNewOrder = async order => {
//   try {
//     await axios.post(baseURL + "orders.json", order);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getAllAdvByCategory = async () => {
//   try {
//     const response = await axios.get(`https://project-8f663-default-rtdb.firebaseio.com/products.json`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
