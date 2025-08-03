# HRIS Dashboard

A modern Human Resource Information System (HRIS) dashboard built with Astro, React, and Tailwind CSS. This application provides a comprehensive solution for managing employee data, attendance, leave requests, and payroll processing.

![HRIS Dashboard](https://via.placeholder.com/800x400?text=HRIS+Dashboard)

## 🚀 Features

- **Dashboard Overview**: Get a quick snapshot of your organization with key metrics and visualizations
- **Employee Management**: Add, edit, and manage employee information
- **Attendance Tracking**: Monitor employee attendance and work hours
- **Leave Management**: Process and approve employee leave requests
- **Payroll Processing**: Generate and manage employee payroll records
- **Department Management**: Organize employees by departments
- **Modern UI**: Beautiful and responsive user interface built with Tailwind CSS
- **Interactive Charts**: Data visualization using Recharts

## 💻 Tech Stack

- **[Astro](https://astro.build/)**: Fast, modern static site generator
- **[React](https://reactjs.org/)**: UI component library
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[Radix UI](https://www.radix-ui.com/)**: Unstyled, accessible UI components
- **[Recharts](https://recharts.org/)**: Composable charting library
- **[Lucide Icons](https://lucide.dev/)**: Beautiful open-source icons
- **[date-fns](https://date-fns.org/)**: Modern JavaScript date utility library

## 📁 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets
│   ├── components/      # UI components
│   │   ├── attendance/  # Attendance-related components
│   │   ├── charts/      # Chart components
│   │   ├── dashboard/   # Dashboard components
│   │   ├── employees/   # Employee management components
│   │   ├── forms/       # Form components
│   │   ├── layout/      # Layout components
│   │   ├── leave/       # Leave management components
│   │   ├── payroll/     # Payroll components
│   │   └── ui/          # Reusable UI components
│   ├── data/            # Mock data
│   ├── layouts/         # Page layouts
│   ├── lib/             # Utility functions
│   ├── pages/           # Application pages
│   ├── styles/          # Global styles
│   └── types/           # TypeScript type definitions
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/hris-dashboard.git
   cd hris-dashboard
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Astro](https://astro.build/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Radix UI](https://www.radix-ui.com/) for the accessible UI primitives
