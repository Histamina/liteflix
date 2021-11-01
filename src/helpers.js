const addMovies = (data) => {
   console.log(data)
   const _userMovies = JSON.parse(localStorage.getItem("userMovies"));

   if (_userMovies === null || _userMovies === undefined || !_userMovies) {
      localStorage.setItem("userMovies", JSON.stringify(data));
      console.log('nueva pelicula')
   } else {
      const newData = data;

      const mergeNewValues = Object.assign(_userMovies, newData);

      localStorage.setItem("userMovies", JSON.stringify(mergeNewValues));
   }
};

export default {
   addMovies
};