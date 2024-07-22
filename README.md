# Video Calling App

A modern video calling application built with React, featuring real-time video communication and room management. This app uses ZEGOCLOUD for video call functionalities and allows users to start video calls with a randomly generated Room ID.

## Features

- **Generate Room ID**: Create a unique Room ID to start a video call.
- **One-on-One Call**: Initiate a direct video call with another participant.
- **Group Call**: Start a video call with multiple participants.
- **Responsive Design**: Fully responsive UI for seamless use on various devices.
- **Real-Time Communication**: Utilize ZEGOCLOUD for real-time video communication.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **JavaScript**: Programming language used for the application logic.
- **CSS**: Styling language for designing the application layout.
- **ZEGOCLOUD**: Real-time video communication service for video call functionalities.

## Getting Started

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn
- ZEGOCLOUD API Key (for video call functionality)

### Installation

1. Clone the repository:

   ```bash
  [ git clone https://github.com/your-username/video-calling-app.git](https://github.com/abhyudy/Video_Call_App.git)

   ```

2. Navigate to the project directory:

bash
Copy code
cd video-calling-app

3. Install the dependencies:

bash
Copy code
npm start

4. Create a .env file in the root directory and add your ZEGOCLOUD API key:

env
Copy code
ZEGOCLOUD_APP_ID=your_app_id
ZEGOCLOUD_APP_CERTIFICATE=your_app_certificate

5. Start the development server:

bash
Copy code
npm start

# or

yarn start
The application will be available at http://localhost:3000.

### Usage

1. Open the application in your browser.
2. Click the "Generate" button to create a Room ID.
3. Use the generated Room ID to start a One-on-One or Group Call.

### File Structure

- src/Components/HomePage.js: Main - component for the homepage, including room ID generation and call buttons.

- src/Components/Navbar.js: Navigation bar component displaying the app name and current time.

- src/Components/Room.js: Component for handling video call sessions using ZEGOCLOUD.

### Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Create a new Pull Request.

## Contact

For any questions or inquiries, please contact me at [abhyudyasinghujala2002@gmail.com](mailto:abhyudyasinghujala2002@gmail.com).
