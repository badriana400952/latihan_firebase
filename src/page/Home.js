import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'


const Home = () => {


  const [produk, setProduk] = useState([])
  const produkCollectionRef = collection(db, "produk")
  useEffect(() => {
    const getProduk = async () => {
      const data = await getDocs(produkCollectionRef)
      setProduk(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getProduk()
  }, [])

  const handleDelete = async (id) => {
    const conf = window.confirm("anda yakin ingin menghapus??")
    if (conf) {
      await deleteDoc(doc(db, "produk", id));
    }
  }
  return (
    <Container className='mt-5'>
      <Button><Link to={"/add"} className="text-light text-decoration-none">Tambah Produk</Link></Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nama produk</th>
            <th>harga</th>
            <th>deskripsi</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {
            produk.map((p) =>
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.harga}</td>
                <td>{p.deskripsi}</td>
                <td>
                  <Link to={`/edit/${p.id}`} className="text-success text-decoration-none">Edit</Link>
                  <Button onClick={() => handleDelete(p.id)}>Hapus</Button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>

    </Container>
  )
}

export default Home