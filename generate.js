module.exports = function(domain, numberAddresses, joiner, length) {

    var email = "";
    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var numberAddressess = "0123456789";

    var possibleChars = uppercaseLetters.concat( lowercaseLetters, numberAddressess );

    var emails = [];
    for( var xx = 0; xx < numberAddresses; xx++ ) {
        var characters = [];
        for( var letter = 0; letter < length; letter++ ) {
            var randomNumber = Math.round( Math.random() * ( possibleChars.length - 1) );
            var chosenChar = possibleChars[randomNumber];
            characters.push( chosenChar );
        }

        var emailName = characters.join("");

        emails.push( emailName.concat( "@", domain ) );
    }


    return emails.join( joiner );
}
