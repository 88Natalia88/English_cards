import React from "react";
import "./List.scss";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function List(props) {
    const tableWords = props.words.map((word) => (
        <TableRow key={word.id} word={word} />
    ));
    return (
        <table>
            <TableHeader />
            <tbody>{tableWords}</tbody>
        </table>
        );
    }
export default List;