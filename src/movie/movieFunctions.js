const Movie = require("./movieTable");

exports.addMovie = async (movieObj, title, actor) => {
    try {
        // await Movie.create({title: title, actor: actor});
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async() => {
    try {
        if (filterObj) {
            return await Movie.findOne({where: filterObj});
        } else {
            return await Movie.findAll();
        }
    } catch (error) {
        console.log(error);
    }

};