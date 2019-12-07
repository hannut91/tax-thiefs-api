module.exports = {
  verbose: true,
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
  ],
  // transformIgnorePatterns: [
  //   '^.+\\.[t|j]sx?$'
  // ]
};
