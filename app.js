const form = document.querySelector("#form");
const container = document.querySelector(".total-form");
const feedback = document.querySelector(".feedback");

const testEmailRegexFunc = (emailInput) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isAValidUserMail = testEmailRegexFunc(event.target.emailInput.value);

  if (isAValidUserMail) {
    container.setAttribute("class", "output-message");
    container.textContent = `Obrigado por sua mensagem!`;
    return;
  }
  feedback.textContent = "Email Invalido";
});

form.emailInput.addEventListener("keyup", (event) => {
  const isAValidUserMail = testEmailRegexFunc(event.target.value);
  if (isAValidUserMail) {
    form.emailInput.setAttribute("class", "success");
    return;
  }
  form.emailInput.setAttribute("class", "error");
});
