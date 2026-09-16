# Security Policy

## Supported Versions

Nimii Labs is currently maintained as a continuously developed application rather than through numbered public releases.

| Version / Branch | Supported |
| ---------------- | --------- |
| `main`           | :white_check_mark: |
| Older versions   | :x: |

Security fixes are applied to the current `main` branch and production deployment when appropriate.

## Reporting a Vulnerability

If you discover a potential security vulnerability in Nimii Labs, please report it privately rather than opening a public GitHub issue.

You can use GitHub's private vulnerability reporting feature available for this repository:

**Repository → Security → Advisories → Report a vulnerability**

When reporting a vulnerability, please include:

- A clear description of the issue
- Steps to reproduce the issue
- The affected component or file, if known
- The potential security impact
- Any relevant screenshots, logs, or proof-of-concept details

Please do not include passwords, API keys, access tokens, private keys, or other sensitive credentials in the report.

## What to Expect

We will review submitted security reports and investigate valid security issues.

If additional information is required, we may request clarification through the private report.

Please allow reasonable time for investigation and remediation before publicly disclosing a vulnerability.

## Scope

Security reports related to the following areas are relevant:

- Authentication and authorization
- API security
- User data and access control
- Firebase / Firestore security
- Server-side vulnerabilities
- Exposure of private credentials or secrets
- Injection and input-validation issues
- Dependency vulnerabilities that meaningfully affect the application
- Other vulnerabilities that could compromise the application or its users

## Out of Scope

The following generally do not constitute security vulnerabilities by themselves:

- Issues requiring physical access to a user's device
- Social engineering attacks
- Spam or denial-of-service testing against the production application
- Vulnerabilities in third-party services that cannot be controlled by Nimii Labs
- Public Firebase client configuration values that are intentionally exposed as part of the Firebase web application configuration

## Responsible Disclosure

Please report security issues privately and avoid publicly disclosing vulnerability details until the issue has been investigated and, where appropriate, remediated.
