
var question = [
{
    qNo: 1,
    q: 'Which of the following is correct about JavaScript?',
    ans: 'All of the above.',
    opt:['JavaScript is a lightweight, interpreted programming language.','JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.'
,'The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.','All of the above.'
]
},
{
    qNo: 2,
    q: 'How can you get the total number of arguments passed to a function?',
    ans: 'Using arguments.length property.',
    opt:['Using args.length property.', 'Using arguments.length property.','Both of the above.'
,'None of the above.'
]
},{
    qNo: 3,
    q: 'Which built-in method combines the text of two strings and returns a new string?',
    ans: 'concat()',
    opt:['append()', 'concat()','attach()'
,'None of the above.'
]
},{
    qNo: 4,
    q: 'Which of the following code creates an object?',
    ans: 'var book = new Object();',
    opt:['var book = Object();', 'var book = new Object();','var book = new OBJECT();'
,'var book = new Book();'
]
}
,{
    qNo: 5,
    q: 'Which of the following function of Number object returns a string value version of the current number?',
    ans: 'toString()',
    opt:['toString()', 'toFixed()','toLocaleString()'
,'toPrecision()'
]
}



]

var count = 0
var score = 0
var COpt = ''
window.onload = function(){
    
    show()
}



function show(){
    var qnum = document.getElementById('qNo')
    var ques = document.getElementById('q')
    var opt1 = document.getElementById('o1')
    var opt2 = document.getElementById('o2')
    var opt3 = document.getElementById('o3')
    var opt4 = document.getElementById('o4')

    qnum.innerHTML = "Question No "+question[count].qNo
    ques.innerHTML = question[count].q
    opt1.innerText = question[count].opt[0]
    opt2.innerText = question[count].opt[1]
    opt3.innerText = question[count].opt[2]
    opt4.innerText = question[count].opt[3]

}

function next(){
    if(COpt == ''){
    alert('Select an option first')
    }else{
    check()
    removeActive()
    count++
    if(question.length-1==count){
        document.getElementById('next').style.display = "none"
        document.getElementById('finish').style.display = "inline"
        show()
    }else if(question.length>count){
        show()  
    }
    COpt = ''
}
    
}
function removeActive(){
    var selectOpts = document.getElementsByClassName('option')
   for (let i = 0; i < selectOpts.length; i++) {
       selectOpts[i].classList.remove('active')
   }
}
function select(e){
    removeActive()
     e.classList.add('active')
    COpt=  e.innerHTML
}
 
function check (){
    if(question[count].ans == COpt){
        score++
       
    }
    console.log(score)


}
function finish (){
    if(COpt == ''){
        alert('Select an option first')
        }else{
    check()
    document.getElementById('ca').style.display = 'none'
    document.getElementById('scoreCard').style.display = 'block'
    document.getElementById('score').innerHTML = score
    COpt = ''
        }
}
function end(){
    score = 0
    count = 0
    document.getElementById('ca').style.display = 'block'
    document.getElementById('scoreCard').style.display = 'none'
    document.getElementById('next').style.display = "inline"
    document.getElementById('finish').style.display = "none"
    show()
    removeActive()
}
