# Getting Started with My Med List app

## Description 

This is the React client side for My Med List app and should be run along with the server which can be found: 
https://github.com/GurpreetD13/my-med-list-api 

The problem: People often have a hard time remembering the medications they take. 

The solution: My Med List! 

A web application that helps people easily manage their list of medications anywhere, anytime!

Features: Auth on both front and back-ends, a database, controlled react form and an...

Integrated API: Health Canada drug products database.

DIN: 8 digit Drug Identification Number found on every medication bottle in Canada.

The Front-end stack!
- React app
- React-Router-DOM
- Auth: JWT
- Axios
- Sass

## Installation

Open up the root folder and in the terminal run:

### 1. `npm install`

Will install all dependencies: react's depedencies and react-router-dom@5.3, sass, axios.

### 2. `npm start`

Will start the app, enjoy!

### 3. Signup/Login 

You may signup to create a new user or you can login as 1 of the sample users on the server-side
Refer to the server side README.md linked above or for quick reference: 

- username: "User1" password: "sugar"
- username: "User2" password: "heart"

## 4. Example medication DINs

Because you may not have DINs for actual medications nearby to run the app correctly, 
below is a few common medications with their DINs that you can use to test to add to a user: 

- 02172100 levothyroxine 100 mcg for thyroid
- 00878928 amlodipine 5 mg for blood pressure
- 02246624 perindopril 8 mg for blood pressure
- 02099233 metformin 500 mg for diabetes
- 02303922 sitagliptin 100 mg for diabetes
- 02247162 rosuvastatin 10 mg for cholesterol
- 02267233 pantoprazole 40 mg for stomach acid refulx
- 02238682 clopidogrel 75 mg blood thinner
