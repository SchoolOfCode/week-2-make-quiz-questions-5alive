// questions.js

const questions = [
  {"question_text" : "What is the command you would enter into the terminal to check the contents of the directory you're in?"}, 
  {"question_text" :"Which one of these behaviors is not part of a high performance routine?"} , 
  {"question_text" :"What does GAN stand for?"} , 
  {"question_text" :"Which one of these is not a key value of the Agile manifesto?"} , 
  {"question_text" :"Which one of these was not a room in the disney ideation process?"} , 
  {"question_text" :"Select the correct words to complete the following sentence - Neurons that ____ together _____ together "} , 
  {"question_text" :"In computational thinking, between understanding the problem and writing an algorithm, which of the follwoing is not one of the three steps?"} , 
  {"question_text" :"What is the correct git command to check whether you latest pull has the latest changes from the remote repository?"} , 
  {"question_text" :"Which of the following characters was not a part of Chris's git memory palace "} , 
  {"question_text" :"How often should you compare yourself to others?"}
  
];

/*1. Clone this repository
2. Navigate to the `questions.js` file
3. Create at least 10 multiple choice questions about concepts from Week 1

1.What is the command you would enter into the terminal to check the contents of the directory you're in?
ls , pwd, log, cd

2.Which one of these behaviors is not part of a high performance routine?
preperation, focus, recovery, reflection

3.What does GAN stand for?
Great And Noble, Generative Adversarial Network, General Advisory Network, GIT Accumulation Node

4.Which one of these is not a key value of the Agile manifesto?
Individuals and interactions over processes and tools
Working software over comprehensive documentation
Customer interpretation over contract law
Responding to change over following a plan

5.Which one of these was not a room in the disney ideation process?
Dreamer room
Realist room
Engineer room
Critic room

6. Select the correct words to complete the following sentence - Neurons that ____ together _____ together 
-Fire/Wire
-Think/Link
-Wire/Fire
-Link/Think 

7. In computational thinking, between understanding the problem and writing an algorithm, which of the follwoing is not one of the three steps?
Break It Down
Look for Patterns
Debugging 
Abstract Away

8. What is the correct git command to check whether you latest pull has the latest changes from the remote repository?
Git log
Git status 
Git Pull
Git Push

9. Which of the following characters was not a part of Chris's git memory palace 
A stick
A smurf
A checkout person
A tiger 

10. How often should you compare yourself to others?
Sometimes 
Every 30 minutes 
Once a day
Never 



4. Your questions should be added to the `questions` array as objects following the schema below

## Question Schema

Each question should be an object with the following properties:

1. **question_text**: This is a string that contains the text of the question you want to ask.
2. **question_type**: This should always be the string "multiple_choice" for this task.
3. **options**: This is an array of strings, where each string is a possible answer to the question. You should provide four options.
4. **correct_option**: This is a number that represents the index of the correct answer in the options array. The index is 0-based, meaning the first option is 0, the second is 1, and so on.
5. **correct_explanation**: This is a string that explains why the correct answer is correct. This helps learners understand the reasoning behind the answer.*/





// Don't worry about this, we're just exporting the questions
module.exports = questions;
