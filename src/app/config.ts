// WARNING: This file contains intentionally vulnerable code for testing purposes
// DO NOT use in production!

export const config = {
  // Hardcoded API keys (intentionally vulnerable)
  apiKey: "AKIAIOSFODNN7EXAMPLE",
  secretKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",

  // Hardcoded database credentials (intentionally vulnerable)
  database: {
    url: "mongodb://admin:password123@localhost:27017/mydb",
    username: "admin",
    password: "password123",
  },

  // Hardcoded JWT secret (intentionally vulnerable)
  jwtSecret: "my-super-secret-jwt-key-that-should-not-be-here",

  // Debug mode enabled (intentionally vulnerable)
  debug: true,

  // Hardcoded GitHub token (intentionally vulnerable)
  githubToken: "ghp_123456789abcdefghijklmnopqrstuvwxyz",

  // Hardcoded AWS credentials (intentionally vulnerable)
  aws: {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    region: "us-east-1",
  },
};
