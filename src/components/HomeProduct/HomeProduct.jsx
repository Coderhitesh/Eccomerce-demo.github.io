import React, { useState } from 'react'
import './homeProduct.css'
import { Link } from 'react-router-dom'
import MenProduct from './MenProduct'
import WomenProduct from './WomenProduct'
import KidsProduct from './KidsProduct'

const HomeProduct = () => {
    const [men , setMen] = useState(true)
    const [women , setWomen] = useState(false)
    const [kid , setKid] = useState(false)

    const handleMenActivebtn = ()=>{
        setMen(true);
        setWomen(false);
        setKid(false);
    }

    const handleWomenActivebtn = ()=>{
        setMen(false);
        setWomen(true);
        setKid(false);
    }

    const handleKidActivebtn = ()=>{
        setMen(false);
        setWomen(false);
        setKid(true);
    }

    const mendata = [
        {
            sno: 1,
            category: 'Men',
            name: 'MPOL001',
            dec: 'Our Golf Polos are specifically designed for those twists & turns.',
            size: ' XS to 3XL',
            img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
            tag: 'Sale!',
            discountprice: 'Rs.2000',
            price:'Rs.499'
        },
        {
            sno: 2,
            category: 'Men',
            name: 'MPOL006',
            dec: 'Polos with 100% polyester , quick dry and soft on skin. ',
            size : ' XS to 3XL',
            img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
            tag: 'Sale!',
            discountprice: 'Rs.2000',
            price:'Rs.499'
        },
        {
            sno: 3,
            category: 'Men',
            name: 'MPOL008',
            dec: ' The Mars Polo with FABTECH(R) technology is designed for all day ultra cool comfort.',
            size: ' XS to 3XL',
            img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
            tag: 'Sale!',
            discountprice: 'Rs.2000',
            price:'Rs.499'
        },
        {
            sno: 4,
            category: 'Men',
            name: '1986BK',
            dec: 'Our printed tees will not only make you feel good but they are truly comfortable.',
            size: ' XS to 3XL',
            img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
            tag: 'Sale!',
            discountprice: 'Rs.2000',
            price:'Rs.499'
        }
    ]

    const womendata = [
        {
            sno: 1,
            category:'Women',
            name: 'MPOL001',
            dec: 'Our Golf Polos are specifically designed for those twists & turns.',
            size: ' XS to 3XL',
            img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
            tag: 'Sale!',
            discountprice: 'Rs.2000',
            price:'Rs.499'
        },
        {
            sno: 2,
            category:'Women',
            name: 'MPOL006',
            dec: 'Polos with 100% polyester , quick dry and soft on skin. ',
            size : ' XS to 3XL',
            img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
            tag: 'Sale!',
            discountprice: 'Rs.2000',
            price:'Rs.499'
        },
        {
            sno: 3,
            category:'Women',
            name: 'MPOL008',
            dec: ' The Mars Polo with FABTECH(R) technology is designed for all day ultra cool comfort.',
            size: ' XS to 3XL',
            img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
            tag: 'Sale!',
            discountprice: 'Rs.2000',
            price:'Rs.499'
        },
        {
            sno: 4,
            category:'Women',
            name: '1986BK',
            dec: 'Our printed tees will not only make you feel good but they are truly comfortable.',
            size: ' XS to 3XL',
            img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
            tag: 'Sale!',
            discountprice: 'Rs.2000',
            price:'Rs.499'
        }
    ]

    const kiddata = [
        {
            sno: 1,
            category:'Kids',
            name: 'MPOL001',
            dec: 'Our Golf Polos are specifically designed for those twists & turns.',
            size: ' XS to 3XL',
            img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
            tag: 'Sale!',
            discountprice: 'Rs.2000',
            price:'Rs.499'
        },
        {
            sno: 2,
            category:'Kids',
            name: 'MPOL006',
            dec: 'Polos with 100% polyester , quick dry and soft on skin. ',
            size : ' XS to 3XL',
            img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
            tag: 'Sale!',
            discountprice: 'Rs.2000',
            price:'Rs.499'
        },
        {
            sno: 3,
            category:'Kids',
            name: 'MPOL008',
            dec: ' The Mars Polo with FABTECH(R) technology is designed for all day ultra cool comfort.',
            size: ' XS to 3XL',
            img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
            tag: 'Sale!',
            discountprice: 'Rs.2000',
            price:'Rs.499'
        },
        {
            sno: 4,
            category:'Kids',
            name: '1986BK',
            dec: 'Our printed tees will not only make you feel good but they are truly comfortable.',
            size: ' XS to 3XL',
            img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
            tag: 'Sale!',
            discountprice: 'Rs.2000',
            price:'Rs.499'
        },
        {
            sno: 4,
            category:'Kids',
            name: '1986BK',
            dec: 'Our printed tees will not only make you feel good but they are truly comfortable.',
            size: ' XS to 3XL',
            img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
            tag: 'Sale!',
            discountprice: 'Rs.2000',
            price:'Rs.499'
        },
        {
            sno: 4,
            category:'Kids',
            name: '1986BK',
            dec: 'Our printed tees will not only make you feel good but they are truly comfortable.',
            size: ' XS to 3XL',
            img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
            tag: 'Sale!',
            discountprice: 'Rs.2000',
            price:'Rs.499'
        }
    ]





    return (
        <>
            <div className="homeproduct">
                <div className="container">
                    <div className='heading'>
                        <span>FEATURED PRODUCTS</span>
                    </div>

                    <div className="active-link">
                        <Link className='button-67' onClick={handleMenActivebtn} to='' >Mens</Link>
                        <Link className='button-67' onClick={handleWomenActivebtn} to='' >Womens</Link>
                        <Link className='button-67' onClick={handleKidActivebtn} to='' >Kids</Link>
                    </div>

                    {
                        men ? (
                            <MenProduct mendata={mendata}/>
                        ) : women ? (
                            <WomenProduct womendata={womendata}/>
                        ):(
                            <KidsProduct kiddata={kiddata}/>
                        )
                    }                                        

                </div>
            </div>
        </>
    )
}

export default HomeProduct
