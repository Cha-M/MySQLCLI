const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie } = require("./movie/movieFunctions");

const app = async (yargsObj) => {
    try {
        await sequelize.sync();
        if (yargsObj.add) {
            await addMovie({title: yargsObj.title, actor: yargsObj.actor});
            console.log(await listMovies());
        }
    } catch (error) {
        console.log(error);
    }

};

// console.log(sequelize);
app(yargs.argv);