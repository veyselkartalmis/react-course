import { useContext, useState, useEffect } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "../contexts/EmployeeContexts";
import { Button, Modal, Alert } from "react-bootstrap";
import AddForm from "./AddForm";

const EmployeeList = () => {
    const { employees } = useContext(EmployeeContext);
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    /* Modalın açılıp kapanması için gereken setState fonksiyonları */
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /* Gelen alert mesajının 2 sn sonra otomatik olarak kapanması için yazdığım kod */
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };

    useEffect(() => { /* Koşula bağlı olarak veya olmayarak herhangi bir değişikiklikte yapılacak işlemi belirtebilirsin */
        handleClose();
        return () => {
            handleShowAlert();
        };
    }, [employees]) /* employees dizisinde değişiklik olduğunda handleClose() çalışacaktır */

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success">
                Employee list successfully updated.
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.sort((a,b) => a.name.localeCompare(b.name)).map((employee) => (
                            <tr key={employee.id}>
                                <Employee employee={employee}/> {/* Yazılan sort fonksiyonu A'dan Z'ye sıralama yapar */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* Yeni kayıt eklemek için gerekli olan modali oluşturuyorum */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close Modal</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EmployeeList;