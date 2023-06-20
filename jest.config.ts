module.exports = {
  roots: ["<rootDir>/src"],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    "**/src/test/**/*.+(ts|js)",
    "**/?(*.)+(spec|test).+(ts|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  "moduleFileExtensions": [
    "ts",
    "js",
    "node"
  ]
};
