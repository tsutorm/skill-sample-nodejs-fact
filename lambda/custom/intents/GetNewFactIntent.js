'use strict';

module.exports = function() {
  var factArr = this.t('FACTS');
  var factIndex = Math.floor(Math.random() * factArr.length);
  var randomFact = factArr[factIndex];
  var speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
  this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact)
};
