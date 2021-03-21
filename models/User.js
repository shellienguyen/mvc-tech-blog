const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require( 'bcrypt' );

class User extends Model {
   checkPassword(loginPW) {
      return bcrypt.compareSync(loginPW, this.password);
   };
};


User.init(
   {
      id: {
         type:DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      username: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            len: [5]
         }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [6]
         }
      }
   },
   {
      hooks: {
         // Setup beforeCreate lifecycle "hook" functionality
         async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
         },
         // Setup beforeUpdate lifecyle "hook" functionality
         async beforeUpdate(updateUserData) {
            updateUserData.password = await bcrypt.hash(updateUserData.password, 10);
            return updateUserData;
         }
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user'
   }
);


module.exports = User;