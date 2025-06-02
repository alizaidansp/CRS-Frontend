#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Ensure we're in the project root
const projectRoot = path.resolve(__dirname, '..');
process.chdir(projectRoot);

// Function to run commands and handle errors
function runCommand(command) {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute ${command}`);
    process.exit(1);
  }
}

// Function to make hooks executable
function makeHooksExecutable() {
  const huskyDir = path.join(projectRoot, '.husky');
  if (fs.existsSync(huskyDir)) {
    const hooks = fs.readdirSync(huskyDir)
      .filter(file => !file.startsWith('.') && !file.startsWith('_'));
    
    hooks.forEach(hook => {
      const hookPath = path.join(huskyDir, hook);
      try {
        fs.chmodSync(hookPath, '755');
        console.log(`✅ Made ${hook} executable`);
      } catch (error) {
        console.error(`❌ Failed to make ${hook} executable: ${error.message}`);
      }
    });
  }
}

// Main setup function
function setupHusky() {
  console.log('🚀 Setting up Husky...');

  // Install Husky if not already installed
  if (!fs.existsSync(path.join(projectRoot, 'node_modules', 'husky'))) {
    console.log('📦 Installing Husky...');
    runCommand('npm install husky --save-dev');
  }

  // Initialize Husky
  console.log('⚙️  Initializing Husky...');
  runCommand('npx husky install');

  // Make hooks executable
  console.log('🔧 Making hooks executable...');
  makeHooksExecutable();

  // Set Git hooks path
  console.log('🔗 Setting Git hooks path...');
  runCommand('git config core.hooksPath .husky');

  console.log('\n✅ Husky setup completed successfully!');
  console.log('\nAvailable hooks:');
  console.log('  • pre-commit  - Runs linting, formatting, and tests');
  console.log('  • commit-msg  - Validates commit message format');
  console.log('  • pre-push    - Validates branch naming convention');
}

setupHusky(); 