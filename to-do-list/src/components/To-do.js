import React, { useState } from "react"
import ToDoCss from "../css/ToDoCss.css"
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import { BsX } from 'react-icons/bs';

const ToDo = () => {
    const [toDo, setToDo] = useState("")
    const [toDoArray, setToDoArray] = useState([])
    const addToDo = () => {
        if (!toDoArray.includes(toDo)) {
            setToDoArray([...toDoArray, toDo])
            setToDo("")
        }
    }
    const removeToDo = (itemToBeRemoved) => {
        let newArray = toDoArray.filter((item) => {
            return item !== itemToBeRemoved
        })
        setToDoArray(newArray)
    }
    return (
        <>
            <Container className="column">
                <Row className="mt-3 column">
                    <Col md={12}> <h3 >TODO LIST</h3></Col>
                    <Col md={12}>
                        <Form className="group">
                            <Form.Group>
                                <Form.Control
                                    value={toDo}
                                    type="text" placeholder="Enter ToDo"
                                    onChange={(e) => setToDo(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Button className="add_btn" size="sm"
                                variant="info" onClick={addToDo}>Add</Button>
                        </Form>
                    </Col>
                    <Col md={12}  className="g_div">
                        <div>
                            <ul>
                                {toDoArray.map((item, index) => {
                                    return (
                                        <div key={index} className="group">
                                            <li className="list_item" >{item}</li>
                                            <span className="column" onClick={() => removeToDo(item)} size={70}><BsX/></span>
                                        </div>
                                    )
                                })
                                }
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ToDo