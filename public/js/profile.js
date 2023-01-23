const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#recipe-name').value.trim();
  console.log(name);
  const description = document.querySelector('#recipe-desc').value.trim();
  console.log(description);

  if (name && description) {
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create recipe');
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
      alert('Failed to delete recipe');
    }
  }
};

const changeColorHandler = async (event) => {
  let emojiClass = event.target.classList[1];
  if (emojiClass.includes('black')) {
    event.target.classList.remove(emojiClass);
    event.target.classList.add(emojiClass.replace('-black', ''));

    if (!document.querySelector('#recipe-desc').value){
      document.querySelector('#recipe-desc').value = document.querySelector('#recipe-desc').value + 'Smoothie made with: ' + event.target.id;
    }
    else {
      document.querySelector('#recipe-desc').value = document.querySelector('#recipe-desc').value.concat(" " + event.target.id);
    }
    
  }
  else {
    event.target.classList.remove(emojiClass);
    event.target.classList.add(emojiClass.slice(0,3) + '-black' + emojiClass.slice(3));
    if(document.querySelector('#recipe-desc').value.includes(": " + event.target.id)){
      document.querySelector('#recipe-desc').value = document.querySelector('#recipe-desc').value.replace(" " + event.target.id,"");
    }
    else {
      document.querySelector('#recipe-desc').value = document.querySelector('#recipe-desc').value.replace(" " + event.target.id,"");
    }

  }
};

document
  .querySelector('#strawberry')
  .addEventListener('click', changeColorHandler);

document
  .querySelector('#banana')
  .addEventListener('click', changeColorHandler);

document
  .querySelector('#blueberries')
  .addEventListener('click', changeColorHandler); 

document
.querySelector('#kiwi')
.addEventListener('click', changeColorHandler); 

document
  .querySelector('#pineapple')
  .addEventListener('click', changeColorHandler);

document
  .querySelector('#orange')
  .addEventListener('click', changeColorHandler);
    
document
.querySelector('#cherry')
.addEventListener('click', changeColorHandler);
  
document
  .querySelector('#red-apple')
  .addEventListener('click', changeColorHandler);

document
  .querySelector('.new-recipe-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.recipe-list')
  .addEventListener('click', delButtonHandler);