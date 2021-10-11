import {minifyRecords, table} from './utils/Airtable'

export const EmailSubmit = async (email) => {
  const date = new Date;

  try {
    const createdRecords = await table.create([
      {fields: 
        {
          verified: false,
          email: email,
      }
    }])
    // Returns the created object
    // console.log(createdRecords.length);
  } catch (error) {
    alert('Something went wrong')
    console.log('Something went wrong');
  }
}