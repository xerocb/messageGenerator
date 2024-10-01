const prompts = [ 
    "I'm sorry, Sir, but I couldn't complete my homework because of <blank>.",
    "As the mum of five rambunctious boys, I'm no stranger to <blank>.",
    'Bloody hell! My video of <blank> has ten million views!',
    'Hey guys, welcome to TGI Fridays! Would you like to start the night off right with <blank>?',
    'Goodbye, <blank>, hello <blank>!',
    'And the BAFTA for <blank> goes to <blank>.'
]; 
const responses = [ 
    'a “Live Laugh Love” tattoo',
    'a comprehensive understanding of the Irish backstop',
    'a deep-rooted fear of the working class',
    'a foetus',
    'a general lack of purpose',
    'a Ginsters pasty and three cans of Monster Energy',
    'an AK-47 assault rifle',
    'a white van man',
    'ripping off the Beatles',
    'the Black Death',
    'the bloody Welsh',
    'the French',
    'the sudden appearance of the Go Compare man'
];

function generateMessage() {
    // get random prompt
    const pIndex = Math.floor(Math.random() * prompts.length);
    let message = prompts[pIndex];

    // for every blank in prompt, fill in a random response without replacement
    const numOfBlanks = (message.match(/<blank>/g)).length;
    const chosenResponses = [];
    
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