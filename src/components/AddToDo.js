import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react'


const AddToDo = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    return (
        <Form
            onSubmit={(event) => {
                event.preventDefault();
                onSubmit(value);
                setValue('');
            }}
        >
            <Form.Group widths='equal'>
                <Form.Field>
                    <input
                        type="text"
                        className="form-control"
                        id="inputToDo"
                        placeholder="What else do you need to do today?"
                        onChange={(event) => {
                            setValue(event.target.value);
                        }}
                        value={value}
                    />
                </Form.Field>
                <Button type='submit'>Add</Button>
            </Form.Group>
        </Form>
    );
};

export default AddToDo;