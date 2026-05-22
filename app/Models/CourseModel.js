import { DataTypes } from "sequelize";
import sequelize from "../../database/sequelize.js";

const CourseModel = sequelize.define("courses", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING
    },

    workload: {
        type: DataTypes.INTEGER
    }

}, {
    timestamps: false
});

export default CourseModel;