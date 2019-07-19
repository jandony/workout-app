module.exports = function(sequelize, DataTypes) {
  var Athlete = sequelize.define("Athlete", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,250]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,250]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,250],
        isEmail: true,
        unique: true
      }
    },
    gym: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    years: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Athlete_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }
  });

  Athlete.associate = function(models) {
    // Associating Athlete with Weightss
    // When an Athlete is deleted, also delete any associated Weights
    Athlete.hasMany(models.Weights, {
      onDelete: "cascade"
    });
  };

  return Athlete;
};
