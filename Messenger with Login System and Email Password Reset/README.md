# Messenger with Login System and Email Password Reset

Satoshi Ishida
<br><br>

## Objectives

**Features:** user registration, user login, email password reset link, password reset, search for contact using email and chat.\
**Includes:** input validation, database querying, one-way hashed user credentials, unique tokens for password reset link and password reset expiry (1 hour).\
On registration or logging in, a user initiates a chat by searching for a contact's email address and starts a chat with that contact if they are registered.
<br><br><br>

## Type of Software

Web Application
<br><br><br>

## Languages and Frameworks

Frontend: React.js\
Backend: Node.js\
SCSS
<br><br><br>

## APIs and Libraries Used

@ungap/url-search-params, axios, bcrypt, bcryptjs, body-parser, cors, express, firebase, nanoid, node-emoji, nodemailer.\
React Testing Library - this focuses on tests that closely resemble how the application is interacted with.
<br><br><br>

## Testing

- Unit Testing
- Integration Testing
- Non-functional Testing - Understandability, Usability, Modifiability, Reliability, Accessibility
  <br><br><br>

# Requirements & Specification

## Access Requirements:

A web browser and a local server. If the application is released then the Messenger Application is accessed in a web page.
<br><br><br>

## Functional Requirements:

**C1** - Signup Screen: The user should be able to sign up and create an account.\
**C2** - Login Screen: The user should be able to login if they already created an account.\
**C3** - 'Need Help Logging In?' Screen: The user should be able to type in their email address and receive their ID and a password reset link in an email, or return to the login screen.\
**C4** - Contacts Screen: The user should be able to search for a contact's email address, or return to the login screen.\
**C5** - Chat Screen: 2 users should be able to chat, with their messages persisting and use functional buttons.\
**C6** - Database: This is applied in the Backend and should store the hashed user credentials and chat logs.
<br><br><br>

## Non-functional Requirements:

**Usability** - It should be easy for the user to interact with elements on screen and navigate to the chat. The user should find the content understandable.\
<br>
**Reliability** - The software should consist of separate components that each work correctly and that work correctly when integrated within each screen.\
<br>
**Performance** - The code should be optimised to minimise algorithm running times for the fastest performance possible. Assets should be processed accordingly to maximise application loading times.\
<br>
**Security** - The user data stored in the database should be hashed and have correct user access controls set.\
<br>
**Architecture Patterns** - The application should utilise the correct software design patterns and techniques provided by the framework and language in use.\
<br>
**Separation of Concerns** - The application should be composed of separate components that can be updated and tested separately.\
<br>
**Testing** - Unit testing should be applied to each component and Integration testing should be applied to Screens containing integrated components.
<br><br><br>

## Specification:

**C1** - Signup Screen: Contains inputs for 'User ID', 'Name', 'Email' and 'Password' with input validation for Name/Email/Password. The password input is hidden with the option to view plaintext. A 'Sign Up' button to send the user details to the database hashed. A 'Or Login' button to enter the Login Screen if they already have an account.\
<br>
**C2** - Login Screen: Contains inputs for 'User ID' and 'Password' with input validation for Password. The password input is hidden with the option to view plaintext. A 'Login' button to log the user in. A 'Need help logging in?' link to enter the 'Need Help Logging In?' Screen.\
<br>
**C3** - 'Need Help Logging In?' Screen: Contains an input field to type in their email address and a 'Send' button to receive an email containing their ID and a password reset link. Also, a 'Back' button to return to the Login Screen.\
<br>
**C4** - Contacts Screen: Contains an input field to search for a contact’s email address if the user is registered with the application. A ‘Start Chat’ button for the user to enter the Chat Screen. Also, a 'Back' button to return to the Login Screen.\
<br>
**C5** - Chat Screen: Contains a text area containing the 2 node chat in the format ‘userID/message/time'. A user input field with a ‘Send’ button to send chat logs to the database. A 'Delete last message' button to delete the last message and a 'Delete all messages' button to delete all messages. Also, a 'Sign Out' button.\
<br>
**C6** - Database: Stores user data hashed with correct access controls set.\
This implementation only has the user details hashed to demonstrate a security implementation for the most important data. If this were a commercial product, then the chat logs could also be easily encrypted within the database.
<br><br><br>

## Security:

Environment variables are used to separate the sender's email username/email and password credentials from the code for security reasons.\
<br>
You also want to send a 'reset password link' rather than the password in an email. This is because the user might not have tried to reset their password. The password also should not be sent in a plaintext email that could be read on an unsecure network. Furthermore, it is not secure to have the password stored within the user's email client.
<br><br><br>

# Design

## System Architecture

**Presentation Layer** - UI/UX design.\
**Logic Layer** - Application’s functions.\
**Data Management Layer** - Real-time database for user login data.
<br><br><br>

## Ideas for Future Work

If this was a commercial product:\
Image / video / file sharing.\
Group chats.
<br><br><br>

# Main Screens

## Chat States in 1 image.

![Chat States](https://github.com/SatoshiJIshida/projects/blob/main/Messenger%20with%20Login%20System%20and%20Email%20Password%20Reset/screens/chat_states.png)

## Form States in 1 image.

![Form States](https://github.com/SatoshiJIshida/projects/blob/main/Messenger%20with%20Login%20System%20and%20Email%20Password%20Reset/screens/form_states.png)

## Hashed Data

![Hashed Data](https://github.com/SatoshiJIshida/projects/blob/main/Messenger%20with%20Login%20System%20and%20Email%20Password%20Reset/screens/hashed_data.png)

## Email Reset Link

![Email Reset Link](https://github.com/SatoshiJIshida/projects/blob/main/Messenger%20with%20Login%20System%20and%20Email%20Password%20Reset/screens/email_reset_link.png)

## Intellectual Property

Owner: Satoshi Ishida
