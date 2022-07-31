module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("book", {
    title: {
      type: Sequelize.STRING,
    },
    author: {
      type: Sequelize.STRING,
    },
    available: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Book;
};
