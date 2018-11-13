import 'jquery';
import 'bootstrap';
import './index.scss';
import legoView from './components/LegoCharacter/legoCharacter';
import otherView from './helpers/events';
import anotherView from './components/SavedCharacters/savedCharacters';

const initializeMainView = () => {
  legoView.initializeLegoView();
  legoView.pickYourHead();
  legoView.pickYourTorso();
  legoView.pickYourLegs();
  otherView.displayHeads();
  otherView.displayTorsos();
  otherView.displayLegs();
  anotherView.savedLego();
};

initializeMainView();
