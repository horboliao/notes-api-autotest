export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './',
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  coverageDirectory: './coverage',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
