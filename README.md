# IT Institute Management System (MS3)

## 📋 Project Overview

A comprehensive **IT Institute Management System** built with Angular 18, designed to streamline educational institute operations. This system provides a complete solution for managing students, courses, enrollments, payments, and administrative tasks in an IT training institute.

## ✨ Key Features

### 🎓 Student Management
- Complete student profile management with image uploads
- Student registration and authentication
- Profile updates and password management
- Social media links integration
- Account locking/unlocking functionality
- Student dashboard with personalized content

### 📚 Course Management
- Course creation and management
- Course enrollment system
- Course viewing and details
- Payment plan management
- Course completion tracking

### 💰 Payment System
- Payment processing and tracking
- Payment plan management
- Due amount calculations
- Payment history and reports
- Revenue analytics

### 👨‍💼 Admin Dashboard
- Comprehensive admin panel
- Student list management
- Course administration
- Payment monitoring
- Report generation (Student, Enrollment, Payment reports)
- Announcement management
- Notification system
- Enquiry management

### 🔐 Security & Authentication
- JWT-based authentication
- Role-based access control (Admin, MasterAdmin, Student)
- Route guards for protected pages
- HTTP interceptors for token management
- Password reset functionality

### 📊 Analytics & Reporting
- Student enrollment reports
- Payment analytics
- Revenue summaries
- Course completion statistics
- Interactive charts and graphs

## 🛠 Technology Stack

### Frontend
- **Angular 18** - Main framework
- **TypeScript 5.5** - Programming language
- **Bootstrap 5.3** - UI framework
- **Bootstrap Icons** - Icon library
- **ngx-bootstrap** - Angular Bootstrap components
- **ngx-charts** - Data visualization
- **ngx-spinner** - Loading indicators
- **RxJS 7.8** - Reactive programming

### Backend Integration
- **RESTful API** - Backend communication
- **JWT Authentication** - Token-based auth
- **HTTP Interceptors** - Request/response handling

### Development Tools
- **Angular CLI 18** - Development tooling
- **Karma & Jasmine** - Testing framework
- **TypeScript Compiler** - Type checking

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **Angular CLI** (v18.2.6)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd IT_Institute_Management_MS3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   ng serve
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:4200`
   - The application will automatically reload when you make changes

### Build for Production

```bash
ng build --configuration production
```

## 📁 Project Structure

```
src/
├── app/
│   ├── Components/           # Main application components
│   │   ├── admin/           # Admin-specific components
│   │   │   ├── admin-dashboard/
│   │   │   ├── student-list/
│   │   │   ├── course-list/
│   │   │   ├── payment/
│   │   │   └── report/      # Various report components
│   │   └── student/         # Student-specific components
│   │       ├── student-dashboard/
│   │       ├── course-view/
│   │       ├── profile/
│   │       └── payment-details/
│   ├── Layouts/             # Page layout components
│   │   ├── landing-page/    # Public landing page
│   │   ├── admin-page/      # Admin layout
│   │   └── student-page/    # Student layout
│   ├── Modals/              # Modal components for forms
│   │   ├── admin/           # Admin modals
│   │   ├── student/         # Student modals
│   │   └── landing/         # Public modals (login)
│   ├── Services/            # API services and business logic
│   │   ├── auth.service.ts
│   │   ├── student.service.ts
│   │   ├── course.service.ts
│   │   ├── admin.service.ts
│   │   └── Modal.ts         # TypeScript interfaces
│   ├── Pipes/               # Custom pipes for data transformation
│   │   ├── search.pipe.ts
│   │   ├── date-filter.pipe.ts
│   │   └── course-search.pipe.ts
│   ├── authGuard/           # Route protection
│   ├── interceptor/         # HTTP interceptors
│   └── Exhibition/          # Special components
├── public/                  # Static assets
│   └── LandingAssets/       # Landing page assets
└── styles.css              # Global styles
```

## 🔧 Configuration

### API Configuration
The application connects to a backend API running on `https://localhost:7055`. Update the base URLs in the service files if your backend runs on a different port or domain.

### Environment Setup
- Development: `ng serve` (runs on port 4200)
- Production: `ng build --configuration production`

## 🎯 User Roles & Access

### 👨‍💼 Admin/MasterAdmin
- Full system access
- Student management
- Course administration
- Payment monitoring
- Report generation
- System announcements

### 🎓 Student
- Personal dashboard
- Course enrollment
- Payment details
- Profile management
- Announcements and notifications

## 📱 Key Components

### Landing Page
- Public-facing homepage
- Course showcase
- Login functionality
- Institute information

### Admin Dashboard
- Overview statistics
- Quick access to all admin functions
- Real-time data visualization
- Management tools

### Student Portal
- Personalized dashboard
- Course enrollment
- Payment tracking
- Profile management

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Role-based Access Control** - Different access levels for different user types
- **Route Guards** - Protection of sensitive routes
- **HTTP Interceptors** - Automatic token attachment and error handling
- **Password Security** - Secure password reset and update functionality

## 📊 Data Models

The application uses comprehensive TypeScript interfaces for:
- **Student** - Complete student information
- **Course** - Course details and metadata
- **Enrollment** - Student-course relationships
- **Payment** - Payment tracking and history
- **Admin** - Administrator information
- **Announcement** - System announcements
- **Message** - Student communication

## 🚀 Available Scripts

- `ng serve` - Start development server
- `ng build` - Build for production
- `ng test` - Run unit tests
- `ng build --watch` - Build with file watching

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ using Angular 18**