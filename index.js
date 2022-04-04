let score=0
let highscore=0
let my=0
let guess=0
let left=20
let comel=document.getElementById("comments")
let guessel=document.getElementById("guessed")
let kel=document.getElementById("prev")
let inp=document.getElementById("inp1")
let leftel=document.getElementById("left")
guessel.innerHTML=guess
leftel.innerHTML=left


function mystry(){
    my=Math.floor(Math.random()*21)
}
mystry()

function input(){
    let num=inp.value;
    if(!num || num==0) {
        alert('Please Enter Valid Number')
        return;
    }
    if(num<my){
        
        let co="too low 📉"
        comel.innerHTML=co
        guess=guess+1
        guessel.innerHTML=guess
        kel.innerHTML+=num+"-"
        left=left-1
        leftel.innerHTML=left
    }
    else if(num>my){
        
        let co="too high 📈"
        comel.innerHTML=co
        guess=guess+1
        guessel.innerHTML=guess
        kel.innerHTML+=num+"-"
        left=left-1
        leftel.innerHTML=left
    }
    else if(num==my){
       
        tr()
        let co="you won🥇"
        comel.innerHTML=co
    }
  
    if(score>highscore){
        highscore=score
    }
}
function tr(){
    guessel.innerHTML=""
    kel.innerHTML=""
    comel.innerHTML=""
    inp.value=""
    left=20
    leftel.innerHTML=left
    guess=0
    guessel.innerHTML=guess
    mystry()
}
