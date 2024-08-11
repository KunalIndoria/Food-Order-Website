import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'

export default function Home() {
    const [search, setSearch] = useState("");
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            }
        });
        response = await response.json();
        setFoodItem(response[0]);
        setFoodCat(response[1]);

    }

    useEffect(() => {
        loadData()
    }, [])





    return (
        <div>
            <div><Navbar /></div>
            <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain" }}>
                <div className='carousel-caption' style={{ zIndex: "10" }}>


                    <div className="d-flex justify-content-center">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                        {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                    </div>


                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images8.alphacoders.com/103/1032061.jpg" className="d-block w-100" style={{ filter: "brightness(30%)", height: "500px" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Wallpapers-Free-Download.jpg" className="d-block w-100" style={{ filter: "brightness(30%)", height: "500px" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://wallpapercave.com/wp/wp3376127.jpg" className="d-block w-100" style={{ filter: "brightness(30%)", height: "500px" }} alt="..." />
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
            </div></div>
            <div className='container'>
                {
                    Array.isArray(foodCat) && foodCat.length > 0 ? (
                        foodCat.map((data, index) => {
                            return (
                                <div className='row mb-3' key={index}>
                                    <div className='fs-3 m-3'>{data.CategoryName}</div>
                                    <hr />
                                    {Array.isArray(foodItem) && foodItem.length > 0 ? (
                                        foodItem
                                            .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                                            .map((filterItems) => {
                                                return (
                                                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                        <Card foodItem={filterItems} options={filterItems.options[0]} />
                                                    </div>
                                                )
                                            })
                                    ) : (
                                        <div>No such Data Found</div>
                                    )}
                                </div>

                            );
                        })
                    ) : (
                        <div>"""""""""""</div>
                    )
                }


            </div>
            <div><Footer /></div>
        </div>

    )
}
