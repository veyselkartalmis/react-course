import { Button, Form, FormGroup } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContexts";
import { useContext, useState } from "react";

const AddForm = () => {
    const {addEmployee} = useContext(EmployeeContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    rows={3}
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Form.Control
                    type="text"
                    placeholder="Phone *"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
            </FormGroup>
            <Button variant="success" type="submit" block> 
                Add New Employee
            </Button>
        </Form>
    )
}

export default AddForm;