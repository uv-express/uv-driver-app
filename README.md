# UV Express Driver WebApp

A comprehensive Next.js 14 web application for UV Express drivers to manage their vehicles, routes, and passenger operations.

## Features

- **Authentication System**: Context-based authentication with protected routes
- **Vehicle Management**: Register and manage vehicle information
- **Dashboard**: Real-time trip management with interactive map
- **Route Tracking**: Monitor current routes and passenger capacity
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Modern Architecture**: Built with Next.js 14 App Router

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Map Integration**: React Leaflet (placeholder implementation)
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Project Structure

\`\`\`
uv-express-driver-app/
├── app/                          # Next.js App Router pages
│   ├── dashboard/               # Protected dashboard page
│   ├── login/                   # Authentication page
│   ├── register-driver/         # Vehicle registration page
│   ├── layout.tsx              # Root layout with AuthProvider
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── components/                  # Reusable UI components
│   ├── auth/                   # Authentication components
│   ├── layout/                 # Layout components (Navbar, Sidebar)
│   └── map/                    # Map components
├── context/                    # React Context providers
│   └── auth-context.tsx        # Authentication context
├── services/                   # API service layer (placeholders)
│   └── api.ts                  # API functions
└── README.md                   # Project documentation
\`\`\`

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd uv-express-driver-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Default Login Credentials

For testing purposes, you can use any email and password combination. The app uses mock authentication.

## Key Features Explained

### Authentication System

- **AuthContext**: Manages user state and authentication methods
- **Protected Routes**: Automatically redirects unauthenticated users to login
- **Persistent Sessions**: Uses localStorage to maintain login state

### Dashboard Features

- **Trip Management**: Start/stop trips with visual feedback
- **Real-time Stats**: Display available seats, current route, and trip status
- **Interactive Map**: Placeholder for Leaflet map integration
- **Quick Actions**: Easy access to common driver functions

### Vehicle Registration

- **Comprehensive Form**: Capture vehicle details, capacity, and operating hours
- **Route Setup**: Configure primary routes and schedules
- **Validation**: Form validation for required fields

### Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Adaptive Layout**: Sidebar collapses on smaller screens
- **Touch-Friendly**: Large buttons and touch targets

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Manual Deployment

1. Build the application:
\`\`\`bash
npm run build
\`\`\`

2. Start the production server:
\`\`\`bash
npm start
\`\`\`

## Environment Variables

Create a \`.env.local\` file for environment-specific configurations:

\`\`\`env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_MAP_API_KEY=your_map_api_key_here
\`\`\`

## Future Enhancements

### Backend Integration
- Replace mock API calls with real backend endpoints
- Implement proper authentication with JWT tokens
- Add database integration for persistent data

### Map Integration
- Integrate real Leaflet maps with route visualization
- Add GPS tracking functionality
- Implement real-time location updates

### Additional Features
- Push notifications for trip updates
- Passenger booking system integration
- Revenue tracking and reporting
- Multi-language support

## API Integration Guide

The app includes placeholder API functions in \`services/api.ts\`. To integrate with a real backend:

1. Replace mock functions with actual HTTP calls
2. Update the AuthContext to handle real authentication tokens
3. Implement error handling for network requests
4. Add loading states for better UX

### Example API Integration

\`\`\`typescript
// Replace mock login function
async login(email: string, password: string) {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  
  if (!response.ok) {
    throw new Error('Login failed')
  }
  
  return response.json()
}
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature-name\`
3. Commit your changes: \`git commit -am 'Add feature'\`
4. Push to the branch: \`git push origin feature-name\`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue in the repository or contact the development team.
