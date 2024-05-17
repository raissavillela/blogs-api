module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      {
        postId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          references: {
            model: 'BlogPost',
            key: 'id',
          },
          field: 'post_id',
        },
        categoryId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          references: {
            model: 'Category',
            key: 'id',
          },
          field: 'category_id',
        },
      },
      {
        tableName: 'posts_categories',
        timestamps: false,
        underscored: true,
      }
    );

    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'categories',
      });

      models.Category.belongsToMany(models.BlogPost, {
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
        as: 'blogPosts',
      });
    };

    return PostCategory;
  };
