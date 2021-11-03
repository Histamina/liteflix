const addMovies = (data) => {
   localStorage.setItem("userMovies", JSON.stringify(data));
};

export default {
   addMovies
};