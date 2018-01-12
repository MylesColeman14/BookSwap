module.exports = function(sequelize, DataTypes) {
  const Sale = sequelize.define("Sale", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    sell_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // user_id: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   // references: {
    //   //   // This is a reference to another model
    //   //   model: User,
    //   //   // This is the column name of the referenced model
    //   //   key: 'id',
    //   // }
    // },
    // book_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   // references: {
    //   //   // This is a reference to another model
    //   //   model: Book,
    //   //   // This is the column name of the referenced model
    //   //   key: 'id',
    //   // }
    // },
    asking_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    sold: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false

    }
  }, {
    timestamps: false,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.Book, {
      foreignKey: {
        allowNull: false
      }
    });
    //   Sale.belongsTo(models.User, {
    //   foreignKey: {
    //     allowNull: false
    //   }
    // })
  }
  // db.sale.belongsTo(db.book)
// db.sale.belongsTo(db.user) 
  return Sale;
}
