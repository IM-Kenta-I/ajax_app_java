const onSubmit = (e) => {
  e.preventDefault();
  const form = document.getElementById("form");
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "/posts", true); // Initialize HTTP request
  xhr.responseType = "json";
  xhr.send(formData);
}

function post() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", onSubmit);
};

window.addEventListener("load", post);