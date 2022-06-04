import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  const domString = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${obj.item.first_name} ${obj.item.last_name} 
        ${obj.authorObject.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${obj.item.email}</h6>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-author-btn--${obj.item.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-author--${obj.item.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${obj.item.firebaseKey}"></i>
      </div>
    </div>`;
  renderToDOM('#view', domString);

  let domStringBooks = '';
  obj.authorBooks.forEach((item) => {
    domStringBooks += `
    <div class="card">
      <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
      <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.title}</h5>
          <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
          <hr>
          <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}"></i>
          <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
    </div>`;
  });
  renderToDOM('#store', domStringBooks);
};

export default viewAuthor;
