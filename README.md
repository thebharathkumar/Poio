# Apple-Style Portfolio Website

A modern, minimalist portfolio website inspired by Apple's design language, showcasing expertise in AI Engineering, Data Engineering, Software Development, and Data Analytics.

## Features

- **Apple-Inspired Design**: Clean, minimalist aesthetic with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered animations and parallax effects
- **Modern Technologies**: Built with vanilla HTML, CSS, and JavaScript
- **Performance Optimized**: Fast loading times and smooth interactions
- **SEO Friendly**: Semantic HTML structure

## Design Highlights

- 🎨 Minimalist and clean interface
- ✨ Smooth scroll animations
- 📱 Mobile-first responsive design
- 🎭 Glassmorphism navigation bar
- 🌊 Parallax hero section
- 🎯 Interactive hover effects

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **Skills**: Showcases four main areas of expertise:
   - AI Engineer
   - Data Engineer
   - Software Developer
   - Data Analyst
3. **Projects**: Featured project showcases with descriptions and tech stacks
4. **Experience**: Technical skills organized by category
5. **Contact**: Multiple ways to get in touch

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **JavaScript**: Vanilla JS with modern ES6+ features
- **Design**: Apple design principles

## Customization

### Update Personal Information

1. **Contact Links** (in `index.html`):
   - Update email: Line 204
   - Update LinkedIn: Line 205
   - Update GitHub: Line 206

2. **Content**:
   - Modify hero title and subtitle: Lines 20-21
   - Update skill descriptions: Lines 37-90
   - Customize project details: Lines 98-162
   - Adjust experience content: Lines 169-197

3. **Styling** (in `styles.css`):
   - Change color scheme: Lines 7-15 (CSS variables)
   - Adjust fonts: Line 22
   - Modify spacing and sizing throughout

4. **Add Images**:
   - Replace project placeholders with actual images
   - Update `.project-placeholder` divs with `<img>` tags

## Installation & Usage

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Poio
   ```

2. Open the website:
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # or
     npx serve
     ```

3. Visit `http://localhost:8000` in your browser

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized animations using CSS transforms
- Debounced scroll events
- Intersection Observer for efficient scroll animations
- Lazy loading ready for images

## Future Enhancements

- [ ] Add real project images
- [ ] Implement dark mode toggle
- [ ] Add blog section
- [ ] Include testimonials
- [ ] Add contact form with backend
- [ ] Integrate analytics
- [ ] Add case studies for projects

## License

This project is open source and available under the MIT License.

## Credits

Design inspiration from [Apple.com](https://www.apple.com)

---

**Note**: Remember to update all placeholder content (email, LinkedIn, GitHub links, project details) with your actual information before deploying.
