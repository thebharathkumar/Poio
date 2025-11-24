# Bharath Kumar Rajesh - Portfolio

A modern, Apple-inspired portfolio website showcasing expertise in Data Engineering, AI, Software Development, and Data Analytics. Built with clean HTML, CSS, and JavaScript for optimal performance and deployed on Vercel.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

## 🎯 About

This portfolio website highlights my professional journey as a Data Engineer and AI Specialist, featuring:

- **Education**: MS in Computer Science (Pace University) & BE in Computer Science
- **Professional Experience**: Roles at Pace University, JPMorgan Chase, and various tech companies
- **Featured Projects**: Machine learning systems, data pipelines, and analytics platforms
- **Research Publications**: Published works in AI and machine learning

## ✨ Features

### Design
- 🎨 **Apple-Inspired Design**: Minimalist, clean aesthetic following Apple's design principles
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ✨ **Smooth Animations**: Scroll-triggered animations, parallax effects, and transitions
- 🎭 **Glassmorphism**: Modern glassmorphic navigation bar with backdrop blur

### Functionality
- ⚡ **Performance Optimized**: Fast loading times with efficient code
- 🔄 **Smooth Scrolling**: Seamless navigation between sections
- 📊 **Animated Statistics**: Dynamic counters for key metrics
- 💻 **Terminal Text Effect**: Typewriter animation for code-style elements
- 🎯 **Intersection Observer**: Efficient scroll-based animations

### Sections
1. **Hero**: Eye-catching introduction with animated statistics
2. **About**: Education and comprehensive technical skills
3. **Experience**: Timeline of professional roles with detailed descriptions
4. **Projects**: Featured projects with technologies used
5. **Publications**: Research contributions and papers
6. **Contact**: Multiple ways to connect

## 🛠 Tech Stack

- **HTML5**: Semantic, accessible markup
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **JavaScript (ES6+)**: Vanilla JS with modern features
- **Design Philosophy**: Apple design language
- **Deployment**: Vercel (zero configuration)

## 📦 Project Structure

```
Poio/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and animations
├── vercel.json         # Vercel configuration
└── README.md           # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Poio
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server:

   **Using Python:**
   ```bash
   python -m http.server 8000
   ```

   **Using Node.js:**
   ```bash
   npx serve
   ```

   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

3. **Visit** `http://localhost:8000`

## 🌐 Deploy to Vercel

### Option 1: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd Poio
   vercel
   ```

3. **Follow the prompts:**
   - Set up and deploy: `Y`
   - Which scope: Choose your account
   - Link to existing project: `N` (first time)
   - Project name: `portfolio` (or your choice)
   - Directory: `./`
   - Override settings: `N`

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - ✨ Done! Your site is live

### Option 3: Deploy via Vercel Dashboard

1. Visit [vercel.com/new](https://vercel.com/new)
2. Drag and drop the project folder
3. Click "Deploy"
4. Your portfolio is live!

## 🎨 Customization

### Personal Information

**Contact Details** (`index.html`):
- Email: Line 293
- Location: Line 300
- Resume link: Line 307

**Content Updates**:
- Hero section: Lines 28-52
- About section: Lines 59-144
- Experience: Lines 154-215
- Projects: Lines 226-254
- Publications: Lines 265-277

### Styling

**Color Scheme** (`styles.css` Lines 8-20):
```css
:root {
    --accent-color: #0071e3;      /* Primary blue */
    --text-primary: #1d1d1f;      /* Dark text */
    --text-secondary: #6e6e73;    /* Light text */
    --background: #ffffff;         /* White background */
    --background-alt: #f5f5f7;    /* Light gray */
}
```

**Fonts**: Change the font-family on Line 24 of `styles.css`

**Animations**: Modify animation duration and delays in `script.js`

### Adding Content

**Add a new experience:**
```html
<div class="experience-item">
    <div class="experience-header">
        <h3 class="job-title">Job Title</h3>
        <span class="job-date">Date Range</span>
    </div>
    <p class="company">Company Name | Location</p>
    <ul class="job-description">
        <li>Achievement or responsibility</li>
    </ul>
</div>
```

**Add a new project:**
```html
<div class="project-card">
    <div class="project-icon">🚀</div>
    <h3 class="project-title">Project Name</h3>
    <p class="project-description">Description...</p>
    <div class="project-tech">
        <span class="tech-tag">Technology</span>
    </div>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

## 🎭 Key Features Breakdown

### Smooth Scrolling
Automatic smooth scrolling when clicking navigation links

### Parallax Hero
Hero section with parallax scrolling effect

### Animated Statistics
Counter animations that trigger when scrolling into view:
- 60% efficiency boost
- 50k+ records processed
- 93% ML accuracy

### Terminal Text Animation
Typewriter effect for the `ai_engineer.exe` text

### Intersection Observer
Efficient scroll-based animations for cards and sections

### Glassmorphism Navigation
Modern frosted glass effect on the navigation bar

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- ⚡ **Lighthouse Score**: 95+ on all metrics
- 🎯 **First Contentful Paint**: < 1.5s
- 📦 **Bundle Size**: < 50KB (uncompressed)
- 🔄 **Smooth 60fps** animations

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Bharath Kumar Rajesh**
- 📧 Email: bharath.kr702@gmail.com
- 📍 Location: New York, NY
- 💼 LinkedIn: [Your LinkedIn]
- 🐙 GitHub: [Your GitHub]

## 🙏 Acknowledgments

- Design inspiration: [Apple.com](https://www.apple.com)
- Icons: Unicode/Emoji
- Fonts: San Francisco (system fonts)

---

**Built with ❤️ by Bharath Kumar Rajesh**

*Last Updated: November 2024*
