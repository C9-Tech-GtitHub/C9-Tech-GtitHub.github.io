# C9 Tech Toolbox

This repository contains simple HTML tools for e-commerce tasks. Each page works as a standalone tool that can be opened directly in a web browser.

## Available Tools

- **index.html** – Home page with links to all tools.
- **title-analyzer.html** – Product Title Structure Analysis Dashboard.
- **reviewer.html** – AI Suggestion Reviewer for processing product attributes.

## How to Use

1. Clone or download this repository.
2. Open the desired `.html` file in your browser by double-clicking it or dragging it into the browser window. You can start with `index.html` to navigate to the other tools.

These tools are static HTML files and do not require a backend server.

## External Dependencies

The tools use a few scripts loaded from public CDNs:

- [Chart.js](https://cdnjs.com/) for charts in `title-analyzer.html`.
- [PapaParse](https://cdnjs.com/) for CSV parsing in `title-analyzer.html` and `reviewer.html`.
- [Moment.js](https://cdnjs.com/) for date handling in `title-analyzer.html`.

Because these scripts are loaded from the internet, you will need an internet connection when you open the HTML files. If you need offline access, download these libraries and update the script tags accordingly.
