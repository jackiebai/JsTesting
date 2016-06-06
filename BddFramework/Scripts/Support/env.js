var configure = function (){
    this.setDefaultTimeout((process.env.WAIT_TIMEOUT||60) * 1000);
};
module.exports = configure;