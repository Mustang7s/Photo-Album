const task_tagDb = require('../../../../data-access/task_tagDb');
const task_tagSchema = require('../../../../validation/schema/task_tag');
const createValidation = require('../../../../validation')(task_tagSchema.createSchema);
const updateValidation = require('../../../../validation')(task_tagSchema.updateSchema);
const filterValidation = require('../../../../validation')(task_tagSchema.filterValidationSchema);
const task_tagController = require('./task_tag');

// use-cases imports with dependency injection
const addTask_tagUsecase = require('../../../../use-case/task_tag/addTask_tag')({
  task_tagDb,
  createValidation 
});
const findAllTask_tagUsecase = require('../../../../use-case/task_tag/findAllTask_tag')({
  task_tagDb,
  filterValidation
});
const getTask_tagCountUsecase = require('../../../../use-case/task_tag/getTask_tagCount')({
  task_tagDb,
  filterValidation
});
const getTask_tagUsecase = require('../../../../use-case/task_tag/getTask_tag')({
  task_tagDb,
  filterValidation
});
const updateTask_tagUsecase = require('../../../../use-case/task_tag/updateTask_tag')({
  task_tagDb,
  updateValidation 
});
const partialUpdateTask_tagUsecase = require('../../../../use-case/task_tag/partialUpdateTask_tag')({
  task_tagDb,
  updateValidation
});
const softDeleteTask_tagUsecase = require('../../../../use-case/task_tag/softDeleteTask_tag')({ task_tagDb });
const softDeleteManyTask_tagUsecase = require('../../../../use-case/task_tag/softDeleteManyTask_tag')({ task_tagDb });
const bulkInsertTask_tagUsecase = require('../../../../use-case/task_tag/bulkInsertTask_tag')({ task_tagDb });
const bulkUpdateTask_tagUsecase = require('../../../../use-case/task_tag/bulkUpdateTask_tag')({ task_tagDb });
const deleteTask_tagUsecase = require('../../../../use-case/task_tag/deleteTask_tag')({ task_tagDb });
const deleteManyTask_tagUsecase = require('../../../../use-case/task_tag/deleteManyTask_tag')({ task_tagDb });

// controller methods mapping
const addTask_tag = task_tagController.addTask_tag(addTask_tagUsecase);
const findAllTask_tag = task_tagController.findAllTask_tag(findAllTask_tagUsecase);
const getTask_tagCount = task_tagController.getTask_tagCount(getTask_tagCountUsecase);
const getTask_tagById = task_tagController.getTask_tag(getTask_tagUsecase);
const updateTask_tag = task_tagController.updateTask_tag(updateTask_tagUsecase);
const partialUpdateTask_tag = task_tagController.partialUpdateTask_tag(partialUpdateTask_tagUsecase);
const softDeleteTask_tag = task_tagController.softDeleteTask_tag(softDeleteTask_tagUsecase);
const softDeleteManyTask_tag = task_tagController.softDeleteManyTask_tag(softDeleteManyTask_tagUsecase);
const bulkInsertTask_tag = task_tagController.bulkInsertTask_tag(bulkInsertTask_tagUsecase);
const bulkUpdateTask_tag = task_tagController.bulkUpdateTask_tag(bulkUpdateTask_tagUsecase);
const deleteTask_tag = task_tagController.deleteTask_tag(deleteTask_tagUsecase);
const deleteManyTask_tag = task_tagController.deleteManyTask_tag(deleteManyTask_tagUsecase);

module.exports = {
  addTask_tag,
  findAllTask_tag,
  getTask_tagCount,
  getTask_tagById,
  updateTask_tag,
  partialUpdateTask_tag,
  softDeleteTask_tag,
  softDeleteManyTask_tag,
  bulkInsertTask_tag,
  bulkUpdateTask_tag,
  deleteTask_tag,
  deleteManyTask_tag,
};