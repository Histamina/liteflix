const addUserMovie = (data) => {
   localStorage.setItem("userMovie", JSON.stringify(data));
};

export const helpers = {
   addUserMovie
};