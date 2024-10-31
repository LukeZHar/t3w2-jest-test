function niceLogger(){
    console.log('Nice logger');
    return 'Nice logger';
}

function messageRepeater(messageToRepeat){  
    // Message repeater functionality
    // stmts
    // return messageToRepeat.toString() + messageToRepeat.toString() + messageToRepeat.toString();

    //  or
    if (Array.isArray(messageToRepeat)){
        return [...messageToRepeat, ...messageToRepeat, ...messageToRepeat];
    }
    else {
        let stringMessageToRepeat = messageToRepeat.toString();
        return stringMessageToRepeat + stringMessageToRepeat + stringMessageToRepeat;
    }
}

module.exports = {
    niceLogger,
    messageRepeater
}