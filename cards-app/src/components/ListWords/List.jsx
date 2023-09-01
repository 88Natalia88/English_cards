import React, { useEffect } from "react";
import "./List.scss";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { inject, observer } from "mobx-react";
import NewWordRow from "./NewWordRow";

const List = inject("wordStore")(observer(({ wordStore }) => {
    useEffect(() => {
        fetch("/api/words")
            .then((response) => response.json())
            .then((data) => wordStore.setWords(data))
            .catch((error) => {
                console.log(error);
        });
    }, [wordStore]);

    const tableWords = wordStore.words.map((word) => (
        <TableRow key={word.id} word={word} />
    ));

    return (
        <table>
        <TableHeader />
            <tbody>
                <NewWordRow />
                {tableWords}
            </tbody>
        </table>
    );
}));

export default List;