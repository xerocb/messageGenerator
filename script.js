const prompts = [ // first part of message
    'Call1 <blank>',
    '<blank> Call2',
    '<blank> Call3 <blank> <blank>'
]; 
const responses = [ // second part of message
    'Response1',
    'Response2',
    'Response3'
];

function generateMessage() {
    // get random prompt
    const pIndex = Math.floor(Math.random() * prompts.length);
    let message = prompts[pIndex];

    // for every blank in prompt, fill in a random response without replacement
    const numOfBlanks = (message.match(/<blank>/g)).length;
    let chosenResponses = [];
    
    for (let i = 0; i < numOfBlanks; i++) {
        let rIndex = Math.floor(Math.random() * responses.length);
        let response = responses[rIndex];

        while (chosenResponses.includes(response)) {
            rIndex = Math.floor(Math.random() * responses.length);
            response = responses[rIndex];
        }

        message = message.replace("<blank>", response);
        chosenResponses.push(response);
    }

    // output message
    console.log(message);
}

generateMessage();