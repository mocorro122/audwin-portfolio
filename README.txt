PORTFOLIO WEBSITE

Open index.html in a browser to preview the website.

Files:
- index.html
- process.html
- testimonials.html
- contact.html
- style.css
- script.js

Asset folders:
- assets/images
- assets/videos
- assets/icons
- assets/projects

To replace placeholders:
1. Search the HTML and JavaScript for comments beginning with "Replace this dummy".
2. Replace placeholder image URLs with local paths such as assets/projects/project-01.jpg.
3. Add your MP4 files to assets/videos and use the same filenames referenced in script.js, or update the paths.
4. Replace contact information and social links in contact.html.
5. Connect the contact form to Formspree, EmailJS, or your preferred backend.

MULTI-IMAGE PROJECT GALLERY
For UI/UX, Graphic Design, and Social Media projects, each project now includes an "images" array in script.js.
Replace the placeholder URLs with your own image paths, for example:

images: [
  "assets/images/uiux/project-01/screen-01.jpg",
  "assets/images/uiux/project-01/screen-02.jpg",
  "assets/images/uiux/project-01/screen-03.jpg"
]

The first image in the array appears when the modal opens. Visitors can browse with Previous/Next buttons, keyboard arrow keys, thumbnail clicks, or mobile swipe. Clicking the main image or zoom button opens a larger view.
