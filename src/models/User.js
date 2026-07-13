module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      'User',
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        displayName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        tableName: 'users',
        timestamps: false,
        underscored: true,
      }
    );
  
    User.associate = (models) => {
      User.hasMany(models.BlogPost, {
        foreignKey: 'userId',
        as: 'blogPosts',
      });
    };
  
    return User;
  };