const Movie = require("./models/Movie");

const resolvers = {
  Query: {
    getAllMovies: async () => {
      return await Movie.find();
    },
    getMovieById: async (_, { id }) => {
      return await Movie.findById(id);
    },
  },

  Mutation: {
    addMovie: async (_, { name, director_name, production_house, release_date, rating }) => {
      const newMovie = new Movie({
        name,
        director_name,
        production_house,
        release_date,
        rating,
      });
      await newMovie.save();
      return newMovie;
    },

    updateMovie: async (_, { id, name, director_name, production_house, release_date, rating }) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
        id,
        { name, director_name, production_house, release_date, rating },
        { new: true }
        );
      
        if (!updatedMovie) {
        throw new Error("Movie not found");
        }
      
        return updatedMovie;
    } catch (error) {
        throw new Error(`Failed to update movie: ${error.message}`);
    }
    },
      

    deleteMovie: async (_, { id }) => {
      const deletedMovie = await Movie.findByIdAndDelete(id);
      if (!deletedMovie) throw new Error("Movie not found");
      return `Movie with ID ${id} deleted successfully.`;
    },
  },
};

module.exports = resolvers;
