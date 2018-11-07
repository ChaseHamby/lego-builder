import $ from 'jquery';
import partsView from '../../data/partsData';

const writeHeads = (arrayOfHeads) => {
  let domString = '';
  arrayOfHeads.forEach((head) => {
    domString += `<div id='${head.id}' class='card col-3 p-3 m-5'>
        <img class='card-img-top border border-dark' src=${head.imageUrl}
        <div class="card-body">
            <h5 class="card-title">${head.name}</h5>=
        </div>`;
  });
  $('#head').html(domString);
};

const writeTorsos = (arrayOfTorsos) => {
  let domString = '';
  arrayOfTorsos.forEach((torso) => {
    domString += `<div id='${torso.id}' class='card col-3 p-3 m-5'>
        <img class='card-img-top border border-dark' src=${torso.imageUrl}
        <div class="card-body">
            <h5 class="card-title">${torso.name}</h5>=
        </div>`;
  });
  $('#torso').html(domString);
};

const writeLegs = (arrayOfLegs) => {
  let domString = '';
  arrayOfLegs.forEach((leg) => {
    domString += `<div id='${leg.id}' class='card col-3 p-3 m-5'>
        <img class='card-img-top border border-dark' src=${leg.imageUrl}
        <div class="card-body">
            <h5 class="card-title">${leg.name}</h5>=
        </div>`;
  });
  $('#leg').html(domString);
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

export default { initializeLegoView };
