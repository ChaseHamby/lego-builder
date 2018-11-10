import 'bootstrap';
import $ from 'jquery';
import './savedCharacters.scss';

const displaySavedCharacter = (parts) => {
  let newString = '';
  parts.forEach((part) => {
    newString += `
      <div class="col-sm-2">
        <div class="saved-character" style="width: 18rem">
          <p class="placeholder">${part.savedName}</p>
          <div class="placeholder">
            <img class="card-img" src="${part.savedHead}">
          </div>
          <div class="placeholder"> 
            <img class="card-img" src="${part.savedTorso}">
          </div> 
          <div class="placeholder">
            <img class="card-img" src="${part.savedLegs}">
          </div> 
        </div>
      </div>  
  `;
  });
  $('#saved-lego').append(newString);
};

//  Save Button Functionality //

const savedArray = [];

const savedLego = () => {
  $('#save').click(() => {
    const savedName = $('#name').text();
    const savedHead = $('#headCheese').find('img').attr('src');
    const savedTorso = $('#torsoArea').find('img').attr('src');
    const savedLegs = $('#legsArea').find('img').attr('src');
    savedArray.push({
      savedName, savedHead, savedTorso, savedLegs,
    });
    displaySavedCharacter(savedArray);
  });
};

export default { savedLego };
