# Contact Manager

A simple contact manager application built with React, Next.js, and TypeScript, using a JSON server.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Introduction

The Contact Manager is a web application that allows users to manage their contacts. It provides a user-friendly interface to add, view, update, and delete contact information.

### Features

- **Contact List:** View a list of all contacts.
- **Add Contact:** Add a new contact with a name, email, and phone number.
- **Edit Contact:** Modify existing contact information.
- **Delete Contact:** Remove a contact from the list.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- Knowledge of React, Next.js, TypeScript, and basic JSON server setup.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/contact-manager.git
2. Navigate to the project directory::

   ```bash
   cd contact-manager
3. Install dependencies:

   ```bash
   npm install
4. Start the JSON server:

   ```bash
   npm run json-server
5. Start the development server:

   ```bash
   npm run dev
5. Open your browser and visit http://localhost:3000 to access the Contact Manager application.

## Project Structure

**components/**: React components used throughout the application.

**api/**: API service for interacting with the JSON server.

**data/contacts.json**: JSON data file used by the JSON server to store contact information.

**types/**: Interfaces used throughout the application.

## API Endpoints

- **getAllContacts /contacts**: Get a list of all contacts.

- **addContact /contacts**: Add a new contact.

- **editContact /contacts/:id**: Update an existing contact.

- **deleteContact /contacts/:id**: Delete a contact.