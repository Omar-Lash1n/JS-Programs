var score = prompt("Enter Your score to Calculate GPA:");

if(score <= 100 && score >= 90){
    document.write("Your Grade is A+")
}
else if(score < 90 && score >= 80){
    document.write("Your Grade is B+")
}
else if(score < 80 && score >= 50){
    document.write("Your Grade is C+")
}
else if(score < 50){
    document.write("Your Failed")
}
else{
    document.write("Undefined score")
}