# MCP Weather Server (Node.js)

This repository contains a fully-featured MCP (Model Context Protocol) server built with Node.js and TypeScript that exposes weather-related tools using the US National Weather Service API.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Setup](#environment-setup)
- [Running the Server](#running-the-server)
- [Usage](#usage)
- [Development & Testing](#development--testing)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This MCP server provides two main tools:

- `get_alerts` - Retrieve current weather alerts for any US state (by two-letter state code)
- `get_forecast` - Get detailed weather forecast by geographic coordinates

It follows the [Model Context Protocol](https://modelcontextprotocol.io) standards to be compatible with clients such as Claude for Desktop and allows seamless LLM-driven interactions.

---

## Features

- Typed requests and responses using `zod` schemas for argument validation
- Asynchronous API requests with error handling
- Modular tool definitions for scalable code architecture
- Environment variable configuration for flexible deployments
- Integration-ready with popular MCP client tools and MCP Inspector for debugging

---

## Tech Stack

- Node.js (v18+)
- TypeScript
- Zod for schema validations
- `httpx` or `node-fetch` for HTTP requests
- dotenv for environment configuration
- MCP SDK (JavaScript/TypeScript)
- Optional: ts-node or build with `tsc`

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
