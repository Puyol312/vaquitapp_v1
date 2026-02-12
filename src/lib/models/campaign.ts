import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";

class Campaign extends Model { };

Campaign.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    currentAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
      }
    }
  },
  {
    sequelize,
    modelName: "campaign"
  }
);

export { Campaign }