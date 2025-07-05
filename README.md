
Library Management Web Application

A responsive, modern, and efficient Library Management System built with **React**, **TypeScript**, **Redux Toolkit**, and **Vite**. This application allows users to browse, borrow, and manage books with a clean UI and organized code structure.

---

Tech Stack

- **React** (TypeScript)
- **Redux Toolkit** (State Management)
- **Vite** (Fast Build Tool)
- **Tailwind CSS** (Optional, assuming from structure)
- **React Router DOM** (Routing)
- **RTK Query** (API Calls)

---

 Project Structure

```
├── public/                   // Public assets
├── src/                      // Source files
│   ├── assets/               // Static assets (images, icons)
│   ├── components/           // Reusable components
│   │   ├── layout/           // Layout specific components (Navbar, Footer, etc.)
│   │   ├── module/           // Feature-specific components (Banner, Blog, etc.)
│   │   └── ui/               // Basic UI utilities (Mode toggler, etc.)
│   ├── lib/                  // Utility libraries (common helpers, constants)
│   ├── pages/                // Page-level components (AddBook, AllBooks, etc.)
│   ├── providers/            // Context providers (if applicable)
│   ├── redux/                // Redux Toolkit store and API slices
│   │   ├── api/              // API slices (book APIs, borrow APIs)
│   │   ├── features/         // Redux features
│   │   └── store.ts          // Store configuration
│   ├── routes/               // Route configuration
│   ├── types.ts              // Global TypeScript types
│   ├── App.tsx               // Root component
│   ├── main.tsx              // App entry point
│   └── index.css             // Global styles
├── .env                      // Environment variables
├── vite.config.ts            // Vite configuration
└── package.json              // Project metadata and dependencies
```

---

Setup Instructions

 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

2. Install Dependencies

```bash
npm install
```

3. Run the Development Server

```bash
npm run dev
```

The application will run at `http://localhost:5173` (default Vite port).

---

 Features

✅ Browse list of available books  
✅ View detailed information for each book  
✅ Borrow books and track summary  
✅ Admin functionality to add and edit books  
✅ Responsive layout with reusable UI components  
✅ Optimized state management with Redux Toolkit  
✅ Modular and scalable folder structure  

---

 Build for Production

```bash
npm run build
```

---

 Environment Variables

Make sure to configure your `.env` file for API endpoints or other sensitive configurations.

---

 License

This project is licensed under the **MIT License**.

---

 Contribution

Pull requests and contributions are welcome!  
Please ensure your code follows the existing style and structure.
