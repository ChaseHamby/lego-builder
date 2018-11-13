import $ from 'jquery';
import partsView from '../../data/partsData';
import './legoCharacter.scss';

const writeHeads = (arrayOfHeads) => {
  let domString = '';
  arrayOfHeads.forEach((head) => {
    domString += `<a class="dropdown-item" type="${head.id}"><img src="${head.imageUrl}"><h3>${head.name}</h3></a>`;
  });
  $('#headBlock').html(domString);
};

const writeTorsos = (arrayOfTorsos) => {
  let domString = '';
  arrayOfTorsos.forEach((torso) => {
    domString += `<a class="dropdown-item" type="${torso.id}"><img src="${torso.imageUrl}"><h3>${torso.name}</h3></a>`;
  });
  $('#torsoBlock').html(domString);
};

const writeLegs = (arrayOfLegs) => {
  let domString = '';
  arrayOfLegs.forEach((leg) => {
    domString += `<a class="dropdown-item" type="${leg.id}"><img src="${leg.imageUrl}"><h3>${leg.name}</h3></a>`;
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

// Selecting Lego Parts //

// Head //

const customWriteHeads = (head) => {
  let newString = '';
  newString += `
      <div class="head" id="${head.id}"><img src="${head.imageUrl}"></div>
  `;
  $('#headCheese').html(newString);
  $('#name').append(`<h3>${head.name}</h3>`);
};

const selectedHead = (clickedHead) => {
  partsView.getHeadsData()
    .then((heads) => {
      heads.data.forEach((customHead) => {
        if (clickedHead === customHead.id) {
          customWriteHeads(customHead);
        }
      });
    });
};

const pickYourHead = () => {
  $('#headBlock').on(('click'), (e) => {
    const selectedHeads = $(e.target)
      .closest('.dropdown-item')
      .attr('type');
    selectedHead(selectedHeads);
  });
};

// Torsos //

const customWriteTorsos = (torso) => {
  let newString = '';
  newString += `
    <div class="head" id="${torso.id}"><img src="${torso.imageUrl}"></div>
`;
  $('#torsoArea').html(newString);
  $('#name').append(`<h3>${torso.name}</h3>`);
};

const selectedTorso = (clickedTorso) => {
  partsView.getTorsoData()
    .then((torsos) => {
      torsos.data.forEach((customTorso) => {
        if (clickedTorso === customTorso.id) {
          customWriteTorsos(customTorso);
        }
      });
    });
};

const pickYourTorso = () => {
  $('#torsoBlock').on(('click'), (e) => {
    const selectedTorsos = $(e.target)
      .closest('.dropdown-item')
      .attr('type');
    selectedTorso(selectedTorsos);
  });
};

// Legs //

const customWriteLegs = (legs) => {
  let newString = '';
  newString += `
      <div class="legs" id="${legs.id}"><img src="${legs.imageUrl}"></div>
  `;
  $('#legsArea').html(newString);
  $('#name').append(`<h3>${legs.name}</h3>`);
};

const selectedLegz = (clickedLegs) => {
  partsView.getLegsData()
    .then((legs) => {
      legs.data.forEach((customLegs) => {
        if (clickedLegs === customLegs.id) {
          customWriteLegs(customLegs);
        }
      });
    });
};

const pickYourLegs = () => {
  $('#legBlock').on(('click'), (e) => {
    const selectedLegs = $(e.target)
      .closest('.dropdown-item')
      .attr('type');
    selectedLegz(selectedLegs);
  });
};

export default {
  initializeLegoView, writeHeads, writeTorsos, writeLegs, pickYourHead, pickYourTorso, pickYourLegs,
};
