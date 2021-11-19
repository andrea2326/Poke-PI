const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {
      type: DataTypes.INTERGER
    },
    strength: {
      type: DataTypes.INTERGER
    },
    defending: {
      type: DataTypes.INTERGER
    },
    speed: {
      type: DataTypes.INTERGER
    },
    height: {
      type: DataTypes.INTERGER
    },
    weight: {
      type: DataTypes.INTERGER
    }
  });
};
