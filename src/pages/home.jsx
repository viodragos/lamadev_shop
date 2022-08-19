import React from 'react'
import Announcement from '../components/announcement'
import Categories from '../components/categories'
import Navbar from '../components/navbar'
import Slider from '../components/slider'
import Products from '../components/products'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
        <Announcement></Announcement>
        <Navbar></Navbar>
        <Slider></Slider>
        <Categories></Categories>
        <Products></Products>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </div>
  )
}

export default Home