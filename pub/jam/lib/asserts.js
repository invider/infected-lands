var asserts = {
    assertTrue: function(value, exception) {
        if (!value){
            let exception = (exception instanceof Error) ? exception: new Error(exception);
            throw exception
        }
    },
    notEmpty: function(value, exception){
        if (!value){
            let exception = (exception instanceof Error) ? exception: new Error(exception);
            throw exception
        }
    }
};
module.exports = asserts;