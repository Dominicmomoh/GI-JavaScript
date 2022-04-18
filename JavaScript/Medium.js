// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. 
// Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

const Apple = prompt("please type something")
if(Apple === Apple.toLowerCase()){
    console.log("Whispering")
} else if(Apple === Apple.toUpperCase()){
    console.log("Shouting")
} else console.log("neither")