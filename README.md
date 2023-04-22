
# Welcome to PuzzleArena 
Developed By Mohak Bansal for eLitmus Summer Internship  final round of the selection process before the interviews - The Assignment Round.

PuzzleArena is a web-based platform for Solving Interactive Puzzles, PuzzleArena offers a wide range of puzzles to cater to your interests and skill levels, providing an opportunity to learn new things and stimulate your brain. It also helps to improve your cognitive abilities, mental agility, and problem-solving skills. Overall, a Puzzle Arena is a valuable resource that can provide a challenging and rewarding experience that benefits your overall well-being.

Our mission is to provide a fun and challenging way for people to exercise their brains and improve their cognitive skills, provide a diverse range of puzzles, including crosswords, Sudoku, logic puzzles, jigsaw puzzles, and more, to cater to different interests and skill levels.





## Features Implemented

- Anyone with an email address can create an Id and password to participate in the game.

- The puzzle contains More than 5 clues, 2 dead-ends & 1 solution.

- All the progress / user data (eg - time taken by each user for every step, solution accuracy, etc.) depending on the puzzle requirements is stored for every user.

- On refreshing, from either browser or website, the puzzle start from the same step or give the user an option to restart.

- A dashboard for the admin where the progress of all the users can be tracked & analyzed.

- Enforced robust authorization features, created an interactive Leaderboard, and integrated multiple APIs to efficiently execute user-submitted solutions. Leveraged MongoDB to organize and store crucial user, admin, and submission information.

## Soft Skills assessed by the puzzles

- #### Guess the Word - if user can guess the word correctly, He will get full marks in the below mentions options else he will be marked according to the correct no of letters user has guesses and the position of letters.  

Critical Thinking: Guessing the word requires you to think outside the box and come up with creative solutions. You need to be able to analyze clues, identify patterns, and make connections to arrive at the correct answer.

Patience: Sometimes, it can be challenging to guess the word correctly. Patience is essential as you work through the clues and eliminate incorrect guesses.

Perseverance: Even if you don't get the word right on the first try, it's essential to keep trying until you find the correct answer. This requires perseverance and a willingness to keep trying, even when it seems challenging.

- #### Sliding Puzzle - If user is able to solve the Puzzle he will be given full marks and marks will also depend on the time takes in the user.

Spatial reasoning: The sliding puzzle requires you to manipulate objects in space, which can help develop your spatial reasoning skills. This skill can be useful in fields such as engineering, architecture, and design.

Problem-solving: Sliding puzzles require you to solve a problem by arranging the tiles in the correct order to form the desired image. This skill can be applied to other areas of life where you need to find solutions to problems.

- #### Sodoku-oduku - User will be judged on the basis of time and his ability to solve the puzzle correctly.

Logical Reasoning: Sudoku puzzles require logical reasoning and deduction to solve. You need to be able to analyze the clues and use deductive reasoning to fill in the missing numbers.

Attention to Detail: Paying attention to details is crucial in Sudoku puzzles. You need to be meticulous in your approach, double-checking your answers and ensuring that the numbers you input are correct.

Problem Solving: Sudoku puzzles are essentially a series of problems to be solved. You need to be able to approach the problem systematically, breaking it down into smaller parts and working through each part methodically.

- #### Test your Memory - As the user will clear the Levels, eventually it will be difficult at higher levels so user will be judged on the basis of how many levels he has passed succesfully.

Focus and Concentration: The Memory Puzzle game requires a high level of focus and concentration. You need to be able to pay attention to the images or patterns displayed and remember their location.

Visual Memory: The ability to remember visual information is crucial in the Memory Puzzle game. You need to be able to create a mental image of the puzzle pieces and their location to solve the puzzle successfully.

- #### Treasure Hunt - Total 9 question/clues are present, user will be judged on his no of correct answers with/without taking help of clues will be an additional judging parameter.

Cultural Awareness: Since World Heritage Sites often have cultural significance, it's essential to have a basic understanding of the history and culture of the site. This will help you understand the clues and solve the puzzles more effectively.

Critical Thinking: Guessing the word requires you to think outside the box and come up with creative solutions. You need to be able to analyze clues, identify patterns, and make connections to arrive at the correct answer.




## Langing Page..
![App Screenshot](https://user-images.githubusercontent.com/117752286/233800503-79c617aa-a951-4002-bd84-94dfd84db5de.PNG)

## Langing Page Continuation..
![App Screenshot](https://user-images.githubusercontent.com/117752286/233800600-e4145586-854d-4877-ad0b-c554cc3388f1.jpeg)

## Register, Login and Profile..
![App Screenshot](https://user-images.githubusercontent.com/117752286/233800848-a4ec0a40-ab04-4485-b2d6-d9fb210fc23b.PNG)

## Puzzle Page..
![App Screenshot](https://user-images.githubusercontent.com/117752286/233800915-6742a42d-e879-4616-8635-fc725f028921.PNG)
## Tech used

- CSS3, React & TailwindCSS
- bcrypt, jsonwebtoken, arcgis
- Node.js, Express.js
- MongoDB


## Run Locally

Clone the project

```bash
  git clone https://github.com/Jaihanuman64/MBM.Contest
```

Go to the project directory

```bash
  cd MBM.Contest\client
  cd MBM.Contest\server
```

Install dependencies

```bash
  npm install
```
Make the .env file in Client folder and copy paste..

```bash
REACT_APP_SERVER_DOMAIN='http://localhost:8080'
SKIP_PREFLIGHT_CHECK=true
```
Make the config.js file in server folder and copy paste..

```bash
  export default {
    JWT_SECRET : "Your secret",
    EMAIL: "test@gmail.com", 
    PASSWORD : "your password",
    ATLAS_URI: "mongodb+srv://Username:password@cluster0.wh5tsor.mongodb.net/?retryWrites=true&w=majority"
}
```

Start the server

```bash
  npm run start (both separately)
```


## Future plans

- Working on Data Analytic Page where I will show amout of different soft skills possesed by the user using Graphs (Bar, Pie wtc.)



- A thrilling new feature is on its way - Dynamic leaderboards will be unveiled soon, adding an extra level of excitement for all users.



- PuzzleArena is committed to enhancing user experience and reducing rendering time, and I am actively working on upcoming updates to achieve this goal.


## License

All Rights Reserved 2023 @Mohak Bansal.

For support, email mohak64bansal@gmail.com or Call @7014287747.


