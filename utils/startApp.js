import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { getVocab } from '../api/vocabData';
import showVocab from '../pages/vocab';

const startApp = () => {
  domBuilder();
  domEvents();
  formEvents();
  navBar();
  navigationEvents();
  logoutButton();

  getVocab().then((vocab) => showVocab(vocab));
};

export default startApp;
