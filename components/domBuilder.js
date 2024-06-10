import renderToDOM from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="filters"></div>
    <div id="card-container"></div>
    <div id="vocab"></div>
    <div id="add-button"></div>
    <div id="form-container"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
