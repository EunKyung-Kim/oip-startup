import Framework7 from 'framework7';
//const endpoint = 'http://localhost:4000';
const endpoint = 'https://kbli-startup-api-server.mybluemix.net';
const userid = 'kimoa';
const date = new Date();
const mm = date.getMonth() + 1;
const dd = date.getDate();
const yyyymmdd = [date.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('');

export default {
  getBandData(cb) {
    Framework7.request.get(`${endpoint}/api/v1/point/${yyyymmdd}_${userid}`, data => {
      console.log(data);
      cb(data);
    });
  },
  getHistory(cb) {
    Framework7.request.get(`${endpoint}/api/v1/point/${userid}/${(mm > 9 ? '' : '0') + mm}`, data => {
      console.log(data);
      cb(data);
    });
  },
  getPhotoClassify(form, cb) {
    const params = {
      url: `${endpoint}/api/v1/visual/classify`,
      method: 'POST',
      contentType: 'multipart/form-data',
      data: form,
      success: function(data) {
        console.log(data);
        cb(data);
      },
    };

    Framework7.request(params);
  },
  getWeather(cb) {
    Framework7.request.get(`${endpoint}/api/v1/weather/getweather`, data => {
      console.log(data);
      cb(JSON.parse(data));
    });
  },
  getPoint(cb) {
    Framework7.request.get(`${endpoint}/api/v1/point/${yyyymmdd}_${userid}`, data => {
      console.log(data);
      cb(JSON.parse(data));
    });
  },
  addFoodPoint(foods, cb) {
    console.log(foods);

    Framework7.request.postJSON(`${endpoint}/api/v1/point/food/${yyyymmdd}_${userid}`, foods, function(data) {
      console.log(data);
      cb(data);
    });
  },
  addPoint(cb) {},
};
