import './Footer.css'
import Col from './Col'

import retroImg from '../assets/images/image-retro-pcs.jpg'
import laptopImg from '../assets/images/image-top-laptops.jpg'
import gamingImg from '../assets/images/image-gaming-growth.jpg'

import React from 'react'

const Footer = () => {

  const footerContent = [
    {
      img: retroImg,
      id: "01",
      footerTitle: "Reviving Retro PCs",
      footerPar: "What happens when old PCs are given modern upgrades?"
    },
    {
      img: laptopImg,
      id: "02",
      footerTitle: "Top 10 Laptops of 2022",
      footerPar: "Our best picks for various needs and budgets."
    },
    {
      img: gamingImg,
      id: "03",
      footerTitle: "The Growth of Gaming",
      footerPar: "How the pandemic has sparked fresh opportunities."
    }
  ]

  return (
    <section className="footer">
      {footerContent.map((col) => (
        <Col 
          colImg={col.img}
          colId={col.id}
          colTitle={col.footerTitle}
          colParag={col.footerPar}
          key={col.id}
        />
      ))}
        
      </section>
  )
}

export default Footer
