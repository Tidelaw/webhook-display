# **Helius Webhook Showcase**

## **[Walkthrough](https://tidelaw.notion.site/Helius-Webhook-Showcase-d0f07ef7cd524dddb579a31af2fd13da)**

<br>

**Sneak Peek:**

![[preview]](preview.png)

<br><br>

# **Why would you build this?**

**Webhooks** are a critical component of web development today. It allows developers to receive real-time data about user activities on websites or apps. In this blog post, we will walk you through the process of creating a UI for **Helius's** transaction webhook. 

- We will be using Supabase in order to store the data received from the webhooks
- No other third party app is required.


<br><br>

# **Getting Started:**

**In order to run locally:**


- **Node.js** needs to be installed on your OS
- Clone the **webhook-display** [repo](https://github.com/Tidelaw/webhook-display.git)
- Start the project
    1. Run `npm install` to install all our project's dependencies
    2. Run `npm run dev` to run our application


`npm install` downloads the packages found in **package.json**

`npm run dev` runs the website. The website can now be accessed from `localhost:3000` or `0.0.0.0`

In order for the dAPP to work, a webhook is necessary - in order to set one up, visit 

`https://www.helius.xyz `

<br><br>
