import React from "react";
import './List.scss';

function TableHeader() {
    return (
        <thead>
            <tr>
                <th>Слова</th>
                <th>Транскрипция</th>
                <th>Перевод</th>
                <th></th>
            </tr>
        </thead>
        );
    }
export default TableHeader;