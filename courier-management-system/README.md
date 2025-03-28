# Courier Management System

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview

The Courier Management System is a web application designed to streamline and manage courier services. It provides features such as branch management, staff management, parcel tracking, and reporting.

## Features

- **Dashboard**: Overview of key metrics and quick navigation to important sections.
- **Branch Management**: Add, edit, and view branch details.
- **Staff Management**: Manage branch staff, including adding and listing staff members.
- **Parcel Tracking**: Track parcels and view their status.
- **Reports**: Generate and view reports for analytics.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Folder Structure

- **src/app**: Contains the main application code.
  - **_components**: Reusable components like `NavBar`, `Header`, and `Card`.
  - **dashboard**: Dashboard page and related styles.
  - **new-branch**: Page for adding a new branch.
  - **services**: Services page.
- **public**: Static assets like images and icons.
- **.next**: Build output and cache files (ignored in version control).

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lucide Icons**: Icon library for React components.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.