# ♟️ Game Highlights

A beautiful, dark-themed showcase for your best chess games. Built with vanilla HTML, CSS, and JavaScript. No backend needed - just edit the code to add your highlights!

## 🎯 Features

- **Dark Theme Design** - Modern, eye-friendly dark UI with sleek gradients
- **Simple Table View** - Clean, readable display of your best games
- **Search** - Find games by opponent name
- **Chess.com Links** - Direct links to view full games on Chess.com
- **No Backend** - 100% client-side, no database needed
- **Responsive Design** - Works beautifully on desktop, tablet, and mobile
- **Easy to Edit** - Just modify the `gameHighlights` array in `script.js` to add/update games

## 🚀 Quick Start

1. Clone this repository
2. Open `index.html` in your web browser
3. Edit game highlights directly in `script.js`

## 📝 How to Add Games

Open `script.js` and find the `gameHighlights` array. Add new objects with this format:

```javascript
{
    opponent: "Opponent Name",
    rating: 1489,
    format: "rapid",
    date: "2024-05-05",
    link: "https://www.chess.com/analysis/game/live/..."
}
```

**Fields:**
- `opponent` - Name of your opponent
- `rating` - Their rating
- `format` - Time format: `bullet`, `blitz`, `rapid`, or `classical`
- `date` - Date played (YYYY-MM-DD format)
- `link` - Chess.com game analysis link

## 🔍 Using the Website

### Searching
- Use the search box to find games by opponent name

### Viewing Your Games
The table displays:
- **Opponent** - Who you played
- **Rating** - Their rating
- **Format** - Game time format
- **Date** - When the game was played
- **Link** - Direct link to view on Chess.com

## 🛠️ Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and gradients
- **Vanilla JavaScript** - No dependencies, pure JavaScript

## 🎨 Design Features

- **Dark Theme** - Sophisticated dark palette to reduce eye strain
- **Cyan & Lime Gradients** - Modern, sleek accent colors
- **Smooth Animations** - Elegant hover effects and transitions
- **Table Layout** - Clean, scannable display of highlights
- **Mobile Responsive** - Adapts perfectly to any screen size

## 📱 Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Feel free to fork and improve! Some ideas:
- Export highlights to CSV
- PGN file support
- Sort by rating or date
- Multiple color themes

---

**Showcase your best games! ♟️**

