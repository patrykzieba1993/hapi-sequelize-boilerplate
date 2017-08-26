module.exports = (db) => {
  const getTestValue = () => db.models.Test.findAndCountAll();

  return { getTestValue };
};
