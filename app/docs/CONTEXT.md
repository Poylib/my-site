# Personal Blog Development Specification

## Overview

This document outlines the specifications for developing a personal blog. The blog will be managed by a single author, so profile-related features are not required. The blog's concept is centered around **photography**, and the primary content will focus on topics related to photography.

## Tech Stack

- **Framework:** React (with React Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (latest version)
- **Content Format:** Markdown

## Features

### 1. Multilingual Support

- Default language: **Korean**
- Additional languages: **English, Japanese**
- Language selection should be available for users.

### 2. Blog Posts

- Posts will be written in **Markdown format**.

### 3. Navigation & Pages

- **Introduction Page**: Briefly introduce the blog and its purpose.
- **Post List Page**: Display a list of all available posts.
- **Contact Page**: Provide a way for visitors to contact the author.

### 4. SEO Optimization

- Ensure **SEO-friendly** site structure.
- Implement **meta tags, Open Graph, and structured data** for better search engine visibility.
- Optimize page performance and loading speed.

## Development Considerations

- Follow **best practices** for modern front-end development.
- Ensure smooth **user experience** with clean UI/UX.
- Maintain **accessibility standards** to support various users.

## Future Enhancements

- Support for **categories and tags** for posts.
- Implement **dark mode** for better readability.
- Add **search functionality** to help users find content more easily.

## Database Schema

### Users Table

- **id**: INT, Primary Key, Auto Increment
- **username**: VARCHAR(50), Unique
- **email**: VARCHAR(100), Unique
- **password**: VARCHAR(255)
- **created_at**: TIMESTAMP, Default CURRENT_TIMESTAMP

### Posts Table

- **id**: INT, Primary Key, Auto Increment
- **title**: VARCHAR(255)
- **content**: TEXT
- **author_id**: INT, Foreign Key (Users)
- **created_at**: TIMESTAMP, Default CURRENT_TIMESTAMP
- **updated_at**: TIMESTAMP, Default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

### Comments Table

- **id**: INT, Primary Key, Auto Increment
- **post_id**: INT, Foreign Key (Posts)
- **author_name**: VARCHAR(100)
- **content**: TEXT
- **created_at**: TIMESTAMP, Default CURRENT_TIMESTAMP

### Tags Table

- **id**: INT, Primary Key, Auto Increment
- **name**: VARCHAR(50), Unique

### PostTags Table (Many-to-Many Relationship)

- **post_id**: INT, Foreign Key (Posts)
- **tag_id**: INT, Foreign Key (Tags)

---

This document serves as a base guideline for developing the personal blog. Additional features and refinements can be made during the development process.
