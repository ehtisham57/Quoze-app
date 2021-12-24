

var quizQuestions = [
    {
        num : 1,
        question : "Why so JavaScript and Java have similar name?",
        Option : {
            a : "JavaScript is a stripped-down version of Java",
            b : "JavaScript's syntax is loosely based on Java's",
            c : "They both originated on the island of Java",
            d : "None of the above",

        },
        answer : "JavaScript's syntax is loosely based on Java's"
    },
    {
        num : 2,
        question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        Option : {
            a : "The User's machine running a Web browser",
            b : "The Web server",
            c : "A central machine deep within Netscape's corporate offices",
            d : "None of the above",

        },
        answer :"The User's machine running a Web browser"
    },
    {
        num : 3,
        question : "______ JavaScript is also called client-side JavaScript.",
        Option : {
            a : "Microsoft",
            b : "Navigator",
            c : "LiveWire",
            d : "Native",

        },
        answer : "Navigator"
    }
    ,
    {
        num : 4,
        question : "__________ JavaScript is also called server-side JavaScript.",
        Option : {
            a : "Microsoft",
            b : "Navigator",
            c : "LiveWire",
            d : "Native",

        },
        answer : "LiveWire"
    }
    ,
    {
        num : 5,
        question : "Which of the following are capabilities of functions in JavaScript?",
        Option : {
            a : "Return a value",
            b : "Accept parameters and Return a value",
            c : "Accept parameters",
            d : "None of the above",

        },
        answer : "Accept parameters"
    },
    {
        num : 6,
        question : "Which of the following is not a valid JavaScript variable name?",
        Option : {
            a :"2names",
            b :"_first_and_last_names",
            c : "FirstAndLast",
            d : "111",

        },
        answer :"2names"
    },
    {
        num : 7,
        question :"Which of the following attribute can hold the JavaScript version?",
        Option : {
            a : "LANGUAGE",
            b : "SCRIPT",
            c : "VERSION",
            d : "None of the above",
        },
        answer : "LANGUAGE",
    }
    ,
    {
        num : 8,
        question : "The correct sequence of HTML tags for starting a webpage is",
        Option : {
            a : "Head, Title, HTML, body",
            b : "HTML, Body, Title, Head",
            c : "HTML, Head, Title, Body",
            d : "HTML, Title , Head,  Body",

        },
        answer : "HTML, Head, Title, Body"
    },{
        num : 9,
        question : "Which of the following can't be done with client-side JavaScript?",
        Option : {
            a :"Validating a form",
            b : "Sending a form's contents by email",
            c : "Storing the form's contents to a database file on the server",
            d : "None of the above",

        },
        answer : "Storing the form's contents to a database file on the server"
    },
    {
        num : 10,
        question :"What are variables used for in JavaScript Programs?",
        Option : {
            a :"Storing numbers, dates, or other values",
            b :"Varying randomly",
            c :"Causing high-school algebra flashbacks",
            d :"None of the above",

        },
        answer : "Storing numbers, dates, or other values"
    }
]


/////////////////Question answer


var quizStartBtn = document.getElementsByClassName('quizStartBtn');
var quizForm = document.getElementsByClassName('quizForm');
var quizBtn = document.getElementById("quizBtn");


var setUserName = document.getElementById("setUserName")
var setEmail = document.getElementById("setEmail")

function onSubmit(){
    var FormName = document.getElementById('FormName');
    var FormEmail = document.getElementById('FormEmail');
    var FormCell = document.getElementById('FormCell');
    var FormSchool = document.getElementById('FormSchool');
    var FormNameError = document.getElementById("FormNameError")
    var FormEmailError = document.getElementById("FormEmailError")
    var FormCellError = document.getElementById("FormCellError")
    var FormSchoolError = document.getElementById("FormSchoolError")

    if(FormName.value !=""){
        if(!(FormName.value.length < 3) ){
            FormNameError.innerHTML = ""
            FormName.style.borderBottom = "2px solid green"
        }
        else{
            FormNameError.innerHTML = "Please enter a correct Name.."
            FormName.style.borderBottom = "2px solid red"
            
        }
    }
    
    else{
        FormNameError.innerHTML = "Please enter  Your Name.."

    }

    var email_valid = /^[a-zA-Z0-9_.]{1,}[@]{1}[a-z]{1,}[.]{1}[a-z]{1,}$/
 
    if(FormEmail.value !=""){
        if(FormEmail.value.match(email_valid)){
            FormEmailError.innerHTML = ""
            FormEmail.style.borderBottom = "2px solid green"
        }
        else{
            FormEmailError.innerHTML = "Please enter a correct Email.."
            FormEmail.style.borderBottom = "2px solid red"
            
        }
    }
    
    else{
        FormEmailError.innerHTML = "Please enter  Your Email.."

    }

    if(FormCell.value != ""){
        if(FormCell.value.length == 11){
            FormCellError.innerHTML = ""
            FormCell.style.borderBottom = "2px solid green"
        
        }
        else{
            FormCellError.innerHTML = "Please enter a correct Cell #.."
            FormCell.style.borderBottom = "2px solid red"
            
        }
    }
    else{
            FormCellError.innerHTML = "Please enter a  Cell #.."
            FormCell.style.borderBottom = "2px solid red"
            
    }

    if(FormSchool.value != ""){
        if(FormSchool.value.length > 2){
            FormSchoolError.innerHTML = ""
            FormSchool.style.borderBottom = "2px solid green"
        
        }
        else{
            FormSchoolError.innerHTML = "Please enter a correct Institute Name.."
            FormSchool.style.borderBottom = "2px solid red"
            
        }
    }
    else{
        FormSchoolError.innerHTML = "Please enter your Institute Name.."
        FormSchool.style.borderBottom = "2px solid red"
            
    }

    if(FormNameError.innerHTML == "" && FormEmailError.innerHTML == "" &&  FormCellError.innerHTML == "" && FormSchoolError.innerHTML == ""){
            quizForm[0].classList.add("hide");
            quizStartBtn[0].classList.remove("hide")
            setUserName.innerText = `Name: ${FormName.value}`
            setEmail.innerText = `Email: ${FormEmail.value}`
    }

}
var rightCount = document.getElementById("rightCount")
var  wrongCount= document.getElementById("wrongCount")
var resultMainBox = document.getElementById("resultMainBox")



var optionUl = document.getElementsByClassName('optionUl');
var optionLists = document.getElementsByClassName("option");
var QuestBox = document.getElementsByClassName("QuestBox")
var count = 0;
var Quizquestion = document.getElementById('Quizquestion');
var quesNum = document.getElementById("quesNum")
var nextQuest = document.getElementById("nextQuest")
var score = 0;
quizBtn.onclick = function(){
    quizStartBtn[0].classList.add("hide");
    QuestBox[0].classList.remove("hide");
    quesChange(0)
    quesNum.innerHTML = `${count + 1} / ${quizQuestions.length}`
    nextQuest.style.display = "none"
    for(var i = 0 ; i<optionLists.length ; i++){
        optionLists[i].setAttribute("onclick" , "optionSelected(this)")
    }
    
}

function nextQuestion(){
    count++
    if(count < quizQuestions.length){
        quesChange(count)
        quesNum.innerHTML = `${count + 1} / ${quizQuestions.length}`
        nextQuest.style.display = "none"
    }
    else{
        QuestBox[0].classList.add("hide");
        resultMainBox.classList.remove("hide")
    }

}

function quesChange(index){

    Quizquestion.innerText = quizQuestions[index].question
    optionLists[0].innerHTML = quizQuestions[index].Option.a
    optionLists[1].innerHTML = quizQuestions[index].Option.b
    optionLists[2].innerHTML = quizQuestions[index].Option.c
    optionLists[3].innerHTML = quizQuestions[index].Option.d


    for(var i = 0 ; i < optionLists.length ; i++){
        optionLists[i].classList.remove("success")
        optionLists[i].classList.remove("wrong")
    }
   
    for(var i = 0 ; i < optionLists.length ; i++){
        optionLists[i].classList.remove("disabled")
    }
}

function optionSelected(answer){
   
    if(answer.innerHTML === quizQuestions[count].answer){
        nextQuest.style.display = "block"
        answer.classList.add("success")
   

    }
    else{
        console.log("block")
        nextQuest.style.display = "block"
        answer.classList.add("wrong")
       

        for(var i = 0 ; i<optionLists.length ; i++){
            
            if(optionLists[i].innerHTML === quizQuestions[count].answer){
                optionLists[i].classList.add("success")
            
            }
        }

        


    }

    
    for(var i = 0 ; i < optionLists.length ; i++){
        optionLists[i].classList.add("disabled")
    }


}



console.log(wrongCount.lastChild.nodeValue)