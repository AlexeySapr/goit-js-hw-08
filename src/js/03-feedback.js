import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

//получаем ссылки на элементы

const refs = {
  form: document.querySelector('form.feedback-form'),
  email: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

//объект для хранения данных в форме
const formData = {
  email: '',
  message: '',
};

//вызов функции проверки и записи данных из хранилища
addDataFromStorage();

//слушатели событий на форме
refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onEmailFormInput, 500));
refs.message.addEventListener('input', throttle(onMessageFormInput, 500));

//обработчики событий на форме
function onEmailFormInput(event) {
  formData.email = event.target.value;
  save('feedback-form-state', formData);
}

function onMessageFormInput(event) {
  formData.message = event.target.value;
  save('feedback-form-state', formData);
}

function onFormSubmit(event) {
  event.preventDefault();
  save('feedback-form-state', formData);
  event.currentTarget.reset();
  formToLog();
  remove('feedback-form-state');
}

//функция проверки и записи данных из хранилища
function addDataFromStorage() {
  const dataFromStorage = load('feedback-form-state');
  if (dataFromStorage) {
    if (dataFromStorage.email !== '') {
      formData.email = dataFromStorage.email;
      refs.email.value = dataFromStorage.email;
    }

    if (dataFromStorage.message !== '') {
      formData.message = dataFromStorage.message;
      refs.message.value = dataFromStorage.message;
    }
  }
}

//функция вывода данных из формы в консоль
function formToLog() {
  console.log('Email: ', formData.email);
  console.log('Message: ', formData.message);
}
