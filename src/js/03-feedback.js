import throttle from 'lodash.throttle'

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input'),
}

populateTextArea();
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value
})

function onFormSubmit(event) {
    event.preventDefault();
    console.log({ email: refs.email.value, textarea: refs.textarea.value });
    event.target.reset();
    localStorage.removeItem("feedback-form-state");
} 

function onTextareaInput(event) {
    // const text = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function populateTextArea() {
    const savedText = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedText) {
        refs.textarea.value = savedText.message;
        refs.email.value = savedText.email;
    }
}
