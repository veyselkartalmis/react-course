import { Button, Form, FormGroup } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContexts";
import { useContext, useState } from "react";

const EditForm = () => {
    const {updateEmployee} = useContext(EmployeeContext);

    return (
        <Form>
            <FormGroup>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                />
            </FormGroup>
            <FormGroup>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                />
            </FormGroup>
            <FormGroup>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    rows={3}
                />
            </FormGroup>
            <FormGroup>
                <Form.Control
                    type="text"
                    placeholder="Phone *"
                />
            </FormGroup>
            <Button variant="success" type="submit" block> 
                Edit Employee
            </Button>
        </Form>
    )
}

export default EditForm;