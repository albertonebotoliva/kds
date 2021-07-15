import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Selector, Search, DataTable, Dialog } from '..';
const mockFilms = require('../../services/mockFilms.json');

const props = {
    selectors: [
        { id: 1, label: "films", uri: "films/" },
        { id: 2, label: "people", uri: "people/" },
        { id: 3, label: "planets", uri: "planets/" },
        { id: 4, label: "species", uri: "species/" },
        { id: 5, label: "starships", uri: "starships/" },
        { id: 6, label: "vehicles", uri: "vehicles/" }
    ],
    isFetching: false,
    endpoint: "films/",
    query: "",
    page: 1,
    response: {
        count: 0,
        next: null,
        previous: null,
        results: []
    },
    dialog: {
        open: false,
        result: null
    }
}
describe('Components', () => {
    test('Selector - Renders', () => {
        render(<Selector
            items={props.selectors}
            loading={props.isFetching}
            onClick={() => { }}
        />);
        const element = screen.getByText(/films/i);
        expect(element).toBeInTheDocument();
    });
    test('Selector - Click', async () => {
        const handleClick = jest.fn();
        render(<Selector
            items={props.selectors}
            loading={props.isFetching}
            onClick={handleClick}
        />);
        const element = screen.getByText(/films/i);
        fireEvent.click(element);
        expect(handleClick).toHaveBeenCalledTimes(1);

    });
    test('Search - Renders', () => {
        render(<Search
            endpoint={props.endpoint}
            loading={props.isFetching}
            onChange={() => { }}
        />);
        const element = screen.getByPlaceholderText(/search/i);
        expect(element).toBeInTheDocument();
    });
    test('Search - Change', async () => {
        const handleChange = jest.fn();
        render(<Search
            endpoint={props.endpoint}
            loading={props.isFetching}
            onChange={handleChange}
        />);
        const element = screen.getByPlaceholderText(/search/i);
        fireEvent.change(element, { target: { value: 'Luke Skywalker' } });
        await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(1), { timeout: 350 });
    });
    test('DataTable - Renders', () => {
        render(<DataTable
            data={mockFilms}
            loading={props.isFetching}
            page={props.page}
            setDialog={() => { }}
            onPageChange={() => { }}
        />);
        const element = screen.getByText(/A New Hope/i);
        expect(element).toBeInTheDocument();
    });
    test('DataTable - Click', () => {
        const handleClick = jest.fn();
        render(<DataTable
            data={mockFilms}
            loading={props.isFetching}
            page={props.page}
            setDialog={handleClick}
            onPageChange={() => { }}
        />);
        const element = screen.getByRole("tablerow");
        fireEvent.click(element);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test('Dialog - Renders', () => {
        render(<Dialog
            dialog={{ open: true, result: { testkey: "testvalue" } }}
            setDialog={() => { }}
        />);
        const element = screen.getByText(/testkey/i);
        expect(element).toBeInTheDocument();
    });
})



