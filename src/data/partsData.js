import axios from 'axios';

const getHeadsData = () => axios.get('http://localhost:3003/heads');
const getTorsoData = () => axios.get('http://localhost:3003/torsos');
const getLegsData = () => axios.get('http://localhost:3003/legs');

export default { getHeadsData, getTorsoData, getLegsData };
