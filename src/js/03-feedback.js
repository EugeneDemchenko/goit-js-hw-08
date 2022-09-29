import throttle from 'lodash.throttle'



const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input'),
}


populateTextArea();
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));


function onFormSubmit(event) {
    event.preventDefault();
    if (refs.email.value === '' && refs.textarea.value === '') { return }
    else { console.log({ email: refs.email.value, message: refs.textarea.value }); }
    
    event.target.reset();
    localStorage.removeItem("feedback-form-state");
} 

function onTextareaInput() {
    const formData = {
    email: refs.email.value,
    message: refs.textarea.value,
};
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function populateTextArea() {
    const savedText = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedText) {
        refs.textarea.value = savedText.message;
        refs.email.value = savedText.email;
    }
}
