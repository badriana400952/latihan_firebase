import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';




const AddProduk = () => {
  const produkCollectionRef = collection(db, "produk")
  const navigate = useNavigate()
  const [newName, setNewName] = useState("")
  const [newDeskripsi, setNewDeskripsi] = useState("")
  const [newHarga, setnewHarga] = useState(0)


  const handleSubmit = async (e) => {
    e.preventDefault()
    await addDoc(produkCollectionRef, {
      name: newName,
      harga: newHarga,
      deskripsi: newDeskripsi
    })
    navigate("/")
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nama Produk</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              type="text"
              name="name"
              onChange={(e) => setNewName(e.target.value)}
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
              name="harga"
              onChange={(e) => setNewDeskripsi(e.target.value)}
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="Deskripasi">
          <Form.Control
            as="textarea"
            onChange={(e) => setnewHarga(e.target.value)}
            name="deskripasi"
            placeholder="Deskripsi"
            style={{ height: '100px' }} />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
export default AddProduk;