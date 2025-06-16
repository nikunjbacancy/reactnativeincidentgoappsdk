import moment from 'moment';

const getIncidentDate = (date?: Date) => moment(date).format('lll');

export default getIncidentDate;
