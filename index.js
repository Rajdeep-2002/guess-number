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
    console.log(my)
}
mystry()
console.log(my)

function input(){
    let num=inp.value;
    console.log(num)
    // if user inputs blank or 0
    if(!num || num==0) {
        alert('Please Enter Valid Number')
        return;
    }
    if(num<my){
        console.log("too low")
        let co="too low 📉"
        comel.innerHTML=co
        guess=guess+1
        guessel.innerHTML=guess
        kel.innerHTML+=num+"-"
        left=left-1
        leftel.innerHTML=left
    }
    else if(num>my){
        console.log("too big")
        let co="too high 📈"
        comel.innerHTML=co
        guess=guess+1
        guessel.innerHTML=guess
        kel.innerHTML+=num+"-"
        left=left-1
        leftel.innerHTML=left
    }
    else if(num==my){
        console.log("you won 🥇")
        tr()
        let co="you won🥇"
        comel.innerHTML=co
        // guess=guess+1
        // guessel.innerHTML=guess
        // kel.innerHTML+=num+"-"
    }
    console.log(score)
    if(score>highscore){
        highscore=score
    }
}
function tr(){
    guessel.innerHTML=""
    kel.innerHTML=""
    comel.innerHTML=""
    inp.value=""
    mystry()
    console.log(my)
}
