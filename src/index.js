import 'jquery';
import 'bootstrap';
import './index.scss';
import legoView from './components/LegoCharacter/legoCharacter';

const initializeMainView = () => {
  legoView.initializeLegoView();
};

initializeMainView();
