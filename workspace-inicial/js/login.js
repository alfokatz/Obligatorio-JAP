function success() {
  window.location.href = "./index.html";
}

function alertError() {
  alert("Para iniciar sesión, debe completar ambos campos solicitados.");
}

function controlError() {
  let error = false;

  let email = document.getElementById("email").value;
  let contraseña = document.getElementById("contraseña").value;

  if (email == "") {
    error = true;
  }

  if (contraseña == "") {
    error = true;
  }

  if (error) {
    alertError();
  } else {
    success();
  }
}
