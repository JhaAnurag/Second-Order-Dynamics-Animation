# Second Order Dynamics Animation

This project is a simple web-based demo that visualizes second-order dynamics using JavaScript and HTML. A follower smoothly tracks a target point using a physics-based motion model.

## Features
- Smooth motion following using second-order dynamics.
- Adjustable parameters for frequency (f), damping (z), and response (r).
- Real-time updates using sliders and input fields.
- Minimalistic UI with interactive controls.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)

## How It Works
- The target follows the mouse position.
- The follower moves towards the target using a second-order dynamic system.
- Users can adjust:
  - **Frequency (f):** Controls how fast the follower responds.
  - **Damping (z):** Controls overshoot and oscillations.
  - **Response (r):** Controls acceleration response.

## Usage
1. Open `index.html` in a browser.
2. Move the mouse to see the circle move.
3. Adjust the control sliders to see the effect on motion.

## License
This project is open-source and available for use under the MIT License.

# Roadmap
1. Refactor to allow easy use with different frameworks.
2. Optimize performance & animations in case of framedrops.
