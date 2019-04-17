'use strict'

const getAvatarPercentages = function(body) {

    var userId = body.userId

    return new Promise(function(success, nosuccess) {
      console.log("1")

      const { spawn } = require('child_process');
      const pyprog = spawn('python2', ["/Users/ackulkarni/Documents/ackulkarni/ebay_avatar/data/getTopTenByUserId.py", userId]);

      pyprog.stdout.on('data', function(data) {
         console.log("Success - Python Executed")
          success(data);
      });

      pyprog.stderr.on('data', (data) => {

        console.log("Failure - Python Failure")

          nosuccess(data);
      });


    }).catch((error) => {
              console.log("error in landing : " + error)

});

}

module.exports = getAvatarPercentages
