# ZIBO COIN — Project Architecture

## Purpose

This document defines the initial technical structure for ZIBO COIN ($ZIBO). It intentionally avoids publishing token parameters that have not been formally finalized.

## Repository layers

```text
ZIBO-COIN/
├── docs/                 # Technical and project documentation
├── src/                  # Application source code (future)
├── public/               # Public assets (future)
├── tests/                # Automated tests (future)
├── README.md             # Public project overview
└── SECURITY.md           # Security policy
```

## Planned application components

### Frontend

Responsible for the public project interface, documentation pages, wallet connection UI, and community-facing features.

### Backend/API

Only required if the project introduces server-side functionality. It will own validation, privileged operations, rate limiting, and integration with external services.

### Blockchain integration

Blockchain reads and transaction preparation should be separated from presentation logic. Contract addresses, network identifiers, ABI files, and deployment metadata must only be added after they are officially finalized.

### Authentication

There is currently no application authentication system in the repository. If accounts are introduced later, credentials must be handled server-side and secrets must never be committed to Git.

## Security principles

- Never commit private keys, seed phrases, passwords, API secrets, or access tokens.
- Use environment variables or a managed secret store for runtime secrets.
- Treat wallet connection as distinct from application authentication.
- Validate all server-side authorization decisions independently of the frontend.
- Keep privileged blockchain operations isolated from public client code.

## Current status

This is the foundation document only. No authentication, backend, smart-contract source, or wallet-management implementation is claimed to exist until those components are added to the repository.
