# App Showcase Website

A modern, responsive website for showcasing and distributing Android APK files and other applications.

## 📁 File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── apps.json           # App data configuration
├── assets/
│   ├── apks/           # Directory for APK files
│   │   └── sample.apk  # Sample APK file
│   └── images/         # Directory for app icons and images
└── README.md           # This file
```

## 🚀 Getting Started

1. **Clone or download** this repository
2. **Add your APK files** to the `assets/apks/` directory
3. **Update `apps.json`** with your app information
4. **Open `index.html`** in a web browser or deploy to a web server

## 📱 Adding APK Files

### Step 1: Add APK Files
1. Copy your `.apk` files to the `assets/apks/` directory
2. You can organize them in subdirectories if needed

### Step 2: Update apps.json
Edit the `apps.json` file to add your apps:

```json
{
  "id": "unique-app-id",
  "title": "Your App Name",
  "icon": "https://your-icon-url.com/icon.png",
  "description": "Description of your app",
  "downloadLink": "assets/apks/YourApp.apk",
  "fileName": "YourApp.apk",
  "category": "Category"
}
```

### Step 3: App Icons
You can use:
- **Online placeholders**: `https://placehold.co/400x300/color/FFFFFF?text=Your+App`
- **Local images**: Store in `assets/images/` and reference as `assets/images/icon.png`
- **External URLs**: Any publicly accessible image URL

## 🎨 Customization

### Changing Colors and Styles
Edit `styles.css` to modify:
- Color schemes
- Hover effects
- Layout spacing
- Typography

### Modifying Content
Edit `index.html` to change:
- Website title
- Hero section text
- Footer information
- Navigation links

### JavaScript Functionality
Edit `script.js` to modify:
- App loading behavior
- Card creation logic
- Download tracking
- Additional features

## 🌐 Deployment Options

### Local Development
Simply open `index.html` in your web browser.

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Access via `https://username.github.io/repository-name`

### Web Hosting
Upload all files to any web hosting service that supports static websites.

## 📋 App Configuration Reference

Each app in `apps.json` supports these properties:

| Property | Required | Description |
|----------|----------|-------------|
| `id` | Yes | Unique identifier for the app |
| `title` | Yes | Display name of the app |
| `icon` | Yes | URL or path to app icon |
| `description` | Yes | Brief description of the app |
| `downloadLink` | Yes | Path to the downloadable file |
| `fileName` | Yes | Suggested filename for download |
| `category` | No | Category tag for the app |

## 🔧 Technical Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional appearance with hover effects
- **Fast Loading**: Optimized for quick page loads
- **Error Handling**: Graceful handling of missing files or network issues
- **Accessibility**: Semantic HTML and proper alt text
- **SEO Friendly**: Proper meta tags and structure

## 📝 File Size Considerations

- **GitHub Pages**: 100MB file size limit, 1GB repository limit
- **Large APKs**: Consider using external hosting (Google Drive, Dropbox, etc.)
- **Optimization**: Compress images and minimize file sizes when possible

## 🛠️ Troubleshooting

### APK Downloads Not Working
1. Check file paths in `apps.json`
2. Ensure APK files exist in the specified location
3. Verify web server supports APK file downloads

### Images Not Loading
1. Check image URLs in `apps.json`
2. Ensure images are accessible
3. Check browser console for errors

### JSON Errors
1. Validate JSON syntax using online tools
2. Check for missing commas or brackets
3. Ensure proper escaping of special characters

## 📄 License

This project is open source and available under the MIT License.
