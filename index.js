async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    document.getElementById("connectButton").innerText = "Connected";
  } else {
    document.getElementById("connectButton").innerText =
      "Please install Metamask";
  }
}

//fund
async function fund(ethAmount) {
    console.log("funding with ")
}
