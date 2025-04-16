# Gig Worker Sign-Up Form

A standalone HTML/CSS/JavaScript form for gig workers to sign up to join a platform. This form includes basic client-side validation and a thank-you confirmation message.

## Features

- **Clean, Responsive Design**: Works well on both desktop and mobile devices
- **Input Fields**:
  - Full Name (required)
  - Email Address (required, validated format)
  - Skill Category selection (required)
  - Portfolio Link (optional, but validates URL format if provided)
- **Form Validation**: Client-side validation with specific error messages
- **Confirmation Message**: Shows a thank-you screen after successful submission

## Usage

### Quick Start

1. Download the HTML file
2. Open it in any modern web browser
3. No server setup required for the form itself (though you'll need a backend to process submissions)


### Styling

The form uses inline CSS for simplicity. You can customize the appearance by modifying the `<style>` section:

- Change colors by updating color hex codes
- Modify spacing by adjusting padding and margin values
- Change fonts by updating the font-family property

### Form Fields

To add more fields:

1. Add a new `<div class="form-group">` section within the form
2. Include the appropriate label and input elements
3. Add validation logic in the JavaScript section for the new field

### Skill Categories

To modify the available skill categories:

1. Edit the `<option>` elements within the `<select id="skillCategory">` dropdown
2. Each option needs a value attribute and display text
