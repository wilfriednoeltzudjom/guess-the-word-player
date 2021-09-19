import moment from 'moment';

function now() {
  return moment().toDate();
}

function toISOString(date = moment()) {
  return moment(date).toISOString();
}

function diff(pastDate = moment(), currentDate = moment(), dateUnit = 'seconds') {
  return moment(currentDate).diff(pastDate, dateUnit);
}

export default { now, toISOString, diff };
