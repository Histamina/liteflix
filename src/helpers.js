const addUserMovie = (data) => {
   localStorage.setItem("userMovie", JSON.stringify(data));
};

export default {
   addUserMovie
};