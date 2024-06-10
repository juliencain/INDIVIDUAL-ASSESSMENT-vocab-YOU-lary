import { getVocab, coding, scripting } from '../api/vocabData';
import showVocab from '../pages/vocab';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab().then(showVocab);
  });
  document.querySelector('#coding-vocab').addEventListener('click', () => {
    coding().then(showVocab);
  });
  document.querySelector('#scripting-vocab').addEventListener('click', () => {
    scripting().then(showVocab);
  });
};

export default navigationEvents;
