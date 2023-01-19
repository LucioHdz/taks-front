import React from 'react'

const Users = ({ setUser }) => {
    return (
        <div className="total bg-dark col-12 d-flex justify-content-center align-items-center acomodar-columnas">
            <button
                className="btn btn-outline-light me-3 col-sm-12 col-md-5 fs-1"
                style={{ height: '90%' }}
                onClick={() => setUser("Vero")}
            >
                <i className="bi bi-balloon-heart-fill" style={{ fontSize: '300%' }}></i>
                <p>Vero</p>
            </button>
            <button
                className="btn btn-outline-light col-sm-12 col-md-5 fs-1"
                style={{ height: '90%' }}
                onClick={() => setUser("Lucio")}
            >
                <i className="bi bi-code-slash" style={{ fontSize: '300%' }}></i>
                <p>Lucio</p>
            </button>
        </div>
    )
}

export default Users