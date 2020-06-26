import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { Header } from 'semantic-ui-react'
import Page from '../components/Page';
import AddToDo from '../components/AddToDo';
import DailiesList from '../components/DailiesList';

function DailiesPage() {
    const [todos, setTodos] = useLocalStorage('todos', []);

    return (
        <Page>
            <Header as='h1'>Dailies</Header>
            <AddToDo onSubmit={(todoText) => {
                const trimmedText = todoText.trim();

                if (trimmedText.length > 0) {
                    setTodos([...todos, {label: trimmedText, checked: false}]);
                }
            }} />
            <DailiesList
                items={todos}
                setChecked={(index) => {
                    todos[index].checked = !todos[index].checked
                    const newTodos = todos;
                    setTodos(newTodos);
                }}
                removeItems={(todoIndex) => {
                    const newTodos = todos.filter((_, index) => index !== todoIndex);

                    setTodos(newTodos);
                }} />
        </Page>);
}


export default DailiesPage;