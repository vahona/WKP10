import faker from 'faker';

const tbody = document.querySelector('tbody');

let persons = Array.from({ length: 10 }, () => {
	return {
		id: faker.random.uuid(),
		lastName: faker.name.lastName(),
		firstName: faker.name.firstName(),
		jobTitle: faker.name.jobTitle(),
		jobArea: faker.name.jobArea(),
		phone: faker.phone.phoneNumber(),
		picture: faker.image.avatar(100, 100),
	};
});

const displayList = data => {
	tbody.innerHTML = data
		.map(
			(person, index) => `
    <tr data-id="${person.id}" class="${index % 2 ? 'even' : ''}">
        <td><img src="${person.picture}" alt="${person.firstName + ' ' + person.lastName}"/></td>
        <td>${person.lastName}</td>
        <td>${person.firstName}</td>
        <td>${person.jobTitle}</td>
        <td>${person.jobArea}</td>
        <td>${person.phone}</td>
        <td>
            <button class="edit" id="${person.id}">
                <svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
            </button>
            <button class="delete" id="${person.id}">
                <svg viewBox="0 0 20 20" fill="currentColor" class="trash w-6 h-6"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            </td>
    </tr>
`
		)
		.join('');
};

// Grabe pencil 



// const editPartner = e => {
//   const button = e.target.closest()
//   const showAs = editPartnerPopup(person);

//   if(showAs) {
//      displayList(persons);
//   }
	
// 	// code edit function here

	



// };


const editPartnerPopup = (id) => {
  const relate = persons.find(person => person.id === id);
  console.log(relate);

    const popup = document.createElement('form');
    console.log(relate);
    popup.classList.add('.popup');
    popup.insertAdjacentHTML('afterbegin', `
	 <fieldset style="border: none;">
      <label for="namelast">LastName</label><br>
      <input type="text" value="${relate.lastName}" id="namelast">
    </fieldset>
    <fieldset style="border: none;">
      <label for="">FisrtName</label><br>
      <input type="text" value="${relate.firstName}" id="firstNam">
    </fieldset style="border: none;">
    <fieldset style="border: none;">
      <label for="">JobTitle</label><br>
      <input type="text" value="${relate.jobTitle}" id="">
    </fieldset>
    <fieldset style="border: none;">
      <label for="">JobArea</label><br>
      <input type="text" value="${relate.jobArea}" id="">
    </fieldset>
    <fieldset style="border: none;">
      <label for="">Phone number</label><br>
      <input type="text" value="${relate.phoneNumber}" id="">
    </fieldset>
    <div class="button-sub">
      <button class="button__save">Save</button>
      <button class="button__cancel">Cancel</button>
    </div>
   `);

    document.body.appendChild(popup);


    popup.classList.add('open');


  

  // create edit popup here
};






const lists = [
  {lastName : ""}
]




const deletePartner = (id) => {

  const deleteConf = persons.filter(person => person.id !== id);
  
  displayList(deleteConf);
  const deletesure = deleteDeletePopup(persons);

 


	// code delete function gere
};

const deleteDeletePopup = (id) => {
  const wantdelete = persons.find(person => person.id === id);

  const popup = document.createElement('article');
  popup.classList.add('.delete_confirm');
  popup.insertAdjacentHTML('afterbegin', `
  <p class="deleteparagraph">
      Are you sure you want to delete this partner
    </p>
    <div class="container__buttom">
      <button class="confirm_buttom yes__sure"> Yes </button>
      <button class="confirm_buttom no__want"> No </button>
    </div>
  `);

  document.body.appendChild(popup);

  popup.classList.add('.delete_confirm');

  // create confirmation popup here
  


  const confirm = e => {

    const yes = e.target.matches('.yes__sure');
    const no = e.target.matches('.no__want');
    
    if(yes) {
      e.preventDefault();
      const deleteCo = persons.filter(person => person.id !== id);
      persons = deleteCo;
      displayList(deleteCo);
      console.log(deleteCo);
      const remove = popup.style.display = 'none';
      remove;
    }

    else if(no) {
      const remove = popup.style.display = 'none';
     remove;

    }

  };



  window.addEventListener('click', confirm)

};

async function asyncMap(array, callback) {
  const result = [];
  for(const item of array) {
    result.push(await callback(item));
  }

}

async function show() {
  const results = await asyncMap(lists, editPartner);
  console.log(results);
}

// show()

displayList(persons);

const handleClick = e => {
 const editButton = e.target.closest('.edit');
 const deletButton = e.target.closest('.delete');

 if(editButton) {
  const id = editButton.id; 
   editPartnerPopup(id);

 }


 if(deletButton) {
   
  const id = deletButton.id;
   deleteDeletePopup(id);
   
 }


}

tbody.addEventListener('click', handleClick);

