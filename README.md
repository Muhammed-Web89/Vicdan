# Vicdan Humanitarian Aid Association - Landing Website

A modern, fully functional single-page landing website for Vicdan İnsani Yardım Derneği (Vicdan Humanitarian Aid Association).

## 🎨 Design Features

- **Color Palette**: Turquoise blue (#40E0D0), dark blue (#1E3A5F), and white
- **Modern UI/UX**: Clean typography, smooth animations, responsive design
- **Professional Layout**: Production-ready design conveying compassion, trust, and cultural depth

## 📋 Sections

1. **Hero Section** - Compelling headline with call-to-action buttons
2. **About Us** - Organization introduction with animated statistics
3. **Mission & Vision** - Core organizational goals and aspirations
4. **Core Values** - Six fundamental principles (Compassion, Solidarity, Cultural Preservation, Education, Integrity, Inclusivity)
5. **Programs & Initiatives** - Six comprehensive program areas
6. **Support / Donate** - Donation form with multiple support options
7. **Contact** - Contact information and inquiry form

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required! This is a pure HTML/CSS/JavaScript website.

### Installation

1. Clone or download this repository
2. Open `index.html` in a web browser
3. That's it! The website is ready to use.

### File Structure

```
Vicdan dernek/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive features and smooth scrolling
└── README.md       # This file
```

## ✨ Features

- **Smooth Scrolling Navigation** - All navigation links scroll to their corresponding sections
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Animated Statistics** - Counter animations in the About section
- **Interactive Forms** - Donation and contact forms with validation
- **Mobile Menu** - Hamburger menu for mobile navigation
- **Scroll Animations** - Elements fade in as you scroll
- **Scroll to Top Button** - Convenient navigation back to top

## 🎯 Customization

### Updating Contact Information

Edit the contact details in `index.html` (around line 400):
- Address
- Email
- Phone number
- Office hours

### Modifying Colors

All colors are defined as CSS variables in `styles.css` (lines 3-15). Update these values to change the color scheme:

```css
:root {
    --turquoise: #40E0D0;
    --dark-blue: #1E3A5F;
    /* ... */
}
```

### Adding Backend Integration

The forms currently show alert messages. To integrate with a backend:

1. Update the form submission handlers in `script.js`
2. Replace the `alert()` calls with actual API calls
3. Add proper error handling and success messages

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with Flexbox and Grid
- **Vanilla JavaScript** - No frameworks required
- **Google Fonts** - Inter (body) and Playfair Display (headings)
- **Responsive Breakpoints**: 968px, 768px, 480px

## 📝 Notes

- All content is in English as requested
- Forms are ready for backend integration
- Images/icons use emoji placeholders - replace with actual images if desired
- Statistics numbers are animated on scroll
- All navigation links use smooth scrolling

## 🌐 Deployment

You can deploy this website to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Any web server

Simply upload all files to your hosting provider.

## 📄 License

This website is created for Vicdan Humanitarian Aid Association.

---

**Built with ❤️ for humanitarian causes**

