![image](https://github.com/user-attachments/assets/5d611e2c-7fcd-443a-b780-b3fd916bdc5d)


# Hello World Documentation

![GitHub contributors](https://img.shields.io/github/contributors/agnilondapakou/helloWorld)
![GitHub issues](https://img.shields.io/github/issues/agnilondapakou/helloWorld)
![GitHub stars](https://img.shields.io/github/stars/agnilondapakou/helloWorld)
![GitHub forks](https://img.shields.io/github/forks/agnilondapakou/helloWorld)

A modern web interface showcasing "Hello World" examples in various programming languages. This project provides an interactive way to explore different programming languages and their basic syntax.

## Features

- 🌙 Dark theme with violet accents
- 🔍 Real-time search functionality
- 📝 Alphabetical filtering
- 💫 Smooth animations and transitions
- 📱 Responsive design
- 🔗 Direct links to official documentation
- 🎨 Modern gradient effects

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/agnilondapakou/helloWorld.git
   ```
2. Open `index.html` in your browser to view the project.

## Programming Languages Documentation

Visit our interactive documentation website to explore all available programming languages:

🔗 [Hello World Documentation Site](https://agnilondapakou.github.io/helloWorld)

The website features:

- Interactive search
- Alphabetical filtering
- Dark theme interface
- Direct links to official documentation
- Brief descriptions of each language

## Technical Details

### Frontend Components

#### HTML Structure

- Responsive container layout
- Search input field
- Alphabetical filter buttons
- Dynamic language cards grid
- Error message handling

#### CSS Features

- Custom dark theme variables
- Gradient animations
- Card hover effects
- Responsive design breakpoints
- Custom scrollbar styling

#### JavaScript Functionality

- Real-time search filtering
- Alphabetical sorting
- Dynamic card creation
- Error handling
- External link handling

## Contributing

Follow these steps to contribute a new Hello World example:

### Step 1: Setup (One-time)
1. Fork the repository on GitHub
   - Go to https://github.com/agnilondapakou/helloWorld
   - Click the "Fork" button in the top right
   - Wait for the fork to complete

2. Clone your fork locally
   ```bash
   git clone https://github.com/YOUR-USERNAME/helloWorld.git
   cd helloWorld
   ```

3. Add the upstream repository
   ```bash
   git remote add upstream https://github.com/agnilondapakou/helloWorld.git
   ```

### Step 2: Create a New Branch
1. Update your main branch
   ```bash
   git checkout main
   git pull upstream main
   ```

2. Create a new branch for your language
   ```bash
   git checkout -b add-LANGUAGE-example
   # Example: git checkout -b add-python-example
   ```

### Step 3: Add Your Hello World Program
1. Create a new file in `source/basic/` following the naming convention:
   - Lowercase: `helloworld.{extension}`
   - Or PascalCase: `HelloWorld.{extension}`
   
   Example:
   ```bash
   # For Python
   touch source/basic/helloworld.py
   ```

2. Write your Hello World program:
   ```python
   # Example for Python
   # Simple Hello World program in Python
   print("Hello World")
   ```

### Step 4: Update Documentation
1. Open `docs/script.js`

2. Add your language information in the `languages` array:
   ```javascript
   {
       name: 'Python',  // Language name
       description: 'High-level programming language for general-purpose programming',
       link: 'https://www.python.org/'  // Official documentation
   }
   ```

### Step 5: Test Your Changes
1. Test your Hello World program:
   - Run the program
   - Verify it prints "Hello World"
   - Check for any errors

2. Test the documentation site:
   - Open `docs/index.html` in a browser
   - Verify your language appears
   - Test the search and filtering

### Step 6: Commit Your Changes
1. Add your changes:
   ```bash
   git add source/basic/helloworld.py
   git add docs/script.js
   ```

2. Commit with a descriptive message:
   ```bash
   git commit -m "Add Hello World example in Python"
   ```

3. Push to your fork:
   ```bash
   git push origin add-python-example
   ```

### Step 7: Create Pull Request
1. Go to your fork on GitHub

2. Click "Pull Request"

3. Fill in the PR details:
   - Title: "Add Hello World in [Language]"
   - Description:
     - Brief explanation of the language
     - Any special considerations
     - Reference to official documentation

4. Submit the pull request

### Guidelines

#### Hello World Implementation
- Keep it simple (just print "Hello World")
- Use standard language features
- Avoid external dependencies
- Include basic comments
- Follow language conventions

#### File Structure
```
source/basic/
├── helloworld.py     # Python example
├── HelloWorld.java   # Java example
├── helloworld.cpp    # C++ example
└── helloworld.js     # JavaScript example
```

#### Code Style
- Use consistent indentation
- Add appropriate comments
- Follow language-specific best practices
- Test thoroughly before submitting

Need help? Feel free to open an issue or ask questions in the discussions!

## Development

### Local Setup

1. Clone the repository
2. No build process required
3. Open `index.html` in a browser

### Making Changes

- Modify `styles.css` for theme changes
- Update `script.js` for functionality
- Edit `index.html` for structure changes

## Testing

- Test across different browsers
- Verify mobile responsiveness
- Check all external links
- Validate search functionality
- Test alphabetical filtering

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Contributors to language examples
- Documentation resource providers
- Open source community

## Support

- Create an issue for bugs
- Submit feature requests
- Join discussions

## Contact

For questions or suggestions, please open an issue in the GitHub repository.

## Changelog

### Latest Version

- Added dark theme
- Implemented gradient effects
- Enhanced mobile responsiveness
- Added alphabetical filtering
- Improved search functionality

## Roadmap

- [ ] Add language categories
- [ ] Implement syntax highlighting
- [ ] Add code examples preview
- [ ] Create language comparison tool
- [ ] Add offline support
