const questions = [
    {"question_text" : "What is the command you would enter into the terminal to check the contents of the directory you're in?",
      "question_type": "multiple_choice", "options": ["ls" , "pwd", "log", "cd"],
    }
]

console.log("Hello there!")

console.log(questions[0].options.at(1));