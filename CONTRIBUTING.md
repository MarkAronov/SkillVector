# Contributing to SkillVector

Thank you for your interest in contributing to SkillVector! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

Please be respectful and inclusive in all interactions. We're committed to providing a welcoming environment for all contributors.

Please review our [Code of Conduct](CODE_OF_CONDUCT.md) and follow it when contributing or communicating with project members.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Bun (package manager)
- Git

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MarkAronov/SkillVector.git
   cd SkillVector
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with required environment variables (ask maintainers for details)

4. **Run the project**
   ```bash
   # Start backend
   bun run dev
   
   # Start frontend (in another terminal)
   cd frontend
   bun run dev
   ```

## Development Workflow

### Branch Naming
- Feature: `feature/description`
- Bug fix: `fix/description`
- Improvement: `chore/description`

### Making Changes

1. Create a new branch from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following the code style guidelines

3. Test your changes thoroughly
   ```bash
   bun run test
   ```

4. Format and lint your code
   ```bash
   bun run format
   bun run lint
   ```

5. Commit with clear, descriptive messages
   ```bash
   git commit -m "feat: add description of your changes"
   ```

### Pre-commit and Pre-push Hooks

This project uses Husky to run automated checks before commits and pushes:

- **Pre-commit**: Runs linting, type checking, and secrets scanning with gitleaks
- **Pre-push**: Runs comprehensive checks including tests, builds, security audits, and vulnerability scanning with Nuclei

If you prefer not to install security tools locally (gitleaks, nuclei), you can skip them:
- Skip gitleaks: `SKIP_GITLEAKS=1 git commit`
- Skip Nuclei: `SKIP_NUCLEI=1 git push`

By default the pre-push hook runs quick checks plus builds locally (OpenAPI generation, linting, type checking, tests, and builds). To run the full set of long checks locally (security audits, Docker validation, and Nuclei scans), set the `FULL_PRE_PUSH` environment variable when pushing:

- Bash (macOS/Linux/WSL/Git Bash): `FULL_PRE_PUSH=1 git push`
- PowerShell: `$env:FULL_PRE_PUSH=1; git push`
- CMD: `set FULL_PRE_PUSH=1 && git push`

You can also control workflow runs using commit message markers or workflow_dispatch inputs. Add any of the following markers to a commit message to skip specific jobs or run partial/full workflows:

- `[skip-backend]` - skip backend CI
- `[skip-frontend]` - skip frontend CI and storybook
- `[skip-sdk]` - skip SDK CI
- `[skip-gitleaks]` - skip secrets scan in Security workflow
- `[skip-docker-scan]` - skip Docker scans in Security workflow
- `[skip-codeql]` - skip CodeQL analysis in Security workflow
- `[skip-dependency-review]` - skip Dependency Review (PRs)
- `[skip-nuclei]` - skip Nuclei scan in Security workflow
- `[skip-deploy]` - skip deploy steps
- `[run-partial]` - run only CI + Deploy; skips long security scans
- `[run-full]` - force full pipeline via workflow_dispatch

You can trigger these manually by adding the marker to your commit message, or use `workflow_dispatch` with the corresponding inputs in the Actions UI.

Dockerized security tools

- Hooks can fall back to Dockerized tools if native binaries are missing. To force Docker usage in hooks set:
  - `USE_DOCKER_TOOLS=1` (force Docker for all supported tools)
  - `DOCKER_GITLEAKS=1` (force Docker for gitleaks)
  - `DOCKER_NUCLEI=1` (force Docker for nuclei)

Examples:
- gitleaks (Docker): `docker run --rm -v "$(pwd)":/repo -w /repo ghcr.io/gitleaks/gitleaks:latest protect --staged --verbose --redact`
- nuclei (Docker): `docker run --rm -v "$(pwd)/security/nuclei-templates":/templates projectdiscovery/nuclei:latest -u http://host.docker.internal:3001 -t /templates -severity high,critical -stats`

Notes:
- On Windows/macOS use `host.docker.internal:3001` to let the container reach your local dev server; on Linux you can use `--network host` and `localhost`.
- Hooks prefer a native binary, then fallback to Docker when available (unless forced via `DOCKER_*` env vars).
- You can also run the provided npm scripts:
  - `npm run security:gitleaks:docker`
  - `npm run security:nuclei:docker`
  - `npm run security:trivy:docker`

Convenience npm scripts:
- `npm run push:full` → runs full pre-push locally (`FULL_PRE_PUSH=1 git push`)
- `npm run push:partial` → creates a temporary empty commit with `[run-partial]`, pushes, and then reverts the local commit (convenience helper)

CI/CD will still run the full checks on pull requests and merges to `main`.

### Pull Request Process

1. Push your branch to GitHub
   ```bash
   git push origin feature/your-feature-name
   ```

2. Open a Pull Request with a clear title and description
   - Reference any related issues
   - Describe the changes and why they're needed
   - Include screenshots or videos if applicable

3. Address any review comments promptly

4. Ensure all CI/CD checks pass

## Code Style Guidelines

### TypeScript
- Use explicit type annotations
- Follow existing naming conventions
- Keep functions focused and well-documented

### React Components
- Use functional components with hooks
- Keep components small and reusable
- Organize components by atomic design (atoms, molecules, organisms)

### General
- Use meaningful variable and function names
- Write comments for complex logic
- Keep lines under 100 characters when possible

## Project Structure

- `/src` - Backend source code
  - `/ai` - AI provider integrations
  - `/config` - Configuration files
  - `/parser` - Document parsing services
  - `/services` - Core services
  - `/vector` - Vector database services
- `/frontend` - React frontend application
  - `/src/components` - UI components (organized by atomic design)
  - `/src/hooks` - Custom React hooks
  - `/src/types` - TypeScript type definitions
- `/static-data` - Sample data for testing and development

## Testing

- Write tests for new features
- Ensure existing tests pass before submitting PR
- Aim for reasonable code coverage

## Documentation

- Update README.md if adding new features
- Document API endpoints clearly
- Include inline comments for complex logic
- Update environment variable documentation

## Issues and Bug Reports

- Check existing issues before creating new ones
- Provide clear reproduction steps for bugs
- Include environment information (OS, Node version, etc.)
- Use descriptive titles and detailed descriptions

If you discover a security vulnerability, please follow the guidelines in [SECURITY.md](SECURITY.md) and contact the maintainers privately by email as described in the security policy.

## Questions?

- Open a GitHub issue with your question
- Check existing issues for similar questions
- Be as specific as possible about your question

## License

By contributing to SkillVector, you agree that your contributions will be licensed under the same license as the project (MIT License).

