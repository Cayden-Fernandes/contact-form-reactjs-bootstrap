Clone the Repository
Open your terminal (Command Prompt, PowerShell, macOS Terminal) and run:
git clone https://github.com/your-username/your-repository-name.git
Move into the project folder:
cd your-repository-name
2. Install All Dependencies
Run:
npm install
This installs React, Bootstrap, EmailJS, and all required packages listed in package.json.
If Bootstrap is not included in package.json, run:
npm install bootstrap
If EmailJS browser is not included, install it:
npm install @emailjs/browser
3. Start the Project Locally
Run:
npm start
The app will run at:
http://localhost:3000/
4. Connect Your Own EmailJS Account
Anyone using your project must add their own EmailJS details.
Step 1 — Create a free EmailJS account
https://www.emailjs.com
Step 2 — Create a new email service
Copy your Service ID
Step 3 — Create an email template
Copy your Template ID
Step 4 — Copy your Public Key
5. Add Your EmailJS Keys to the Project
Open:
src/pages/Contact.js
Find this section:
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  formRef.current,
  "YOUR_PUBLIC_KEY"
)
Replace the placeholders with your real details:
emailjs.sendForm(
  "service_xxxxxx",
  "template_xxxxxx",
  formRef.current,
  "public_xxxxxx"
)
6. Done! Test the Contact Form
Fill in the form → click Send → you should receive the email in your mailbox that you connected in EmailJS.
