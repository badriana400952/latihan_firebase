import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css'
const User = () => {

    const collec = collection(db, 'user')
    const [user, setUser] = useState([])

    useEffect(() => {
        const tampilProduk = async () => {
            const data = await getDocs(collec)
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        tampilProduk()
    }, [])
    return (
        <Container className='my-5'>
        <h4 className='text-center '>Product New</h4>
            <Row>{
                user.map((d) => {
                    return(
                        <Col key={d.id} className="mt-3 center " sm={3} xs={6}>
                        <Card className='card'>
                            <Card.Img variant="top" src={d.images}  className="fotoCard hov"/>
                            <Card.Body className='cardBody'>
                                <h3>{d.name}</h3>
                                <p>{d.jurusan}</p>
                                <span> {d.alamat}</span>
                                <p> IDR. {d.telepon}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                })
            }
                
            </Row>
        </Container>
    )
}

export default User