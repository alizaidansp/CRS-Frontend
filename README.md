# CRSFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Development Setup

### Git Hooks Setup (Husky)
This project uses Husky for Git hooks. To set up Husky:

1. Clone the repo and Run the setup script:
```bash
npm run setup
```

This will:
- Install Husky if not already installed
- Initialize Husky
- Set up the Git hooks path
- Configure all necessary hooks

## Git Workflow

### Git Hooks
This project enforces code quality and consistency through Git hooks:

#### 1. Commit Message Convention (`commit-msg`)
Enforces conventional commit message format:
```
type(scope): description
```
Valid types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks

Example: `feat(auth): add login functionality`

#### 2. Pre-commit Checks (`pre-commit`)
Runs before each commit to ensure code quality:
- Checks for debugger statements
- Checks for console.log statements
- Runs code formatting (Prettier)
- Runs Angular linting
- Runs Jest tests
- Checks for large files (>1MB)
- Validates package-lock.json changes

#### 3. Branch Naming Convention (`pre-push`)
Enforces branch naming when pushing:
- Format: `type/description`
- Valid types:
  - `feature/` - for new features
  - `bugfix/` - for bug fixes
  - `hotfix/` - for urgent fixes
  - `release/` - for release branches
- Protected branches (`main`, `develop`) are exempt
- Description should be lowercase, can contain numbers and hyphens

Examples:
- `feature/user-authentication`
- `bugfix/login-error`
- `hotfix/security-patch`
- `release/v1.2.0`

### Troubleshooting
If you encounter issues with Git hooks:
1. Make sure you're in the project root directory
2. Run `npm run setup` to reinitialize Husky
3. If issues persist, check that the hooks are executable:
   ```bash
   chmod +x .husky/*
   ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
