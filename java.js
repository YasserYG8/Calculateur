function verif(){
    if ((document.getElementById("nb1").value="") || (document.getElementById("nb2").value="")){
        alert("Le nombre 1 ou 2 sont vides")
    }


}
function plus(){
    
    n1=Number(document.getElementById("nb1").value)
    n2=Number(document.getElementById("nb2").value)
    s=n1+n2
    document.getElementById("reset").value=s;
}
function mois(){
    n1=Number(document.getElementById("nb1").value)
    n2=Number(document.getElementById("nb2").value)
    s=n1-n2
    document.getElementById("reset").value=s;

}
function fois(){
    n1=Number(document.getElementById("nb1").value)
    n2=Number(document.getElementById("nb2").value)
    s=n1*n2
    document.getElementById("reset").value=s;
}


function division(){
    n1=Number(document.getElementById("nb1").value)
    n2=Number(document.getElementById("nb2").value)
    if (n2!=0){
        s=n1/n2
        document.getElementById("reset").value=s;
        


    }
    else{
        alert("impossible division à 0")  





    }
}
function maxemum(){
    n1=Number(document.getElementById("nb1").value)
    n2=Number(document.getElementById("nb2").value)
    s=Math.max(n2,n1)
    document.getElementById("reset").value=s

}
function minimum(){
    n1=Number(document.getElementById("nb1").value)
    n2=Number(document.getElementById("nb2").value)
    s=Math.min(n1,n2)
    document.getElementById("reset").value=s

}

function puis(){
    n1=Number(document.getElementById("nb1").value)
    n2=Number(document.getElementById("nb2").value)
    s=n1**n2
    document.getElementById("reset").value=s





}