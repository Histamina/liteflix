const addMovies = (data) => {
   console.log('helpers', data)
   const _userMovies = JSON.parse(localStorage.getItem("userMovies"));

   console.log(_userMovies)

   if (_userMovies === null || _userMovies === undefined || !_userMovies) {
      localStorage.setItem("userMovies", JSON.stringify(data));
      // console.log('nueva pelicula')
   }
};

export default {
   addMovies
};