const taskDb = require('../../../../data-access/taskDb');
const task_tagDb = require('../../../../data-access/task_tagDb');
const taskSchema = require('../../../../validation/schema/task');
const createValidation = require('../../../../validation')(taskSchema.createSchema);
const updateValidation = require('../../../../validation')(taskSchema.updateSchema);
const filterValidation = require('../../../../validation')(taskSchema.filterValidationSchema);
const taskController = require('./task');

// use-cases imports with dependency injection
const addTaskUsecase = require('../../../../use-case/task/addTask')({
  taskDb,
  createValidation 
});
const findAllTaskUsecase = require('../../../../use-case/task/findAllTask')({
  taskDb,
  filterValidation
});
const getTaskCountUsecase = require('../../../../use-case/task/getTaskCount')({
  taskDb,
  filterValidation
});
const getTaskUsecase = require('../../../../use-case/task/getTask')({
  taskDb,
  filterValidation
});
const updateTaskUsecase = require('../../../../use-case/task/updateTask')({
  taskDb,
  updateValidation 
});
const partialUpdateTaskUsecase = require('../../../../use-case/task/partialUpdateTask')({
  taskDb,
  updateValidation
});
const softDeleteTaskUsecase = require('../../../../use-case/task/softDeleteTask')({
  taskDb,
  task_tagDb
});
const softDeleteManyTaskUsecase = require('../../../../use-case/task/softDeleteManyTask')({
  taskDb,
  task_tagDb
});
const bulkInsertTaskUsecase = require('../../../../use-case/task/bulkInsertTask')({ taskDb });
const bulkUpdateTaskUsecase = require('../../../../use-case/task/bulkUpdateTask')({ taskDb });
const deleteTaskUsecase = require('../../../../use-case/task/deleteTask')({
  taskDb,
  task_tagDb
});
const deleteManyTaskUsecase = require('../../../../use-case/task/deleteManyTask')({
  taskDb,
  task_tagDb
});

// controller methods mapping
const addTask = taskController.addTask(addTaskUsecase);
const findAllTask = taskController.findAllTask(findAllTaskUsecase);
const getTaskCount = taskController.getTaskCount(getTaskCountUsecase);
const getTaskById = taskController.getTask(getTaskUsecase);
const updateTask = taskController.updateTask(updateTaskUsecase);
const partialUpdateTask = taskController.partialUpdateTask(partialUpdateTaskUsecase);
const softDeleteTask = taskController.softDeleteTask(softDeleteTaskUsecase);
const softDeleteManyTask = taskController.softDeleteManyTask(softDeleteManyTaskUsecase);
const bulkInsertTask = taskController.bulkInsertTask(bulkInsertTaskUsecase);
const bulkUpdateTask = taskController.bulkUpdateTask(bulkUpdateTaskUsecase);
const deleteTask = taskController.deleteTask(deleteTaskUsecase);
const deleteManyTask = taskController.deleteManyTask(deleteManyTaskUsecase);

module.exports = {
  addTask,
  findAllTask,
  getTaskCount,
  getTaskById,
  updateTask,
  partialUpdateTask,
  softDeleteTask,
  softDeleteManyTask,
  bulkInsertTask,
  bulkUpdateTask,
  deleteTask,
  deleteManyTask,
};