import showVocab from '../pages/vocab';
import { deleteVocab, getVocab, getSingleVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE Vocab', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab().then(showVocab);
        });
      }
    }
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((bookObj) => addVocabForm(bookObj));
    }
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm();
    }
  });
};

export default domEvents;
