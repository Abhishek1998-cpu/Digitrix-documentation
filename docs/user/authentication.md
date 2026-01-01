---
sidebar_position: 1
---

# User Authentication

Learn how user authentication works in DulyPlan.

## What is Authentication?

Authentication is the process of verifying who you are when you log into DulyPlan. It's like showing your ID card to prove you are who you say you are.

## How Authentication Works

### Step 1: Create an Account

When you sign up for DulyPlan:

1. **Enter Your Details**
   - Your email address
   - A password
   - Your name

2. **Account Creation**
   - DulyPlan creates your account
   - An organization is automatically created for you
   - You become the owner of that organization
   - Your account is set to "FREE" tier by default

3. **Email Verification**
   - A verification email is sent to your inbox
   - You must click the link in the email to verify your account
   - Until you verify, you cannot log in

### Step 2: Verify Your Email

1. Check your email inbox
2. Find the email from DulyPlan
3. Click the verification link
4. Your account is now verified and ready to use

### Step 3: Login

Once your email is verified:

1. Go to the login page
2. Enter your email and password
3. DulyPlan checks your credentials
4. If correct, you're logged in and redirected to the dashboard

## Authentication Methods

### Email & Password Login

The standard way to log in:
- Enter your registered email
- Enter your password
- Click "Log In"

### OAuth Login (Social Login)

You can also log in using your social media accounts:

- **Google Login** - Sign in with your Google account
- **Facebook Login** - Sign in with your Facebook account

When you use OAuth:
- No password needed
- Your account is created automatically if it doesn't exist
- You're logged in immediately after authorization

## What Happens When You Log In?

1. **Token Creation**
   - DulyPlan creates a special token (JWT - JSON Web Token)
   - This token contains your user information (name, email, UUID, organization ID)
   - It's like a digital ID card that proves you're logged in
   - It's stored in your browser as a cookie named `token`

2. **Session Management**
   - The token is automatically sent with every request you make
   - DulyPlan checks this token to verify you're still logged in
   - You stay logged in until you:
     - Manually log out
     - Clear your browser cookies
     - The token expires (after a certain time)

3. **Access Granted**
   - You can now access all features
   - Your data is loaded based on your organization
   - You can create posts, schedule content, manage accounts, etc.
   - All your actions are linked to your organization

## Security Features

### Password Protection

- Passwords are encrypted before being stored
- Your actual password is never stored in the database
- Only a secure hash (encrypted version) is saved

### Email Verification

- Prevents fake accounts
- Ensures you have access to the email you registered
- Required before you can use the platform

### Secure Tokens

- Login tokens are encrypted
- They expire after a certain time
- They're only valid for your account

## Logging Out

When you log out:
- Your login token is removed
- You're redirected to the login page
- You'll need to log in again to access your account

## Troubleshooting

### Can't Log In?

- **Check Email Verification** - Make sure you've verified your email
- **Check Password** - Ensure you're using the correct password
- **Try Password Reset** - Use "Forgot Password" if needed

### Email Not Received?

- Check your spam folder
- Wait a few minutes
- Use "Resend Verification Email" if available

## Technical Details (For Developers)

### How It Works Behind the Scenes

1. **Registration Process**
   ```
   User enters email/password → Backend validates → 
   Creates User in database → Creates Organization → 
   Links User to Organization → Sends verification email
   ```

2. **Login Process**
   ```
   User enters credentials → Backend verifies → 
   Checks email verification → Creates JWT token → 
   Sets cookie → Returns user data
   ```

3. **Token Structure**
   - Contains: user UUID, email, name, organization ID
   - Signed with a secret key
   - Includes expiration time
   - Sent as HTTP-only cookie (in production)

4. **Authentication Middleware**
   - Every protected route checks for the token
   - If token is valid → Request proceeds
   - If token is missing/invalid → Redirect to login

## Next Steps

- **[User Roles & Permissions](./roles-permissions)** - Understand how user roles work
- **[Account Management](./account-management)** - Manage your account settings

