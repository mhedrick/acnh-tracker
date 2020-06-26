import React from 'react';
import { Checkbox, Form, Button } from 'semantic-ui-react'

const DailiesList = ({ items, setChecked, removeItems }) => {
    return (
        <Form>
            {items.map(({label, checked}, index) =>
                <Form.Group widths='equal' key={index}>
                    <Form.Field
                        control={Checkbox}
                        label={label}
                        defaultChecked={checked}
                        onChange={() => setChecked(index)}
                    />
                    <Button
                        negative
                        icon="delete"
                        size="mini"
                        onClick={() => removeItems(index)} />
                </Form.Group>
            )}
        </Form>
    );
};

export default DailiesList;