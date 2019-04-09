import Framework7 from 'framework7';

export default {
  getBandData(cb) {
    Framework7.request.get('http://localhost:4000/api/v1/band', data => {
      console.log(data);
      cb(data);
    });
  },
};
