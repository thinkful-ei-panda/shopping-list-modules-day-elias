const validateName = function(name) {
  if (name.length === 0){
    throw new TypeError('Name must not be blank');
  }
};

const create = function(name) {
  return {
    id: cuid(),
    name,
    checked: false
  };
};

export default {
  create,
  validateName
};