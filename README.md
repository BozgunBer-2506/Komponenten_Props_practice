# React Props Practice

A comprehensive exercise project demonstrating React component composition and props usage.

## 📋 Project Overview

This project is a practical implementation of React fundamentals, focusing on:
- Component creation and reusability
- Props passing and destructuring
- Default values for props
- Children props for flexible components
- Component composition patterns
- Object and array props handling

## 🚀 Live Demo

View the live application: [Props Demo](https://komponenten-props-practice.vercel.app) *(Add your deployment link)*

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling
- **JavaScript ES6+** - Programming language

## 📁 Project Structure

```
src/
├── components/
│   ├── Greeting.jsx          # Simple greeting component
│   ├── ProductCard.jsx        # Product display card
│   ├── Button.jsx             # Reusable button with variants
│   ├── Card.jsx               # Wrapper component with children
│   ├── UserProfile.jsx        # User profile with object props
│   ├── Avatar.jsx             # Avatar with image/initials
│   ├── Badge.jsx              # Status/category badges
│   ├── ContactCard.jsx        # Contact info card
│   └── ContactList.jsx        # List of contacts
├── App.jsx                    # Main application component
├── App.css                    # Application styles
├── index.css                  # Global styles
└── main.jsx                   # Application entry point
```

## 🎯 Features Demonstrated

### 1. Basic Props
```jsx
<Greeting name="Max" message="Welcome!" />
```

### 2. Props Destructuring
```jsx
function ProductCard({ title, price, description, category }) {
  return (...)
}
```

### 3. Default Values
```jsx
function Button({ 
  text, 
  variant = "primary", 
  size = "medium",
  disabled = false 
}) {
  return (...)
}
```

### 4. Children Props
```jsx
<Card title="Welcome">
  <p>Custom content here</p>
  <Button text="Learn more" />
</Card>
```

### 5. Object Props
```jsx
const user = {
  name: "Y.Baris Özgün",
  role: "Frontend Developer",
  skills: ["React", "JavaScript", "CSS"]
};

<UserProfile user={user} />
```

### 6. Component Composition
```jsx
// Small components combined into larger ones
<ContactCard> uses <Avatar> and <Badge>
```

## 🎨 Component Showcase

### Greeting Component
Displays personalized greetings with custom messages.

### Product Cards
Three product examples:
- **Laptop Pro** - High-performance laptop (€999.99)
- **Wireless Kopfhörer** - Noise-cancelling headphones (€149.99)
- **Smartwatch Ultra** - Fitness tracker with AMOLED (€399.99)

### Button Variants
- Primary (default)
- Success (green)
- Danger (red)
- Sizes: small, medium, large

### User Profile
Displays user information with:
- Name and role
- Email
- Skills as tags
- Online status indicator

### Contact System
- Individual contact cards with avatars
- Contact list with multiple entries
- Status badges (Available, Busy, Away)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BozgunBer-2506/Komponenten_Props_practice.git
cd Komponenten_Props_practice
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎓 Learning Objectives

This project covers essential React concepts:

✅ Creating reusable components  
✅ Passing data via props  
✅ Using destructuring for cleaner code  
✅ Setting default prop values  
✅ Using children for flexible layouts  
✅ Composing small components into larger ones  
✅ Handling objects and arrays as props  
✅ Using the `key` prop in lists  

## 🔧 Customization

### Adding New Products
Edit `App.jsx`:
```jsx
<ProductCard
  title="Your Product"
  price={99.99}
  description="Your description"
  category="Your Category"
/>
```

### Changing User Information
Update the `userData` object in `App.jsx`:
```jsx
const userData = {
  name: "Your Name",
  email: "your@email.com",
  role: "Your Role",
  skills: ["Skill1", "Skill2"],
  isOnline: true
};
```

### Styling
Modify `App.css` to customize colors, spacing, and layout.

## 📝 Key Concepts

### Props Flow
```
Parent Component (App)
    │
    ├─> Props passed down
    │
    ▼
Child Component (ProductCard, UserProfile, etc.)
```

### One-Way Data Flow
- Data flows from parent to child
- Props are read-only
- Children cannot modify props

### Component Reusability
Same component, different data:
```jsx
<Button text="Save" variant="success" />
<Button text="Delete" variant="danger" size="small" />
```

## 🐛 Known Issues

None at the moment. If you find any bugs, please open an issue!

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Component Patterns](https://react.dev/learn/passing-props-to-a-component)

## 👨‍💻 Author

**Y.Baris Özgün**
- GitHub: [@BozgunBer-2506](https://github.com/BozgunBer-2506)

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

- React team for the amazing library
- Vite for the fast build tool
- The open-source community

---

**Happy Coding!** 🚀