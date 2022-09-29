var prompt = require ('prompt');

prompt.start();

prompt.get(['username','userAge'], function(err, result) {

    console.log('Console input received:');
    console.log('   Username:   ' + result.username);
    console.log('   Age:    ' + result.userAge);
});
