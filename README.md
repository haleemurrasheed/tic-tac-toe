# 🎯 Tic Tac Toe

A clean, modular Tic Tac Toe game built with JavaScript Factory Functions and Module Pattern.

![Game Screenshot](screenshot.png) screenshot

## 🚀 Live Demo
[Play the Game](https://haleemurrasheed.github.io/tic-tac-toe/)

## ✨ Features
- **Two-player** gameplay (X vs O)
- **Win detection** for all 8 possible combinations
- **Tie game** detection
- **Reset functionality** with one click
- **Clean UI** with turn indicators
- **Modular architecture** following best practices

## 🛠️ Technologies
- **HTML5** - Semantic structure
- **CSS3** - Grid layout, Flexbox, custom properties
- **JavaScript (ES6+)** - Factory Functions, Module Pattern, ES6 Modules


## 📁 Project Structure
tic-tac-toe/
├── index.html # Main HTML file
├── style.css # Styles
├── gameboard.js # Gameboard factory function
├── player.js # Player factory function
├── gameController.js # Game logic module (IIFE)
├── displayController.js # UI module (IIFE)
└── script.js # Application entry point


## 🏗️ Architecture
This project demonstrates key JavaScript concepts:
- **Factory Functions** for creating gameboard and player objects
- **Module Pattern (IIFE)** for single-instance controllers
- **Separation of Concerns** between game logic and UI
- **Encapsulation** using closures for private state
- **Event Delegation** for efficient DOM handling

## 🎮 How to Play
1. Player X always starts first
2. Click any empty cell to place your mark
3. Players alternate turns
4. First to get 3 in a row (horizontally, vertically, or diagonally) wins!
5. If all cells fill without a winner, it's a tie
6. Click "Reset Game" to start over

## 🔧 Local Development
```bash
# Clone repository
git clone https://github.com/haleemurrasheed/tic-tac-toe

# Open in browser (using Live Server recommended)
# Or use Python's simple HTTP server:
python -m http.server 8000


📚 Credits
Built as part of The Odin Project curriculum

Concepts: Factory Functions & Module Pattern lesson

📄 License
MIT License - feel free to use this project for learning purposes!