import { addDoc, collection } from 'firebase/firestore'
import React, {  useState } from 'react'
import { db, storage } from '../firebase'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

const UserAdd = () => {
    const [name, setName] = useState("")
    const [jurusan, setJurusan] = useState("")
    const [telepon, setTelepon] = useState(0)
    const [alamat, setAlamat] = useState("")
    const [images, setImages] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const navigat = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
     
        try {
            const docRef = collection(db, 'user')

            const storageRef = ref(storage, `images/${Date.now() + images.name}`)
            const uploadTask = uploadBytesResumable(storageRef, images)

            uploadTask.on(() => {
                alert('gambar gagal di upload')
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downLoadUrl) => {
                    await addDoc(docRef, {
                        name: name,
                        jurusan: jurusan,
                        telepon: telepon,
                        alamat: alamat,
                        images: downLoadUrl
                    })
                })
                // alert('gambar berhasil di upload')
            })
        } catch (err) {
            setIsLoading(false)
            alert('gagal menambahkan data')
        }
        navigat("/")
    }
    return (
        <Container>
        {
            isLoading ? <h3>loading. . . </h3> : <Container>
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
                            type='number'
                            aria-label="Username"
                            onChange={(e) => setTelepon(e.target.value)}
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Alamat</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Alamat"
                            aria-label="Username"
                            type='text'
                            name='alamat'
                            onChange={(e) => setAlamat(e.target.value)}
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>img</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Alamat"
                            aria-label="Username"
                            type='file'
                            name='images'
                            onChange={(e) => setImages(e.target.files[0])}
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Container> 
        }
            
        </Container>
    )
}

export default UserAdd