# Rishabh Patel - Professional Portfolio

A modern, responsive, and fully-featured portfolio website built with React, Vite, Tailwind CSS, and Framer Motion animations.

## 🌟 Features

- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Dark Mode** - Toggle between light and dark themes with smooth transitions
- **Smooth Animations** - Powered by Framer Motion for engaging interactions
- **Fast Performance** - Built with Vite for optimal load times
- **SEO Optimized** - Meta tags and semantic HTML for search engines
- **Accessibility** - WCAG compliant with proper ARIA labels
- **Mobile-Friendly Navigation** - Hamburger menu for mobile devices
- **Contact Form** - Integrated email functionality

## 📋 Sections

1. **Hero** - Eye-catching introduction with social links
2. **About Me** - Personal background and professional summary
3. **Skills** - Categorized technical skills and proficiencies
4. **Projects** - Portfolio of data analytics and BI projects
5. **Experience** - Professional internships and job simulations
6. **Certifications** - 14+ professional certifications
7. **Education** - Academic credentials and achievements
8. **Contact** - Contact form and social media links
9. **Footer** - Quick links and copyright information

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite 4
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10
- **Icons**: React Icons 4
- **Smooth Scrolling**: React Scroll

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup Instructions

1. **Navigate to project directory**
   ```bash
   cd rishabh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
rishabh-portfolio/
├── index.html              # Main HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Main App component
│   ├── index.css           # Global styles
│   ├── components/         # React components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Projects.jsx    # Projects section
│   │   ├── Experience.jsx  # Experience section
│   │   ├── Certifications.jsx  # Certifications
│   │   ├── Education.jsx   # Education section
│   │   ├── Contact.jsx     # Contact section
│   │   └── Footer.jsx      # Footer component
│   └── data/
│       └── portfolioData.js # Portfolio content and data
└── public/                  # Static assets

```

## 🎨 Customization

### Update Portfolio Content
Edit `src/data/portfolioData.js` to update:
- Personal information
- Skills and expertise
- Projects and achievements
- Certifications
- Education details
- Experience and internships

### Modify Styling
- **Colors**: Edit `tailwind.config.js`
- **Fonts**: Update font families in Tailwind config
- **Animations**: Customize Framer Motion settings in components

### Add Social Media Links
Update social links in `portfolioData.js`:
```javascript
linkedin: 'your-linkedin-url',
github: 'your-github-url',
email: 'your-email'
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 Environment Setup

No environment variables needed. The portfolio works with default settings.

## 📄 License

This portfolio is personal property and meant for professional use only.

## 📞 Contact

- Email: rp331695@gmail.com
- Phone: +91-9294536015
- LinkedIn: [linkedin.com/in/rishabh-patel-703673275/](https://www.linkedin.com/in/rishabh-patel-703673275/)
- Location: Jabalpur, Madhya Pradesh, India

## 🤝 Support

For issues or questions, please reach out via email or LinkedIn.

---

**Built with ❤️ by Rishabh Patel**
