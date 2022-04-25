import { Button, Form, FormGroup } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContexts";
import { useContext, useState } from "react";

const EditForm = ({ theEmployee }) => {
    const { updateEmployee } = useContext(EmployeeContext);

    const employee = theEmployee;
    const id = employee.id;

    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [address, setAddress] = useState(employee.address);
    const [phone, setPhone] = useState(employee.phone);

    const updatedEmployee = { id, name, email, address, phone };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    rows={3}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Form.Control
                    type="text"
                    placeholder="Phone *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </FormGroup>
            <Button variant="success" type="submit" block>
                Edit Employee
            </Button>
        </Form>
    )
}

export default EditForm;