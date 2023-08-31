import React from "react";

import { action, observable } from 'mobx';

const WordsStore = observable({
    words: [],

    addWord: action(function(word) {
        this.words.push(word);
    }),

    removeWord: action(function(index) {
        this.words.splice(index, 1);
    })
});

export default WordsStore;