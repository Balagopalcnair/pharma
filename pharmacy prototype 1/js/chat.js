
function toggleChat(){
    let box=document.getElementById("chatBox");
    box.style.display = box.style.display==="block" ? "none" : "block";
}

function check(){
    let symptomInput = document.getElementById("symptom");
    let symptom = symptomInput.value.toLowerCase();
    let result = document.getElementById("result");

    let response = "We recommend consulting a doctor for accurate advice. ";

    if (symptom.includes("fever")) {
        response = "For fever, Paracetamol might be suitable. You can find it in our <a href='store.html?search=Paracetamol'>store</a>. Remember to rest and stay hydrated.";
    } else if (symptom.includes("cold")) {
        response = "For a cold, Vitamin C can help boost your immunity. Check out our <a href='store.html?search=Vitamin C'>store</a> for options. Also, get plenty of rest.";
    } else if (symptom.includes("headache")) {
        response = "For a headache, a pain relief gel could be helpful. You can find some in our <a href='store.html?search=Pain Relief Gel'>store</a>. Also, try to rest in a quiet, dark room.";
    } else if (symptom.includes("cough")) {
        response = "A cough syrup may soothe your throat. We have a few options in our <a href='store.html?search=Cough Syrup'>store</a>.";
    } else if (symptom.includes("sore throat")) {
        response = "For a sore throat, you can try some lozenges or a soothing syrup. Check our <a href='store.html?search=Cough Syrup'>store</a> for options.";
    } else if (symptom.includes("energy")) {
        response = "If you're feeling low on energy, an energy drink might help, but use it in moderation. We have some in our <a href='store.html?search=Energy Drink'>store</a>. A balanced diet and good sleep are also important.";
    }

    result.innerHTML = response;
    symptomInput.value = "";
}

