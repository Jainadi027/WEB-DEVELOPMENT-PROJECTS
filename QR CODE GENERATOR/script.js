const qrCodeContainer = document.getElementById("qr-code-container");
const qrCodeImg = document.getElementById("qr-code");
const generateBtn = document.getElementById("generate-btn");
const dataInput = document.getElementById("data");

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const data = dataInput.value.trim();
  if (data) {
    generateQRCode(data);
  } else {
    alert("Please enter some data.");
  }
});

function generateQRCode(data) {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data}`;
  console.log(qrCodeUrl);
  qrCodeImg.src = qrCodeUrl;
  qrCodeContainer.style.display = "block";
}
