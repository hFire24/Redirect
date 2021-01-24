const jcQuotes = ["1.01<sup>365</sup> = 37.8<br>0.99<sup>365</sup> = 0.03", //Page 15
"You do not rise to the level of your goals. You fall to the level of your systems.", //Page 27
"True behavior change is identity change.", //Page 34
"Every action you take is a vote for the type of person you wish to become.", //Page 38
"The people who don’t have their habits handled are often the ones with the least amount of freedom.", //Page 46
"The process of building a habit can be divided into four simple steps: cue, craving, response, and reward.", //Page 47
"What you crave is not the habit itself but the change in state it delivers.", //Page 48
"Want to start a good habit? Make it obvious.", //First Law
"Become aware of your habits. Identify which habits are good, and which are bad.", //Page 62
"Check out <a href='https://s3.amazonaws.com/jamesclear/Atomic+Habits/The+Habits+Scorecard.pdf'>The Habits Scorecard</a>! RescueTime and iOS Screen Time can help you with that.", //Pages 62-64
"Plan your week using Implementation Intention.", //Implementation Intention
"For good habits, determine where, when (day and time), and how you're going to do them.", //Implementation Intention
"I will [action] for [duration] at [time] in [location].", //Implementation Intention
"If implementation intentions aren't working, add plans to ensure that these actions will be done.", //Coping plans
"I will [action] for [duration] at [time] in [location]. And if I can't do it, I'll do it at [time]/in [location].", //Implementation Intention 2
"I will [action] for [duration] at [time] in [location]. And if I don't feel like doing it, I'll do just a little.", //Implementation Intention 3
"One of the best ways to build a new habit is to identify a current habit you already have and then stack your new behavior on top.", //Page 74
"After I [current habit], I will [new habit].", //Fogg's habit stacking formula
"Prime your environment by making cues of good habits obvious.", //Chapter 6
"If you want to make a habit a big part of your life, make the cue a big part of your environment.", //Page 86
"You can train yourself to link a particular habit with a particular context.", //Page 88
"Divide your room into activity zones. Every habit should have a home.", //Page 89
"Prime your environment to eliminate bad habits.",
"Want to resist a bad habit? Make it invisible.", //Inverse of the First Law
"Want to keep a good habit alive? Make it attractive.", //Second Law
"Want to quit a bad habit? Make it unattractive.", //Inverse of the Second Law
"Want to make a good habit? Make it easy.", //Third Law
"Want to end a bad habit? Make it difficult.", //Inverse of the Third Law
"Want to enjoy a good habit? Make it satisfying.", //Fourth Law
"Want to get rid of a bad habit? Make it unsatisfying.", //Inverse of the Fourth Law
"Identify cues that cause bad habits.", //First Law Bonus Material
"Perform a habit early in the day rather than later in the day.", //Second Law Bonus Material
"Eliminate, automate, or streamline certain behaviors of a given habit.", //Third Law Bonus Material
"Rather than focusing on the results of a habit, focus on how it makes you feel." //Fourth Law Bonus Material
];

//Quotes that should help me stop my DeviantArt habit.
const deviantart = ["1.01<sup>365</sup> = 37.8<br>0.99<sup>365</sup> = 0.03", //Page 15
"You do not rise to the level of your goals. You fall to the level of your systems.", //Page 27
"True behavior change is identity change.", //Page 34
"Every action you take is a vote for the type of person you wish to become.", //Page 38
"The people who don’t have their habits handled are often the ones with the least amount of freedom.", //Page 46
"What you crave is not the habit itself but the change in state it delivers.", //Page 48
"Prime your environment to eliminate bad habits.",
"Want to resist a bad habit? Make it invisible.", //Inverse of the First Law
"Want to quit a bad habit? Make it unattractive.", //Inverse of the Second Law
"Want to end a bad habit? Make it difficult.", //Inverse of the Third Law
"Want to get rid of a bad habit? Make it unsatisfying.", //Inverse of the Fourth Law
"Identify cues that cause bad habits." //First Law Bonus Material
];

function jamesClearQuote(array,index) {
  if (index < 0 || index >= array.length)
    index = Math.floor(Math.random() * array.length)
  $("message").innerHTML = array[index];
  //Put index value to the console
  console.log("Quote " + index);
  //If the message is too long, this fires up.
  if(actualLength() > 200) {
    $("message").classList.add("tiny");
    $("message").classList.remove("small");
  }
  else if(actualLength() > 90) {
    $("message").classList.add("small");
    $("message").classList.remove("tiny");
  }
  else {
    document.getElementById("message").classList.remove("small");
    document.getElementById("message").classList.remove("tiny");
  }
}

randomTheme(7);
messageComplete = false;
var input = $("lifeAdvice");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    submit();
  }
});

function submit()
{
  if(found(["cirno"],lifeAdvice.value.toLowerCase()))
    location.href = "cirno.html";
  $("form").innerHTML = $("lifeAdvice").value;
  messageComplete = true;
}
