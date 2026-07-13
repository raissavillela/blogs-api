module.exports = (sequelize, DataTypes) => sequelize.define(
    'Category',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'categories', 
      timestamps: false,
      underscored: true,
    },
  );
  