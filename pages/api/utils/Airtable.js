const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keymNWnyBGQJTRYMU'}).base('appMcrLQfAF4Fz9Kq');

const table = base('waitlist');


const minifyRecords = (record) => {
  return record.map((record) => getMinifiedRecords(record));
};

const getMinifiedRecords = (record) => {
  if(!record.fields.verified) {
    record.fields.verified = false;
  }
  return {
    id: record.id,
    fields: record.fields,
  };
}

export {table, minifyRecords, getMinifiedRecords};