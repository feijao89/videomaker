const readline = require('readline-sync')


const content = {}

content.searchTerm = askAndReturnSerachTerm()
content.prefix = askAndReturnPrefix()

function askAndReturnSerachTerm(){
	return readline.question('Type a Wikipedia search term: ')
}
function askAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]

	return selectedPrefixText
 }
	console.log(content)
