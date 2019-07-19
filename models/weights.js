module.exports = function(sequelize, DataTypes) {
  var Weights = sequelize.define("Weights", {
    date: {
      type: DataTypes.DATEONLY,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,10]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,10]
      }
    },
    rx: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    pr: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    wod_category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    wod_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    wod_intensity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    scaled: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    rep_scheme: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    results: {
      type: DataTypes.TEXT,
      validate: {
        len: [1]
      }
    }
  });

  Weights.associate = function(models) {
    // We're saying that a Weights should belong to an Athlete
    // A Weights can't be created without an Athlete due to the foreign key constraint
    Weights.belongsTo(models.Athlete, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Weights;
};
