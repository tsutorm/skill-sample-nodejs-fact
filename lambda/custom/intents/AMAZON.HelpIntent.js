'use strict';

module.exports = function() {
  var speechOutput = this.t('HELP_MESSAGE');
  var reprompt = this.t('HELP_REPROMPT');
  this.emit(':ask', speechOutput, reprompt);
};
