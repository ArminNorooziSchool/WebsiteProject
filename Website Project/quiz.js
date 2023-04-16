// Final Score Button Disabler and Enabler
var buttonScore = 0;

// Score Tracker
var score = 0;

// Function for button disabling
function disable(x) {
  x.disabled = true;
}

// Function for Question 1
document.getElementById("Check1").addEventListener("click", btnClicked1);

function btnClicked1() {
  let c1 = document.getElementById("in1").value.toLowerCase();

  if (c1 === "pocket monsters") {
    (document.getElementById("output1").innerHTML = `
    <p>Correct</p>`),
      ++score,
      ++buttonScore,
      (document.getElementById("in1").style.backgroundColor = "lime");
  } else {
    (document.getElementById("output1").innerHTML = `
    <p>Wrong</p>`),
      ++buttonScore,
      (document.getElementById("in1").style.backgroundColor = "red");
  }
}

// Function for Question 2
document.getElementById("Check2").addEventListener("click", btnClicked2);

function btnClicked2() {
  let c1 = document.getElementById("in2").value.toLowerCase();

  if (c1 === "pikachu") {
    (document.getElementById("output2").innerHTML = `
    <p>Correct</p>`),
      ++score,
      ++buttonScore,
      (document.getElementById("in2").style.backgroundColor = "lime");
  } else {
    (document.getElementById("output2").innerHTML = `
    <p>Wrong</p>`),
      ++buttonScore,
      (document.getElementById("in2").style.backgroundColor = "red");
  }
}

// Function for Question 3
document.getElementById("MultiCheck1").addEventListener("click", btnClicked3);

function btnClicked3() {
  let c1 = document.getElementById("myCheckBox1");
  let c2 = document.getElementById("myCheckBox2");
  let c3 = document.getElementById("myCheckBox3");

  if (c2.checked && !c1.checked && !c3.checked) {
    (document.getElementById("output3").innerHTML = `
    <p>Correct</p>`),
      ++score,
      ++buttonScore,
      (document.getElementById("myCheckBox2").style.backgroundColor = "lime");
  } else {
    (document.getElementById("output3").innerHTML = `
    <p>Wrong</p>`),
      ++buttonScore,
      (document.getElementById("myCheckBox2").style.backgroundColor = "red");
  }
}

// Function for Question 4
document.getElementById("Check3").addEventListener("click", btnClicked4);

function btnClicked4() {
  let c1 = document.getElementById("in3").value.toLowerCase();

  if (c1 === "electric") {
    (document.getElementById("output4").innerHTML = `
    <p>Correct</p>`),
      ++score,
      ++buttonScore,
      (document.getElementById("in3").style.backgroundColor = "lime");
  } else {
    (document.getElementById("output4").innerHTML = `
    <p>Wrong</p>`),
      ++buttonScore,
      (document.getElementById("in3").style.backgroundColor = "red");
  }
}

// Function for Question 5
document.getElementById("Check4").addEventListener("click", btnClicked5);

function btnClicked5() {
  let c1 = document.getElementById("in4").value.toLowerCase();

  if (c1 === "ash ketchum") {
    (document.getElementById("output5").innerHTML = `
    <p>Correct</p>`),
      ++score,
      ++buttonScore,
      (document.getElementById("in4").style.backgroundColor = "lime");
  } else {
    (document.getElementById("output5").innerHTML = `
    <p>Wrong</p>`),
      ++buttonScore,
      (document.getElementById("in4").style.backgroundColor = "red");
  }
}

// Function for Question 6
document.getElementById("MultiCheck2").addEventListener("click", btnClicked6);

function btnClicked6() {
  let c1 = document.getElementById("myCheckBoxA1");
  let c2 = document.getElementById("myCheckBoxA2");
  let c3 = document.getElementById("myCheckBoxA3");
  let c4 = document.getElementById("myCheckBoxA4");
  let c5 = document.getElementById("myCheckBoxA5");

  if (c2.checked && c4.checked && !c1.checked && !c3.checked && !c5.checked) {
    (document.getElementById("output6").innerHTML = `
    <p>Correct</p>`),
      ++score,
      ++buttonScore,
      (document.getElementById("myCheckBoxA2").style.backgroundColor = "lime"),
      (document.getElementById("myCheckBoxA4").style.backgroundColor = "lime");
  } else {
    (document.getElementById("output6").innerHTML = `
    <p>Wrong</p>`),
      ++buttonScore,
      (document.getElementById("myCheckBoxA2").style.backgroundColor = "red"),
      (document.getElementById("myCheckBoxA4").style.backgroundColor = "red");
  }
}

// Final Calculation Function
document.getElementById("Calculate").addEventListener("click", Calculate);

function Calculate() {
  let mark = score;
  let markpercent = (mark / 6) * 100;

  if (buttonScore === 6) {
    if (mark === 6) {
      document.getElementById(
        "FinalOutput"
      ).innerHTML = `<p>Woah, that is Amazing! You got ${mark}/6 (${markpercent}%)! You are now officially a Pokemon Master! </p>`;
    } else if (mark === 5) {
      document.getElementById(
        "FinalOutput"
      ).innerHTML = `<p>That is cool! You got ${mark}/6 (${markpercent}%)! You are very close to becoming a Pokemon Master! </p>`;
    } else if (mark === 4) {
      document.getElementById(
        "FinalOutput"
      ).innerHTML = `<p>That was a great try! You got ${mark}/6 (${markpercent}%)! Your knowledge is close to being a Pokemon Master but not quite there yet! </p>`;
    } else if (mark === 3) {
      document.getElementById(
        "FinalOutput"
      ).innerHTML = `<p>Good Job! You got ${mark}/6 (${markpercent}%). With a some studying, you can become even greater! </p>`;
    } else if (mark === 2) {
      document.getElementById(
        "FinalOutput"
      ).innerHTML = `<p>Nice Try. You got ${mark}/6 (${markpercent}%). You may be a beginner but in no time you will reach new heights! </p>`;
    } else if (mark === 1) {
      document.getElementById(
        "FinalOutput"
      ).innerHTML = `<p>Nice Effort! You got ${mark}/6 (${markpercent}%). You should go back and read the Learn section, trust me it will help!  </p>`;
    } else {
      document.getElementById(
        "FinalOutput"
      ).innerHTML = `<p>Huh? What are you doing? You got ${markpercent}%, you should not become a pokemon trainer, you will only hurt yourself. </p>`;
    }
  } else {
    document.getElementById(
      "FinalOutput"
    ).innerHTML = `<p>Answer the other questions first!</p>`;
  }
}
