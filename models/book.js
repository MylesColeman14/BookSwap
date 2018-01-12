module.exports = function(sequelize, DataTypes) {
    const Book = sequelize.define("Book", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isbn: {
            type: DataTypes.BIGINT(13),
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING(1028),
            allowNull: true,
        }
  
    });
          return Book;
}