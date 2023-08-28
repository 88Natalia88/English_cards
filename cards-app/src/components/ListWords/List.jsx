import "./List.scss";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import React, { useContext } from "react";
import { WordContext } from "../Context/Context";


function List(props) {
    const { words } = useContext(WordContext);

    const tableWords = words.map((word) => (
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