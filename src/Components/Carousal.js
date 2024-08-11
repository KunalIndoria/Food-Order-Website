import React from 'react'

export default function Carousal() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit : "contain"}}>
                <div className='carousel-caption' style={{ zIndex: "10" }}>


                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                    </form>


                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images8.alphacoders.com/103/1032061.jpg" className="d-block w-100" style={{filter : "brightness(30%)", height:"500px"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Wallpapers-Free-Download.jpg" className="d-block w-100" style={{filter : "brightness(30%)", height:"500px"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://wallpapercave.com/wp/wp3376127.jpg" className="d-block w-100" style={{filter : "brightness(30%)", height:"500px"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
