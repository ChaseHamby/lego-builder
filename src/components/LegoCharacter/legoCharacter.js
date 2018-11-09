import $ from 'jquery';
import partsView from '../../data/partsData';
import './legoCharacter.scss';

const writeHeads = (arrayOfHeads) => {
  let domString = '';
  arrayOfHeads.forEach((head) => {
    domString += `<a class="dropdown-item" type="${head.id}"><img src="${head.imageUrl}"><p>${head.name}</p></a>`;
  });
  $('#headBlock').html(domString);
};

const writeTorsos = (arrayOfTorsos) => {
  let domString = '';
  arrayOfTorsos.forEach((torso) => {
    domString += `<a class="dropdown-item" type="${torso.id}"><img src="${torso.imageUrl}"><p>${torso.name}</p></a>`;
  });
  $('#torsoBlock').html(domString);
};

const writeLegs = (arrayOfLegs) => {
  let domString = '';
  arrayOfLegs.forEach((leg) => {
    domString += `<a class="dropdown-item" type="${leg.id}"><img src="${leg.imageUrl}"><p>${leg.name}</p></a>`;
  });
  $('#legBlock').html(domString);
};

const initializeHeadView = () => {
  partsView.getHeadsData()
    .then((data) => {
      writeHeads(data.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const initializeTorsoView = () => {
  partsView.getTorsoData()
    .then((data) => {
      writeTorsos(data.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const initializeLegView = () => {
  partsView.getLegsData()
    .then((data) => {
      writeLegs(data.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const initializeLegoView = () => {
  initializeHeadView();
  initializeTorsoView();
  initializeLegView();
};

export default {
  initializeLegoView, writeHeads, writeTorsos, writeLegs,
};
