import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add Vocab Card</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 400px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.catagory ? `<span class="h"></span> ${item.description}` : `${item.description}`}</p>
            <hr>
            <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#vocab', domString);
};

export default showVocab;
