export default {
  data: function() {
    pointGauge: {
    }
  },
  bandCreate(value, app) {
    this.pointGauge = app.gauge.create({
      el: '.point-gauge',
      type: 'circle',
      value: value,
      size: 250,
      borderColor: '#2196f3',
      borderWidth: 20,
      valueText: '50%',
      valueFontSize: 41,
      valueTextColor: '#2196f3',
      labelText: ' ',
    });
  },
  bandUpdate(value, text) {
    if (value > 0) {
      this.pointGauge.update({
        value: value / 12,
        valueText: value + 'point',
        labelText: text,
      });
    } else {
      this.pointGauge.update({
        value: 0,
        valueText: 0 + 'point',
        labelText: '아무 것도 안하시네요',
      });
    }
  },
};
