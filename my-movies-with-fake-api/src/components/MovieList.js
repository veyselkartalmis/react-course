import React from "react";

const MovieList = (props) => {
    return (
        <div className="row">
            {/* App.js'de oluşturduğum movies stateini map fonksiyonundan geçirip nesnelere dönüştürüyorum */}
            {props.movies.map((movie) => (
                <div className="col-lg-3" key={movie.id}> {/* Key propsu vermemizin nedeni ileride oluşacak CRUD işlemleri için  */}
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageURL} className="card-img-top w-100" alt="Sample Img" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{movie.overview}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                {/* Butona yazdığım event ise basılan filmi id numarasına göre siler */}
                                <button type="button" onClick={(event) => props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                                <h2><span className="badge bg-info">{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieList;