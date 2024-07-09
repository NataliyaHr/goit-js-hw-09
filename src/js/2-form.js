const formData = {
  email: "",
  message: "",

  setFormValue(newemail, newmessage) {
    this.email = newemail;
    this.message = newmessage;
  },

  saveToLocalStorage() {
    localStorage.setItem(LSTORAGE_KEY, JSON.stringify(this));
  },

  clear() {
    this.email = "";
    this.message = "";
  },
};

const formMessage = document.querySelector(".feedback-form");
const LSTORAGE_KEY = "feedback-form-state";

formMessage.addEventListener("input", inputText);
formMessage.addEventListener("submit", onSubmit);

function getValueOfLocalstorage() {
  const localdata = JSON.parse(localStorage.getItem(LSTORAGE_KEY));
  if (localdata) {
    formData.setFormValue(localdata.email, localdata.message);
    formMessage.email.value = formData.email;
    formMessage.message.value = formData.message;
  }
}

function inputText(event) {
  const { name, value } = event.target;
  if (name === "email") {
    formData.email = value.trim();
  } else if (name === "message") {
    formData.message = value.trim();
  }
  formData.saveToLocalStorage();
}

function onSubmit(event) {
  event.preventDefault();
  if (formData.email === "" || formData.message === "") {
    return alert("Please fill in all fields");
  }
  console.log(formData);
  localStorage.removeItem(LSTORAGE_KEY);
  formData.clear();
  formMessage.reset();
formData.saveToLocalStorage();
}
getValueOfLocalstorage();