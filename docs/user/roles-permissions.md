---
sidebar_position: 2
---

# User Roles & Permissions

Understand how user roles and permissions work in DulyPlan.

## How Roles Work in DulyPlan

DulyPlan uses a **simple organization-based system** instead of traditional roles like "Admin" or "User". Here's how it works:

## The Organization Model

### When You Sign Up

1. **You Get Your Own Organization**
   - When you create an account, DulyPlan automatically creates an organization for you
   - The organization is named after you (e.g., "John's Org")
   - You become the **owner** of this organization

2. **You Are the Owner**
   - As the owner, you have full control
   - You can create posts, schedule content, manage accounts
   - You have access to all features in your organization

### Organization Ownership

**Owner = Full Access**
- The person who created the organization
- Has complete control over the organization
- Can manage all posts, accounts, and settings

**Currently:**
- Only one person can be the owner of an organization
- All data belongs to the organization
- Access is based on organization ownership

## What This Means for You

### As a New User

When you sign up:
- ✅ You get your own organization
- ✅ You become the owner automatically
- ✅ You have full access to all features
- ✅ You can create unlimited posts (within tier limits)

### Access Control

**How DulyPlan Decides What You Can Do:**

1. **Are You Logged In?**
   - If yes → You can access the platform
   - If no → You need to log in first

2. **Do You Own the Organization?**
   - If yes → You can do everything
   - If no → Access may be limited (future feature)

## Subscription Tiers (Not Roles)

DulyPlan has **subscription tiers**, which are different from roles:

- **FREE** - Basic features, limited usage
- **TIER1** - More features and higher limits
- **TIER2** - Even more features
- **TIER3** - Maximum features and limits

**Important:** Tiers are about **what features you can use**, not about **what you can access**. All users in the same tier have the same features available.

## Current System Limitations

### What's Missing

- ❌ No "Admin" or "Member" roles
- ❌ No team member invitations (yet)
- ❌ No permission levels (view-only, edit, delete)
- ❌ No multi-user organizations with different access levels

### What Exists

- ✅ Organization ownership
- ✅ User authentication
- ✅ Organization-based data isolation
- ✅ Subscription tiers for features

## How It Works Technically

### Behind the Scenes

1. **User Account (Database)**
   - Stores: name, email, password (encrypted), UUID, organization ID
   - **Important:** No "role" field exists in the database
   - Your role is determined by your relationship with the organization

2. **Organization (Database)**
   - Stores: organization name, owner ID (your user ID)
   - The `owner_id` field links you to your organization
   - This is how DulyPlan knows you're the owner

3. **Access Check Process**
   When you try to do something, DulyPlan checks:
   ```
   Step 1: Is there a valid login token? 
   → If no: Redirect to login
   
   Step 2: Does the user own the organization?
   → Check: Is user._id === organization.owner_id?
   → If yes: Allow access
   → If no: Deny access (or limited access in future)
   ```

4. **Data Isolation**
   - All your posts, accounts, and data are linked to your organization ID
   - When you access data, DulyPlan filters by: `organization_id = your_org_id`
   - This ensures you only see your own data

## Future Possibilities

The system is designed to support:
- Adding team members to organizations
- Different permission levels
- Role-based access control (Admin, Editor, Viewer)
- Multi-user collaboration

## Simple Summary

**Think of it like this:**
- You sign up → You get your own "company" (organization)
- You're the "boss" (owner) of that company
- You can do everything in your company
- Your data is separate from other users' data
- There's no "employee" or "manager" role yet - just you as the owner

## Database Structure (Simple Explanation)

### User Table
```
- Your name
- Your email  
- Your password (encrypted)
- Your unique ID (UUID)
- Your organization ID
- Email verification status
- Subscription tier (FREE, TIER1, etc.)
```

### Organization Table
```
- Organization name
- Organization ID
- Owner ID (your user ID) ← This makes you the owner
```

### The Connection
- Your `user.org_id` = `organization.org_id`
- Your `user._id` = `organization.owner_id`
- This connection gives you full access

## Next Steps

- **[Account Management](./account-management)** - Manage your account and organization
- **[Authentication](./authentication)** - Learn about login and security

