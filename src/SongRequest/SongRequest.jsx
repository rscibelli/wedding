import React, { useState, useEffect } from 'react';
import "./SongRequest.css";
import 'bootswatch/dist/minty/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { createSongRequest, getSongRequests } from '../functions';

export default function SongRequest() {
    const [show, setShow] = useState(false);
    const [song, setSong] = useState(null);
    const [artist, setArtist] = useState(null);
    const [name, setName] = useState(null);
    const [data, setData] = useState([])
    const [tableData, setTableData] = useState([])
    // const [status, setStatus] = useState(null);

    useEffect(() => {
      getTableData()
    });

    const toggleShow = () => setShow(!show);

    const postData = () => {
      let nameValue = ""
      if(name) {
        nameValue = name.target.value
      }

      let toPost = {
        song: song.target.value,
        artist: artist.target.value,
        name: nameValue
      }
      createSongRequest(toPost)
      // setStatus(postStatus)
      console.log(toPost)
      setSong(null)
      setArtist(null)
      setName(null)
      setShow(!show)
    }

    const getTableData = () => {
      callSongs()
      let tableData = []
      let rowNum = 0

      let songs = getSongRequests()

      songs.array.forEach(request => {
        tableData.push(
          <tr>
            <th scope="row">{rowNum++}</th>
            <td>{request.song}</td>
            <td>{request.artist}</td>
            <td>{request.name}</td>
          </tr>
        )
      });

      setTableData(tableData)
    }

    const callSongs = () => {
      let datatemp = getSongRequests()
      console.log(datatemp)
      setTableData(datatemp)
    }

    return (
      <div>
        <div className="hero-image-song">
          <div className="hero-text-song">
          <div className="lead pb-3">Request a song to be played at the wedding!</div>

          <Button variant="btn btn-outline-primary" onClick={toggleShow}>Request a song</Button>
          </div>
        </div>

        <div className='py-5 px-3'>
          <h3>Songs Requested</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Song</th>
                <th scope="col">Artist</th>
                <th scope="col">Requester</th>
              </tr>
            </thead>
            <tbody>
              {tableData}
              {/* <tr>
                <th scope="row">1</th>
                <td>Through the fire and the flames</td>
                <td>DragonForce</td>
                <td>Rob</td>
              </tr> */}
            </tbody>
          </table>
        </div>

        <Modal show={show} onHide={toggleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Song Request</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group >
                <Form.Label>Song *</Form.Label>
                <Form.Control type="text" onChange={setSong} required /> 

                <Form.Label>Artist *</Form.Label>
                <Form.Control type="text" onChange={setArtist} />   

                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" onChange={setName} />           
            </Form.Group>
            {/* <form className="needs-validation" onsubmit={postData(this)} novalidate>
              <div className="mb-3">
                <label for="song1" className="form-label">Song *</label>
                <input type="song" className="form-control" id="song1" required />
              </div>
              <div className="mb-3">
                <label for="artist1" className="form-label">Artist *</label>
                <input type="artist" className="form-control" id="artist1" required />
              </div>
              <div className="mb-3">
                <label for="name1" className="form-label">Your Name</label>
                <input type="artist" className="form-control" id="name1" />
                <p id="emailHelp" className="form-text"><small>Optinal</small></p>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={postData}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>

        {/* <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-body">
            {status}
          </div>
        </div> */}

        <Button variant="btn btn-outline-primary" onClick={callSongs}>click to get the data</Button>

      </div>
    );
}