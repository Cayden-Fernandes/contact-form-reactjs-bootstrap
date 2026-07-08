# React Contact Form with EmailJS

A modern, responsive contact form built with React, Bootstrap, and EmailJS. Messages are sent directly to your email without requiring a backend server.

## Features

- Responsive design
- React Hooks
- Bootstrap 5 styling
- EmailJS integration
- No backend required
- Easy to customize

---

## Technologies Used

- React
- JavaScript (ES6)
- Bootstrap 5
- EmailJS

---

# Getting Started

## 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/your-username/your-repository-name.git
```

Navigate into the project folder:

```bash
cd your-repository-name
```

---

## 2. Install Dependencies

Install all required packages:

```bash
npm install
```

If needed, install Bootstrap:

```bash
npm install bootstrap
```

Install EmailJS:

```bash
npm install @emailjs/browser
```

---

## 3. Start the Application

Run:

```bash
npm start
```

The application will be available at:

```
http://localhost:3000
```

---

# Configure EmailJS

To receive emails, you'll need your own EmailJS account.

## Step 1 — Create an EmailJS Account

Visit:

https://www.emailjs.com

Sign up for a free account.

---

## Step 2 — Create an Email Service

Create a new email service and copy your:

- Service ID

---

## Step 3 — Create an Email Template

Create an email template and copy your:

- Template ID

---

## Step 4 — Get Your Public Key

Copy your:

- Public Key

---

# Add Your EmailJS Credentials

Open:

```text
src/pages/Contact.js
```

Locate this section:

```javascript
const publicKey = "";
const serviceID = "";
const templateID = "";
```

Replace them with your own EmailJS credentials.

Example:

```javascript
const publicKey = "public_xxxxxxxxx";
const serviceID = "service_xxxxxxxxx";
const templateID = "template_xxxxxxxxx";
```

---

# How It Works

When the user submits the form, React sends the form data using EmailJS:

```javascript
await emailjs.send(serviceID, templateID, formData);
```

The submitted data includes:

- Name
- Email
- Message

If the email is sent successfully:

- The button changes to **Message Sent Successfully**
- The form is cleared
- The button resets after 3 seconds

If an error occurs:

- The button displays **Something went wrong**

---

# EmailJS Template Variables

Your EmailJS template should contain these variables:

```
{{name}}

{{email}}

{{message}}
```

These correspond to the React state:

```javascript
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});
```

---

# Project Structure

```
src/
│
├── pages/
│   └── Contact.js
│
├── App.js
│
└── index.js
```

---

# License

This project is licensed under the MIT License.