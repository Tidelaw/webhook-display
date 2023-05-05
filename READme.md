# **Helius Webhook Showcase**


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

# **Building the app**

First, you'll need to navigate to the webhook section of the Helius Developer Portal, and create a webhook, inputting the account address that you wish to track. In this example (that will be used in the code and for production), we are tracking an address on the Mainnet, with **enhanced** data unique to Helius, 

![[webhook]](/demo-images/setup_webhook.png)
