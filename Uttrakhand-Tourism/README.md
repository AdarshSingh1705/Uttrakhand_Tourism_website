# Global FootPrint

Modern React-based tourism website for Uttarakhand destinations.

## 🚀 Features

- **18 Destination Pages** - Complete coverage of Uttarakhand tourist spots
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Search & Filter** - Real-time destination search and category filtering
- **Authentication** - User login/signup with protected routes
- **Form Validation** - Email, phone, name validation with input sanitization
- **Rate Limiting** - Frontend protection against spam submissions
- **Image Carousels** - Keyboard and touch navigation support
- **Reviews System** - User reviews with star ratings
- **Gallery** - Image gallery with lightbox
- **Blog** - Travel tips and articles
- **FAQ** - Comprehensive FAQ section
- **Dashboard** - User profile and favorites management

## 📁 Project Structure

```
React-Version/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Utility functions
│   │   ├── context/       # React Context
│   │   └── styles/        # CSS files
│   └── package.json
└── server/                # Backend (optional)
```

## 🛠️ Tech Stack

**Frontend:**

- React 18
- React Router v6
- Swiper.js (carousels)
- Axios (API calls)
- CSS3 (custom styling)

**Utilities:**

- Form validation
- Input sanitization
- Rate limiting
- Custom hooks (useApi, useLoadMore)

## 📦 Installation

```bash
# Navigate to client directory
cd React-Version/client

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🌐 Available Routes

### Main Pages

- `/` - Home
- `/about` - About Us
- `/destinations` - All Destinations
- `/gallery` - Photo Gallery
- `/blog` - Travel Blog
- `/faq` - FAQ
- `/reviews` - User Reviews
- `/contact` - Contact Us

### Destination Pages

- `/destinations/dehradun`
- `/destinations/mussoorie`
- `/destinations/nainital`
- `/destinations/rishikesh`
- `/destinations/haridwar`
- `/destinations/auli`
- `/destinations/kedarnath`
- `/destinations/badrinath`
- `/destinations/gangotri`
- `/destinations/yamunotri`
- `/destinations/jim-corbett`
- `/destinations/rajaji-national-park`
- `/destinations/valley-of-flowers`
- `/destinations/tehri-dam`
- `/destinations/bhimtal`
- `/destinations/sattal`
- `/destinations/dhanaulti`
- `/destinations/chakrata`

### Protected Routes

- `/dashboard` - User Dashboard
- `/favorites` - Saved Destinations

## 🎨 Key Features

### Destination Pages

Each destination includes:

- Hero image carousel (4-5 images)
- About section
- Best time to visit & itineraries
- Food & cuisine (4 categories)
- Accommodation options
- Nearby attractions
- How to reach (Air/Train/Road)
- Activities (flip cards)
- Travel tips

### Form Validation

- Email format validation
- 10-digit phone validation
- Name validation (letters only, min 2 chars)
- Date validation (future dates)
- Input sanitization (removes < >)

### Security

- Rate limiting on forms
- Protected routes with authentication
- Input sanitization
- Mock authentication fallback

## 🔧 Configuration

### Environment Variables

Create `.env` file in client directory:

```
REACT_APP_API_URL=http://localhost:3003
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

```bash
# Build production bundle
npm run build

# Deploy build folder to hosting service
# (Netlify, Vercel, AWS S3, etc.)
```

## 📝 Notes

- Backend API optional (works with mock data)
- All forms include validation and sanitization
- Images optimized with lazy loading
- SEO-friendly routing structure

## 👨‍💻 Development

```bash
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## 📄 License

MIT License

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📧 Contact

Developed by Adarsh Singh

- LinkedIn: [linkedin.com/in/adarshsingh1705](https://linkedin.com/in/adarshsingh1705)
- Email: gfp.globalfootprint2024@gmail.com

---

**Explore the wonders of Uttarakhand with Global FootPrint! 🏔️**
