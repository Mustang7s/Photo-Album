/**
 *findAllTag.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Tag(s). {status, message, data}
 */
const findAllTag = ({
  tagDb,filterValidation 
}) => async (params,req,res) => {
  let {
    options, query, isCountOnly 
  } = params;
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  if (isCountOnly){
    let totalRecords = await tagDb.count(query);
    return response.success({ data: { totalRecords } });  
  }
  else {
    let foundTag = await tagDb.paginate(query,options);
    if (!foundTag){
      return response.recordNotFound();
    }
    return response.success({ data:foundTag });
  }
};
module.exports = findAllTag;