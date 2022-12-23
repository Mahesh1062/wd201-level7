/* eslint-disable require-jsdoc */
'use strict';
const {
  Model, Op
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
<<<<<<< HEAD
      // define association here
=======
>>>>>>> f1cfc91 (updated)
    }

    static addTodo({title, dueDate}) {
      return this.create({title: title, dueDate: dueDate, completed: false});
    }

    static getTodos(){
      return this.findAll();
    }

    static async overdue() {
      return await Todo.findAll({
        where: {
          dueDate: { [Op.lt]: new Date().toLocaleDateString("en-CA") },
<<<<<<< HEAD
          completed: false,
=======
>>>>>>> f1cfc91 (updated)
        },
      });
    }

    static async dueToday() {
<<<<<<< HEAD
      // FILL IN HERE TO RETURN ITEMS DUE tODAY
      return await Todo.findAll({
        where: {
          dueDate: { [Op.eq]: new Date().toLocaleDateString("en-CA") },
          completed: false,
=======
      return await Todo.findAll({
        where: {
          dueDate: { [Op.eq]: new Date().toLocaleDateString("en-CA") },
>>>>>>> f1cfc91 (updated)
        },
      });
    }

    static async dueLater() {
<<<<<<< HEAD
      // FILL IN HERE TO RETURN ITEMS DUE LATER
      return await Todo.findAll({
        where: {
          dueDate: { [Op.gt]: new Date().toLocaleDateString("en-CA") },
          completed: false,
=======
      return await Todo.findAll({
        where: {
          dueDate: { [Op.gt]: new Date().toLocaleDateString("en-CA") },
>>>>>>> f1cfc91 (updated)
        },
      });
    }

<<<<<<< HEAD
    static async remove(id) {
      return this.destroy({
        where: {
          id,
        }
      })
    }

    static async completedItems(){
      return this.findAll({
        where: {
          completed: true,
        }
      })
    }
    setCompletionStatus(receiver) {
      return this.update({ completed: receiver });
    }
=======

>>>>>>> f1cfc91 (updated)

    markAsCompleted() {
      return this.update({completed: true});
    }
<<<<<<< HEAD
    
=======
>>>>>>> f1cfc91 (updated)
  }
  Todo.init({
    title: DataTypes.STRING,
    dueDate: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};