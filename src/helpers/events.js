import 'bootstrap';
import $ from 'jquery';
import partsData from '../data/partsData';
import legoView from '../components/LegoCharacter/legoCharacter';

// Random Head Display //
const randomHeadView = (heads) => {
  let newString = '';
  const randomize = Math.floor(Math.random() * heads.length);
  newString += `
      <div class="heads" id="${heads[randomize].id}"><img src="${heads[randomize].imageUrl}"></div>
    `;
  $('#headCheese').html(newString);
  $('#name').append(`<h3>${heads[randomize].name}</h3>`);
};

const displayHeads = () => {
  partsData.getHeadsData()
    .then((heads) => {
      legoView.writeHeads(heads.data);
      randomHeadView(heads.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

// Random Torso Display //
const randomTorsoView = (torsos) => {
  let newString = '';
  const randomize = Math.floor(Math.random() * torsos.length);
  newString += `
      <div class="torso" id="${torsos[randomize].id}"><img src="${torsos[randomize].imageUrl}"></div>
    `;
  $('#torsoArea').html(newString);
  $('#name').append(`<h3>${torsos[randomize].name}</h3>`);
};

const displayTorsos = () => {
  partsData.getTorsoData()
    .then((torsos) => {
      legoView.writeTorsos(torsos.data);
      randomTorsoView(torsos.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

// Random Legs Display //
const randomLegsView = (legs) => {
  let newString = '';
  const randomize = Math.floor(Math.random() * legs.length);
  newString += `
      <div class="legs" id="${legs[randomize].id}"><img src="${legs[randomize].imageUrl}"></div>
    `;
  $('#legsArea').html(newString);
  $('#name').append(`<h3>${legs[randomize].name}</h3>`);
};

const displayLegs = () => {
  partsData.getLegsData()
    .then((legs) => {
      legoView.writeLegs(legs.data);
      randomLegsView(legs.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

// Random Button Functionality //

const randomLego = () => {
  displayHeads();
  displayTorsos();
  displayLegs();
};

const randomName = () => {
  const string = '';
  $('#name').html(string);
};

$('#random').click(() => {
  randomName();
  randomLego();
});

//  Save Button Functionality //

export default { displayHeads, displayTorsos, displayLegs };
