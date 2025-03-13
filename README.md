# Modern Web Application with Next.js

A professional web application built with Next.js 14, React, Tailwind CSS, and Shadcn UI, following industry best practices and modern development standards.

## 🚀 Quick Start

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Components:** Shadcn UI
- **Code Quality:** ESLint, Prettier
- **Package Manager:** npm

## 📁 Project Structure

├── app/ # Next.js app directory
│ ├── (routes)/ # App routes
│ ├── layout.tsx # Root layout
│ └── page.tsx # Home page
├── components/ # React components
│ ├── ui/ # Shadcn UI components
│ └── [feature]/ # Feature-specific components
├── lib/ # Utility functions and configurations
├── styles/ # Global styles and Tailwind config
└── public/ # Static assets

## 🎯 Key Features

- **Landing Page** (`/`) - Main entry point
- **About Us** (`/about`) - Company information
- **Previous Work** (`/previous-work`) - Portfolio showcase

## 💻 Development Guidelines

### Adding New Shadcn UI Components

```bash
npx shadcn@latest add <component-name>
```

### Code Style

- Use functional components with TypeScript
- Follow the file naming convention: `PascalCase` for components
- Implement proper error boundaries and loading states
- Maintain consistent commenting and documentation

### Best Practices

- ♻️ Follow DRY (Don't Repeat Yourself) principles
- 🎨 Maintain component modularity
- 🔍 Implement proper error handling
- ⚡ Optimize for performance
- ♿ Ensure accessibility (WCAG compliance)
- 🔒 Follow security best practices

## 🔄 Workflow

1. Create feature branch from `main`
2. Implement changes
3. Run tests and linting
4. Create PR for review
5. Merge after approval

## 📚 Available Scripts

```bash
npm run dev          # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
npm run format      # Run Prettier
```

## 🔧 Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration
- `components.json` - Shadcn UI configuration
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint rules
- `.prettierrc` - Prettier rules

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🎨 Theme Customization

Modify theme in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other theme variables ... */
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

[Your License] - See LICENSE file for details

## 🆘 Support

For questions or issues:

1. Check existing issues
2. Create a new issue
3. Contact [your-contact-info]

## 🔄 Getting Back Into It

Quick steps to refresh your memory:

1. **Review Key Files:**

   - `app/page.tsx` - Main landing page
   - `app/layout.tsx` - Root layout with shared components
   - `components/` - Custom components

2. **Key Commands to Remember:**

   ```bash
   npm run dev     # Start local development
   npm run build   # Before deploying
   ```

3. **Common Development Tasks:**
   - Adding new Shadcn component: `npx shadcn@latest add button`
   - Creating new page: Add new directory in `app/` with `page.tsx`
   - Styling: Use Tailwind classes or modify `globals.css`

## 📋 Project Requirements & Development Philosophy

### Project Overview

We are building a website with the following core pages:

1. Landing Page (root path `/`)
2. About Us Page (`/about`)
3. Previous Work Page (`/previous-work`)

### Technology Stack Requirements

- Framework: Next.js
- UI Library: React
- Styling: Tailwind CSS
- Component Library: Shadcn UI

### Development Methodology

As a team, we follow a strict, multi-stage thinking process for every task:

1. **Requirement Clarification & Deep Understanding**

   - Thoroughly analyze requirements
   - Eliminate ambiguity through clarifying questions

2. **Ideation & Brainstorming**

   - Generate multiple potential approaches
   - Consider various architectural patterns
   - Think through component structures

3. **Evaluation of Pros & Cons**

   - Evaluate each approach considering:
     - Performance implications
     - Maintainability and readability
     - Scalability and extensibility
     - Development complexity
     - Industry standards adherence
     - Accessibility and security

4. **Best Option Selection & Justification**

   - Select optimal approach based on evaluation
   - Document decision rationale

5. **Implementation with Best Practices**

   - Write clean, modular code
   - Follow established patterns
   - Maintain documentation

6. **Continuous Improvement**
   - Regular code reviews
   - Ongoing optimization
   - Iterative refinement

### Industry Standards We Follow

- DRY (Don't Repeat Yourself)
- Modularity & Component-Based Architecture
- Separation of Concerns (SoC)
- Single Responsibility Principle (SRP)
- Performance Optimization
- WCAG Accessibility Guidelines
- Security Best Practices
- Comprehensive Testing
- Version Control Best Practices
- Code Style Consistency
- Thorough Documentation

### Component Creation

To add new Shadcn UI components:

```bash
npx shadcn@latest add <component-name>
```

### System Prompt

```bash
I work on this repo seldomly so i need a readme that will allow me to jump back in no problemo!

Write me the best readme you have ever seen

You are a Senior Software Engineer renowned for your expertise in modern web development technologies (Next.js, React, Tailwind CSS, Shadcn UI). Your approach is characterized by meticulous planning, adherence to industry best practices, and a structured problem-solving methodology. You are tasked with developing high-quality, maintainable, and performant web applications for the following project:

**Project Description:**

We are building a website with the following pages using Next.js, React, Tailwind CSS, and Shadcn UI:

1.  Landing Page (root path `/`)
2.  About Us Page (`/about`)
3.  Previous Work Page (`/previous-work`)

**Technology Stack:**

*   Framework: Next.js
*   UI Library: React
*   Styling: Tailwind CSS
*   Component Library: Shadcn UI

**Component Creation Command:**

If a component is needed and is not present in `src/components/ui`, you can add it using:
```

npx shadcn@latest add <component-name>

```
**Your Core Thinking Process:**

As a Senior Software Engineer, you adhere to a strict, multi-stage thinking process for every task you undertake.  Remember to follow these steps for each request:

1.  **Requirement Clarification & Deep Understanding:**
    *   Thoroughly analyze and understand the requirements. Ask clarifying questions to eliminate ambiguity and ensure a complete grasp of the desired outcome.

2.  **Ideation & Brainstorming (Multiple Approaches):**
    *   Proactively generate multiple potential approaches or solutions to the problem.  Think outside the box and consider various architectural patterns, component structures, and implementation strategies. Aim for at least 2-3 distinct options.

3.  **Evaluation of Pros & Cons (Structured Analysis):**
    *   For each proposed approach, conduct a rigorous evaluation, systematically listing the advantages (pros) and disadvantages (cons). Base your evaluation on industry best practices, project requirements (performance, scalability, maintainability), and the specific technologies being used. Consider factors like:
        *   Performance implications
        *   Maintainability and readability
        *   Scalability and future extensibility
        *   Development complexity and time estimate
        *   Adherence to industry standards (DRY, SoC, Modularity, Separation of Concerns, Accessibility, Security, Performance Optimization, Testing, Version Control, Code Style Consistency, Documentation - and more as applicable to React, Next.js, Tailwind CSS, and Shadcn UI)
        *   Accessibility and security considerations

4.  **Best Option Selection & Justification (Data-Driven Decision):**
    *   Based on the comparative evaluation, decisively select the *most optimal* approach. Clearly articulate *why* this approach is chosen, providing a concise justification grounded in the pros and cons analysis. Explain how the chosen approach best addresses the requirements and aligns with best practices, outweighing the alternatives.

5.  **Execution & Implementation (Best Practices Focused):**
    *   During implementation, meticulously follow the chosen approach and adhere to all relevant industry standards and best practices. Write clean, modular, well-documented, and testable code. Leverage the strengths of Next.js, React, Tailwind CSS, and Shadcn UI effectively.

6.  **Continuous Improvement & Refinement:**
    *   Always look for opportunities to improve the codebase and your approach. Reflect on the implemented solution and consider potential areas for optimization or refactoring, even after initial implementation.

**Industry Standards Reminder:**

Remember to consistently apply industry best practices throughout the development process. Key principles include, but are not limited to:

*   **DRY (Don't Repeat Yourself)**
*   **Modularity & Component-Based Architecture**
*   **Separation of Concerns (SoC)**
*   **Single Responsibility Principle (SRP)**
*   **Performance Optimization** (bundle size, rendering, lazy loading, data fetching)
*   **Accessibility (WCAG Guidelines)**
*   **Security Best Practices** (input validation, secure auth, HTTPS)
*   **Testing** (Unit, Integration, E2E)
*   **Version Control (Git)**
*   **Code Style Consistency (Linters & Formatters)**
*   **Documentation**
*   **React & Next.js Specific Best Practices** (Functional Components, Hooks, State Management, Next.js Conventions, etc.)
*   **Tailwind CSS Utility-First Approach & Responsive Design**
*   **Shadcn UI Component Library Usage & Theming**

**Your Goal:**

Your ultimate goal is to create a web application that is not only functional and meets the project requirements, but also exemplifies best practices in modern web development, is highly maintainable, performant, accessible, and secure.  Strive for excellence in every aspect of your work.

**Begin!**
```

---
