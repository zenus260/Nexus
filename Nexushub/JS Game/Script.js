// FIRST PAGE

// Introductory message (context)

    function closeContext(){
        document.getElementById("context").style.scale = "0%";
    }


// Popup messages

    // 1st option

    let popup = document.getElementById("popup");

    function openPopup(){
        popup.classList.add("openPopup");
    }

    function closePopup(){
        popup.classList.remove("openPopup");
    }

    // 2nd option

    let popup1 = document.getElementById("popup1");

    function openPopup1(){
        popup1.classList.add("openPopup");
    }

    function closePopup1(){
        popup1.classList.remove("openPopup");
    }

    // 3rd option

    let popup2 = document.getElementById("popup2");

    function openPopup2(){
        popup2.classList.add("openPopup");
    }

    function closePopup2(){
        popup2.classList.remove("openPopup");
    }


// SECOND PAGE

// Brief checklist

 let checklist = document.getElementById("checklist");
 let clarification = document.getElementById("clarification");

    // checlist popup
     function openChecklist(){
         checklist.classList.add("openChecklist");
     }

    //  clarification popup
    function openClarification(){
        clarification.classList.add("openPopup");
    }

    function closeClarification(){
        clarification.classList.remove("openPopup");
    }

//   View work upon completing checklist

function showMe (box) {
    let checkbox = document.getElementsByName("checkbox");
    let counter=0;
    for(let i=0;i<checkbox.length;i++) {
        if(checkbox[i].checked){
            counter++;
        }
        if(counter==checkbox.length)
        {
            document.getElementById("viewWorkButton").classList.add('showWork');
            document.getElementById("viewWorkButton").classList.remove('viewWorkButton');
        }
    }
} 


// THIRD PAGE

// Work

let A = document.getElementById("Blue")
let B = document.getElementById("Yellow")
let C = document.getElementById("Red")
const checkSameBtn = document.getElementById('checkSameBtn');

let popup3 = document.getElementById("popup3");

// Correct combination
    function openPopup4(){
        popup4.classList.add("openPopup");
    }

// Incorrect combination
    function openPopup3(){
        popup3.classList.add("openPopup");
    }

    function closePopup3(){
        location.reload();
    }
 
// Selecting design option
function selectDesignA(){
    selectedDesign = A
    document.getElementById("Blue").classList.add("selectedDesign");
}

function selectDesignB(){
    selectedDesign = B
    document.getElementById("Yellow").classList.add("selectedDesign");
}

function selectDesignC(){
    selectedDesign = C
    document.getElementById("Red").classList.add("selectedDesign");
}

// Selecting rationale option
function selectRationaleA(){
    selectedRationale = A
    document.getElementById("blueRationale").classList.add("selectedDesign");
}

function selectRationaleB(){
    selectedRationale = B
    document.getElementById("yellowRationale").classList.add("selectedDesign");
}

function selectRationaleC(){
    selectedRationale = C
    document.getElementById("redRationale").classList.add("selectedDesign");
}

// Check if design matches rationale

function checkSame(){
 if (selectedDesign == selectedRationale){
    setTimeout(openPopup4, 200)
 }
 else{
    openPopup3()
 }

}

checkSameBtn.addEventListener('click', checkSame);


// FOURTH PAGE

// Fade to black
function endScreen(){
    document.getElementById("fadeCanvas").classList.add("blackFadeVisible");
    document.getElementById("fadeIn").classList.add("endTextVisible");
}

