# Connect With Me - Modern Profile Page

A beautiful, modern, and minimal "Connect With Me" page featuring glassmorphism design, smooth animations, and responsive layout.

## ✨ Features

- **Modern Design**: Glassmorphism effect with gradient backgrounds
- **Animated Background**: Floating particles with subtle parallax effect
- **Responsive Layout**: Looks great on all screen sizes
- **Interactive Modal**: Smooth slide-up modal with social media links
- **Smooth Animations**: Fade-in effects and hover interactions
- **Keyboard Navigation**: Full keyboard support for accessibility
- **Social Media Integration**: Links to all major platforms
- **Resume Download**: Dedicated download button
- **Easter Eggs**: Fun interactions for better user experience

## 🚀 Quick Start

1. Open `index.html` in your web browser
2. The page will load with smooth animations
3. Click "Connect Me" to view social media links
4. All social media links are placeholder - update them with your actual profiles

## 🎨 Customization

### Profile Information
Edit the following in `index.html`:

```html
<h1 class="name">Asad Shaikh</h1>
<p class="tagline">Public Relations Head at ACM MHSSCE | Java Developer | Tech Enthusiast</p>
```

### Profile Picture
Replace the placeholder image:
```html
<img src="https://via.placeholder.com/150/4f46e5/ffffff?text=AS" alt="Asad Shaikh" id="profile-img">
```
Replace with: `<img src="your-profile-picture.jpg" alt="Your Name" id="profile-img">`

### Social Media Links
Update the social media URLs in `index.html`:

```html
<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourusername" target="_blank" class="social-btn linkedin">

<!-- GitHub -->
<a href="https://github.com/yourusername" target="_blank" class="social-btn github">

<!-- WhatsApp -->
<a href="https://wa.me/yourphonenumber" target="_blank" class="social-btn whatsapp">

<!-- Instagram -->
<a href="https://instagram.com/yourusername" target="_blank" class="social-btn instagram">

<!-- Snapchat -->
<a href="https://snapchat.com/add/yourusername" target="_blank" class="social-btn snapchat">

<!-- Telegram -->
<a href="https://t.me/yourusername" target="_blank" class="social-btn telegram">

<!-- Gmail -->
<a href="mailto:your.email@gmail.com" class="social-btn gmail">
```

### Resume Download
To enable resume download, add your resume file to the project folder and update `script.js`:

```javascript
// In the downloadBtn event listener, update:
link.href = 'path/to/your/resume.pdf'; // Replace with your resume file path
link.download = 'Your_Name_Resume.pdf'; // Update filename
```

### Colors and Styling
Customize the gradient background in `style.css`:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Replace with your preferred gradient */
}
```

### Social Button Colors
Each social button has hover effects. Customize them in `style.css`:

```css
.social-btn.linkedin:hover { background: rgba(0, 119, 181, 0.3); }
.social-btn.github:hover { background: rgba(51, 51, 51, 0.3); }
/* Add more or modify existing colors */
```

## 📱 Mobile Responsive

The page is fully responsive with breakpoints at:
- 768px (tablets)
- 480px (mobile phones)

## 🎯 Interactive Features

- **Profile Picture**: Click to rotate, right-click for surprise message
- **Modal**: Click outside to close, ESC key to close
- **Keyboard Navigation**: Arrow keys to navigate social buttons
- **Hover Effects**: All buttons have smooth hover animations
- **Notifications**: Toast notifications for user feedback

## 📁 File Structure

```
connect-me/
├── index.html      # Main HTML file
├── style.css       # Styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Glassmorphism, animations, responsive design
- **JavaScript**: Interactive functionality
- **Font Awesome**: Social media icons
- **Google Fonts**: Inter font family

## 🎨 Design Philosophy

- **Minimalism**: Clean, uncluttered design
- **Modern**: Glassmorphism and contemporary UI trends
- **Accessible**: Keyboard navigation and screen reader friendly
- **Performance**: Lightweight and fast loading
- **User Experience**: Intuitive interactions and feedback

## 📧 Support

If you need help customizing this page or have questions:
1. Check the code comments for guidance
2. Modify one section at a time
3. Test on multiple devices and browsers

## 🚀 Deployment

To deploy this page:
1. Upload all files to your web hosting
2. Ensure your profile picture and resume files are accessible
3. Update all social media links
4. Test all functionality

## 🎉 Tips

- Add your actual profile picture for a personal touch
- Update all social media links before sharing
- Test the resume download functionality
- Consider adding Google Analytics for visitor tracking
- Optimize images for better loading speed

---

**Enjoy your new Connect With Me page! 🌟**
