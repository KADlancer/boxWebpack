import React from "react";
import { storiesOf } from "@storybook/react";

import { DataTable } from "carbon-components-react";

const {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    TableHeader
} = DataTable;

// Given that we have the following rows with the fields `foo`, `bar`, and `baz`
const initialRows = [
    {
        id: "a",
        foo: "Foo a",
        bar: "Bar a",
        baz: "Baz a"
    },
    {
        id: "b",
        foo: "Foo b",
        bar: "Bar b",
        baz: "Baz b"
    },
    {
        id: "c",
        foo: "Foo c",
        bar: "Bar c",
        baz: "Baz c"
    }
];

// We would have a headers array like the following
const headers = [
    {
        // `key` is the name of the field on the row object itself for the header
        key: "foo",
        // `header` will be the name you want rendered in the Table Header
        header: "Foo"
    },
    {
        key: "bar",
        header: "Bar"
    },
    {
        key: "baz",
        header: "Baz"
    }
];

storiesOf("Organisms/DataTable", module).add("default", () => (
    <DataTable
        rows={initialRows}
        headers={headers}
        render={({ rows, headers, getHeaderProps }) => (
            <TableContainer title="DataTable">
                <Table>
                    <TableHead>
                        <TableRow>
                            {headers.map(header => (
                                <TableHeader {...getHeaderProps({ header })}>
                                    {header.header}
                                </TableHeader>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                {row.cells.map(cell => (
                                    <TableCell key={cell.id}>
                                        {cell.value}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )}
    />
));
