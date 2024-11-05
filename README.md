# React Spinner Toolkit

[https://react-spinner-toolkit.vercel.app/](https://react-spinner-toolkit.vercel.app/)

A customizable loading React Spinner Toolkit for React applications. The `react-spinner-toolkit` provides a variety of shapes and animations to enhance the user experience during loading states.

## Table of Contents

- [React Spinner Toolkit](#react-spinner-toolkit)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Props](#props)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Multiple spinner shapes (e.g., circle, square).
- Customizable size and color.
- Different animation types (e.g., bounce, spin).
- Lightweight and easy to use.

## Installation

To install the `react-spinner-toolkit`, use either npm or yarn:

```bash
# Using npm
npm install react-spinner-toolkit

# Using yarn
yarn add react-spinner-toolkit
```

## Usage

To use the React Spinner Toolkit in your React application, follow these steps:

1. **Import the React Spinner Toolkit**

   Start by importing the React Spinner Toolkit from the `react-spinner-toolkit` package:

   ```jsx
   import { Spinner } from "react-spinner-toolkit";
   ```

2. **Add the Spinner to Your Component**

   You can then include the Spinner in your component's render method. Here's a simple example:

   ```jsx
   function App() {
     return (
       <div style={{ textAlign: "center", margin: "50px" }}>
         <h1>Loading...</h1>
         <Spinner
           size={60}
           color="#007aff"
           loading={true}
           animationType="bounce"
           shape="circle"
         />
       </div>
     );
   }
   ```

   In this example:

   - The `size` prop sets the size of the spinner to 60 pixels.
   - The `color` prop specifies the spinner's color as `#007aff`.
   - The `loading` prop indicates that the spinner should be displayed.
   - The `animationType` prop is set to `bounce`, creating a bouncing animation effect.
   - The `shape` prop defines the spinner's shape as a circle.

## Props

The React Spinner Toolkit accepts the following props:

| Prop            | Type      | Description                                                     |
| --------------- | --------- | --------------------------------------------------------------- |
| `size`          | `number`  | The size of the spinner (in pixels).                            |
| `color`         | `string`  | The color of the spinner (CSS color format).                    |
| `loading`       | `boolean` | Controls the visibility of the spinner.                         |
| `animationType` | `string`  | The type of animation for the spinner (`bounce`, `spin`, etc.). |
| `shape`         | `string`  | The shape of the spinner (`circle`, `square`, etc.).            |

## Contributing

Contributions are welcome! If you have suggestions or improvements, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
