const TextProcessing = require('./Practical_4');

const filePath = 'Practical_4_1.txt';

const wordCount = TextProcessing.countWords(filePath);

console.log('Total words:',wordCount);