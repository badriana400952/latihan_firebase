import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import {db} from '../firebase'

const EditProduk = () => {
  const [name, setName] = useState("")
  const [deskripsi, setDeskripsi] = useState("")
  const [harga, setHarga] = useState(0)
  const {id} = useParams()
  const [ename, setEname] = useState('')
  const [edeskripsi, setEdeskripsi] = useState('')
  const [eharga, setEharga] = useState(0)
  const navigate = useNavigate()

  const getRef = doc(db, "produk", id)
    const getd = async () => {
    const produkSnapshoot = await getDoc(getRef)
    setEname(produkSnapshoot.data().name)
    setEdeskripsi(produkSnapshoot.data().deskripsi)
    setEharga(produkSnapshoot.data().harga)
  }

  const handleEdit = async(e)=> {
  e.preventDefault()
    await updateDoc(getRef, {
      name: name,
      harga: Number(harga),
      deskripsi: deskripsi
    })
    navigate("/")
  }

  return (
    <Container>
      <Form onSubmit={handleEdit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nama Produk</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Harga</Form.Label>
          <InputGroup className="mb-3"  >
            <Form.Control
              placeholder="Harga"
              aria-label="Username"
              type="number"
              value={harga}
              name="harga"
              onChange={(e) => setHarga(e.target.value)}
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="Deskripasi">
          <Form.Control
            as="textarea"
            onChange={(e) => setDeskripsi(e.target.value)}
            name="deskripasi"
              value={deskripsi}
            placeholder="Deskripsi"
            style={{ height: '100px' }}
          />
        </FloatingLabel>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default EditProduk
