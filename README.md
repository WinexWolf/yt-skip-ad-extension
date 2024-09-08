# YouTube Skip Ad Extension

A Chrome extension that automatically detects and clicks the "Skip Ad" button on YouTube, so you don't have to!

## Features
- Automatically detects and clicks the "Skip Ad" button on YouTube videos.
- Works in the background once installed and enabled.
- No manual intervention required, just install and let it skip ads for you!

## Project Structure
- **manifest.json**: The manifest file that defines the extension's permissions, scripts, and other metadata.
- **content.js**: The main logic for detecting and clicking the "Skip Ad" button.
- **icon.png**: (Optional) Icon for the extension.

## Installation and Setup

### Prerequisites
- **Google Chrome** browser installed on your computer.

### Steps to Install the Extension Locally
1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner of the page.
4. Click **Load unpacked** and select the folder where this extension is stored.
5. The extension will be loaded into Chrome and will automatically start running on YouTube.

### Usage
1. Once the extension is installed, go to [YouTube](https://www.youtube.com).
2. Play any video that has ads.
3. The extension will automatically detect the "Skip Ad" button and click it for you.
4. You can verify the extension is working by checking the console for the "Ad skipped" message. To open the console, press `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (macOS) to open Chrome DevTools.

## Development

### Setting Up the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/WinexWolf/yt-skip-ad-extension.git
