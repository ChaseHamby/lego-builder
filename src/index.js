import 'jquery';
import 'bootstrap';
import './index.scss';
import legoView from './components/LegoCharacter/legoCharacter';
import otherView from './helpers/events';

const initializeMainView = () => {
  legoView.initializeLegoView();
  otherView.displayHeads();
  otherView.displayTorsos();
  otherView.displayLegs();
};

initializeMainView();
