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
  $('#name').append(heads[randomize].name);
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
  $('#name').append(torsos[randomize].name);
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
  $('#name').append(legs[randomize].name);
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

export default { displayHeads, displayTorsos, displayLegs };
