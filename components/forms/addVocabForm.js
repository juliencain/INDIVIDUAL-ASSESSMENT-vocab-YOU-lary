import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}) => {
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocab Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocab Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Vocab Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group" id="select-catagory">
      </div>
      <div class="form-group">
        <label for ="catagory">select a catagory</label>
        <select class="form-control" id="vocab_catagory" required>
        <option value="coding" ${obj.catagory === 'coding' ? 'selected' : ''}>coding</option>
        <option value="scripting" ${obj.catagory === 'scripting' ? 'selected' : ''}>scripting</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocab
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
