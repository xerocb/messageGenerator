const calls = [ // first part of message
    'Call1',
    'Call2',
    'Call3'
]; 
const responses = [ // second part of message
    'Response1',
    'Response2',
    'Response3'
];

function generateMessage() {
    // generate 2 random numbers in ranges of calls and responses
    const callIndex = Math.floor(Math.random() * calls.length);
    const respIndex = Math.floor(Math.random() * responses.length);

    // select a call + response
    const selectedCall = calls[callIndex];
    const selectedResp = responses[respIndex];

    // output chosen message
    console.log(selectedCall);
    console.log(selectedResp);
}

generateMessage();