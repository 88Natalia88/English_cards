
import { action, observable } from 'mobx';

const WordsStore = observable({
    words: [],
    error: null,
    isLoading: false,
    value: "",

    addWord: action((word) => {
        this.words.push(word);
    }),

    removeWord: action((index) => {
        this.words.splice(index, 1);
    }),

    setWords: action((words) => {
        this.words = words;
    }),

    updateWord: action((index, word) => {
        this.words[index] = word;
    })
});

export default WordsStore;