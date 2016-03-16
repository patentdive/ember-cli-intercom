import Ember from 'ember';

export default Ember.Service.extend({
  boot(params) {
    Intercom('boot', params);
  },

  update(params) {
    Intercom('update', params);
  },
  
  shutdown() {
    Intercom('shutdown');
  },
  
  show() {
    Intercom('show');
  },
  
  hide() {
    Intercom('hide');
  },
  
  shutdown() {
    Intercom('shutdown');
  },
  
  showMessages() {
    Intercom('showMessages');
  },
  
  showNewMessage(params) {
    Intercom('showNewMessage', params);
  },
  
  onHide(params) {
    Intercom('onHide', params);
  },
  
  onShow(params) {
    Intercom('onShow', params);
  },
  
  onActivatorClick(params) {
    Intercom('onActivatorClick', params);
  },
  
  trackEvent(eventName, metadata) {
    Intercom('trackEvent', eventName, metadata);
  }
  
});
