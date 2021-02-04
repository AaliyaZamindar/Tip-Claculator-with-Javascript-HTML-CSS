function calculateFunction() {
  //console.log("hey");
  const servicesRating = document.getElementById("services").value;
  console.log(servicesRating);

  const peopleSharing = document.getElementById("no-of-people").value;
  console.log(peopleSharing);
  const billAmt = document.getElementById("bill").value;
  console.log(billAmt);
  var perPersonTip = billAmt / peopleSharing;
  console.log(typeof perPersonTip);
  if (billAmt >= 1000) {
    perPersonTip = (0.04 * billAmt) / peopleSharing;
  } else if (1001 < billAmt < 5000) {
    perPersonTip = (0.06 * billAmt) / peopleSharing;
  } else {
    perPersonTip = (0.08 * billAmt) / peopleSharing;
  }

  const buttonId = document.getElementById("calculate");
  const divId = document.getElementById("result");
  console.log(divId);
  //const divNode = document.createElement("div");
  //const buttonNode = document.createElement("button");
  //buttonId.appendChild(divId);
  divId.innerHTML = perPersonTip;
  document.getElementById("calculate").style.backgroundColor = "yellow";
}
