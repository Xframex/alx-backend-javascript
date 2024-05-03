const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const startp = sinon.spy(console);
    const endp = sinon.stub(Utils, 'calculateNumber');

    endp.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(endp.calledWith('SUM', 100, 20)).to.be.true;
    expect(endp.callCount).to.be.equal(1);
    expect(startp.log.calledWith('The total is: 10')).to.be.true;
    expect(startp.log.callCount).to.be.equal(1);
    endp.restore();
    startp.log.restore();
  });
});
