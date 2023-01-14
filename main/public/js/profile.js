const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#recipe-name').value.trim();
  const needed_funding = document.querySelector('#recipe-funding').value.trim();
  const description = document.querySelector('#recipe-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/recipes/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

const highlightIngredient = async (event) => {

  alert('You clicked an ingredient');

};



document
  .querySelector('.new-recipe-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.recipe-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.ingredientbtn')
  .addEventListener('click', highlightIngredient);