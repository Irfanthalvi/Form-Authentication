import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Details = () => {

    const [logindata, setlogindata] = useState([]);
    console.log(logindata)

    const history = useNavigate();
    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const birthday = () => {
        const getuser = localStorage.getItem("user_login")
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setlogindata(user);

            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });
            if (userbirth) {
                setTimeout(() => {
                    console.log("ok")
                    handleShow();
                }, 3000);
            }
        }
    }
    const logout=()=>{
        localStorage.removeItem("user_login")
        history("/");
    }
    useEffect(() => {
        birthday();
    }, [])
    return (
        <>
            <div>
                {
                    logindata.length === 0 ? "error" :
                        <>
                            <h1>Details page</h1>
                            <h1>{logindata[0].name}</h1>
                            <button onClick={logout}>LogOut</button>


                            {
                                logindata[0].date === todayDate ?
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{logindata[0].name}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>wih you many many happy return of the day</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleClose}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>:""
                            
                            }
                        </>
                }
            </div>
        </>
    )
}

export default Details