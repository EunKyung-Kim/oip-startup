// data-type="semicircle" data-value="0.0" data-value-text="0 point"
//           data-value-text-color="#e91e63" data-border-color="#e91e63" data-label-text="of 12 point total"
//           data-label-text-color="#333"

export default {
  data: function() {
    pointGauge: {
    }
  },
  bandCreate(value, app) {
    this.pointGauge = app.gauge.create({
      el: '.detail-gauge',
      type: 'semicircle',
      value: value,
      size: 250,
      borderColor: '#2196f3',
      borderWidth: 20,
      valueText: '0 Point',
      valueFontSize: 41,
      valueTextColor: '#2196f3',
      labelText: ' ',
    });
  },
  bandUpdate(value, text) {
    if (value > 0) {
      this.pointGauge.update({
        value: value / 12,
        valueText: value + 'Point',
        labelText: text,
      });
    } else {
      this.pointGauge.update({
        value: 0,
        valueText: 0 + 'Point',
        labelText: 'of 12 Point',
      });
    }
  },
};
