import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { Button, Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './style.css'
import User from './User';

const UserHome = () => {

    const [user, setUser] = useState([])
    const colRef = collection(db, 'user')

    useEffect(() => {
        const addProduct = async () => {
            const data = await getDocs(colRef)
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        addProduct()
    }, [])

    const handleDelete = async (id) => {
        const confg = window.confirm('tindakan yang anda lakukan akan menghapus data')
        if (confg) {
            await deleteDoc(doc(db, 'user', id))
        }
    }

    return (
        <Container className="mt-3">

            <Button><Link to={'add'} className='text-light text-decoration-none'>Tambah Data</Link> </Button>
            <Button><Link to={'user'} variant="dark" className='text-light text-decoration-none'>lihat user</Link> </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Jurusan</th>
                        <th>Telepon</th>
                        <th>Alamat</th>
                        <th>images</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((d) =>
                            <tr key={d.id}>
                                <td>{d.name}</td>
                                <td>{d.jurusan}</td>
                                <td>{d.telepon}</td>
                                <td>{d.alamat}</td>
                                <td> <img src={d.images} alt={d.name} className="foto"/></td>
                                <td>
                                    <Link to={`/edit/${d.id}`} className='text-sucess text-decoration-none'>Edit</Link>
                                    <Button onClick={() => handleDelete(d.id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
            <User/>
        </Container>
    )
}

export default UserHome