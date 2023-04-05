const adjectives= ['super', 'blue', 'ultra'];
const nouns = ['Saiyan','Goku','Vegeta'];

export function getRandomName () {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}