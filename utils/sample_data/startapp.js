import { getVocab } from '../../api/vocabData';
import showVocab from '../../pages/vocab';

const startApp = () => {
  getVocab().then((vocab) => showVocab(vocab));
};
export default startApp;
