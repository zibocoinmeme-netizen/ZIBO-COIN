# Security Policy

## Scope

This repository contains public ZIBO COIN project materials. Security-sensitive implementation details must not expose credentials, private keys, seed phrases, access tokens, or other secrets.

## Reporting a vulnerability

Do not publish private credentials or exploit details in a public issue. Report suspected security vulnerabilities privately through an official project contact once one has been published.

Until an official security contact is established, do not submit confidential information to this repository.

## Secret-handling rules

- Never commit `.env` files containing real secrets.
- Never commit private keys or seed phrases.
- Never place API keys or access tokens in frontend source code.
- Rotate credentials immediately if they are accidentally exposed.
- Use least-privilege credentials for automation and deployment.
- Review pull requests for accidental secret disclosure before merging.

## Authentication and wallets

A connected wallet is not automatically an authenticated application account. Any future authentication system must explicitly define identity, session/token lifetime, authorization, revocation, and recovery behavior.
