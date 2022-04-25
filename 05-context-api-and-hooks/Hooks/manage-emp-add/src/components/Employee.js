import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../contexts/EmployeeContexts";
import { Button, Modal } from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({ employee }) => {
    const {deleteEmployee} = useContext(EmployeeContext);
    const [show, setShow] = useState(false);

    /* Modalın açılıp kapanması için gereken setState fonksiyonları */
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleClose();
    }, [employee])

    return (
        <>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <button onClick={handleShow} className="btn text-warning p-0" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger p-0" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm theEmployee={employee} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close Modal</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Employee;