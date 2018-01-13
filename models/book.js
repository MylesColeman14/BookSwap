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
      allowNull: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isbn: {
      type: DataTypes.BIGINT(13),
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING(1028),
      allowNull: true,
    }

  }, {
    timestamps: false,
  });
  //  Book.associate = (models) => {
  //   Book.hasMany(models.Sale, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  //   //   Sale.belongsTo(models.User, {
  //   //   foreignKey: {
  //   //     allowNull: false
  //   //   }
  //   // })
  // }
  return Book;
}