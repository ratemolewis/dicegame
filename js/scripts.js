// function Name(firstName, secondName){
//   this.firstName=firstName;
//   this.secondName=secondName;
//   this.total=0;
//
// }
//
// Name.prototype.fullName=function(){
//   return this.firstName+""+this.secondName;
// }
//
//  function resetfields(){
//    $("input#new-first-name").val("");
//    $("new-second-name").val("");
//  }
//
// Name.prototype.Roll=function(){
//     var rollReselt=[];
//    var d1 = Math.floor(Math.random() * 6 + 1);
//   if (d1===1) {
//     rollReselt.length(0);
//     }else{
//      Name.total +=rollReselt.push(d1)
//   }
//   }
var randomNumber,randomNumber2;
var marks1=[];
var marks2=[];
var totalscore, totalscore2;
var finalscore
var prayer1 , prayer2

// user interface
function start(){
  var prayer1=prompt("Name of the first prayer:")
  var prayer2=prompt("Name of the second prayer:")
  $(document).ready(function(){
    $("#prayer1").text(prayer1)
    $("#prayer2").text(prayer2)
  })
}

//objrct prayer1

 function roll1(){
   var randomNumber=Math.floor((Math.random()*6)+1);
  if (randomNumber!==1){
      marks1.push(randomNumber)
      var totalscore=marks1.reduce((a,b)=>a+b)
    }
    else{
      var totalscore=marks1.length=0

    }

    if (totalscore>=100||finalscore>=100){
      alert("Hooray you are winner")
    }

    // user interface


    $(document).ready(function(){
        $("#randomResult").text(randomNumber)
        $("#totalresult").text(totalscore)
    });

 }

// hold function
function hold(){
  var totalscore= finalscore
  $(document).ready(function(){
  $("#user").click(function(){
    $("this").removeAttr("user1")
  })
  })
}

// object prayer 2

function roll2(){
  var randomNumber2=Math.floor((Math.random()*6)+1);
   if (randomNumber2!==1){
     marks2.push(randomNumber2)
     var totalscore2=marks2.reduce((a,b)=>a+b)
   }
   else{
     var totalscore2=marks2.length=0

   }

   if (totalscore2>=100||finalscore>=100){
     alert("Hooray you are winner")
   }

   // user interface
   $(document).ready(function(){
       $("#randomResult2").text(randomNumber2)
       $("#totalresult2").text(totalscore2)
   });

}
