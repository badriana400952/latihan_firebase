import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container'

import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useNavigate, useParams } from 'react-router-dom';



const UserEdit = () => {
  const [name, setName] = useState("")
  const [jurusan, setJurusan] = useState("")
  const [telepon, setTelepon] = useState(0)
  const [alamat, setAlamat] = useState("")

  const [wname, setWname] = useState("")
  const [wjurusan, setWjurusan] = useState("")
  const [wtelepon, setWtelepon] = useState(0)
  const [walamat, setWalamat] = useState("")
  const {id} = useParams()
  const navigate = useNavigate()


  const colRef = doc(db, "user", id)
  const edata = async () => {
    const userSnapshoot = await getDoc(colRef)
    setWname(userSnapshoot.data().name)
    setWjurusan(userSnapshoot.data().jurusan)
    setWtelepon(userSnapshoot.data().telepon)
    setWalamat(userSnapshoot.data().alamat)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateDoc(colRef, {
      name: name,
      jurusan: jurusan,
      telepon: telepon,
      alamat: alamat
    })
    navigate("/")
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nama</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Nama"
              aria-label="Username"
              aria-describedby="basic-addon1"
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Jurusan</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Jurusan"
              aria-label="Username"
              type='text'
              value={jurusan}
              name='jurusan'
              onChange={(e) => setJurusan(e.target.value)}
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form.Group><Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Telepon</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Telepon"
              name='telepon'
              value={telepon}
              type='number'
              aria-label="Username"
              onChange={(e) => setTelepon(e.target.value)}
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form.Group><Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Alamat</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Alamat"
              aria-label="Username"
              type='text'
              value={alamat}
              name='alamat'
              onChange={(e) => setAlamat(e.target.value)}
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default UserEdit
