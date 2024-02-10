/*
// Задание #1
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;
// const createNewPost = () => {
//   isLoading = true;
//   fetch(POSTS_URL, {
//     method: "POST",
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       console.log("result", result);
//     })
//     .catch((error) => {
//       console.log("error", error);
//     })
//     .finally(() => {
//       isLoading = false;
//     });
// };

const createNewPost = async () => {
  isLoading = true;
  try {
    const response = await fetch(POSTS_URL, {
      method: "POST",
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("error", error);
  } finally {
    isLoading = false;
  }
};

createNewPost();
*/

// Задание #2
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
// const getTodosByIds = (ids) => {
//   const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//   Promise.all(requests)
//     .then((responses) => {
//       const dataResults = responses.map((data) => data.json());
//       return Promise.all(dataResults);
//     })
//     .then((allTasks) => {
//       console.log(allTasks);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

const getTodosByIdsAsync = async (ids) => {
  try {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    const responses = await Promise.all(requests);
    const dataResults = await responses.map((data) => data.json());
    const allTasks = await Promise.all(dataResults);
    console.log(allTasks);
  } catch (error) {
    console.log(error);
  }
};

// getTodosByIds([43, 21, 55, 100, 10]);
getTodosByIdsAsync([43, 21, 55, 100, 10]);
