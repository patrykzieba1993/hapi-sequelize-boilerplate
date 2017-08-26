module.exports = (testRepository) => {
  const getTest = (request, reply) => reply(testRepository.getTestValue());

  return { getTest };
};
