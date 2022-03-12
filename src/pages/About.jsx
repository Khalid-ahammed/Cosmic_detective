import React from 'react'
import SubPageBanner from '../components/SubPageBanner'
import '../css/about.css'

const About = () => {
  return (
    <div className='about' id='about'>
      <SubPageBanner title={'about'} />
      <section className='about-body'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          excepturi blanditiis aut vitae corrupti aliquam quia, doloribus iure
          ducimus nam animi assumenda dolorum at tempora neque autem officiis
          officia natus numquam qui id ipsam delectus! Fugiat nesciunt molestiae
          quae repellendus! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Inventore, itaque. Ad repudiandae laudantium aliquid excepturi
          veritatis iste non molestiae nulla, quas omnis quis. Consequuntur quod
          ullam molestiae nisi, dolor tempora a soluta earum suscipit debitis
          voluptas optio ipsa nam eos libero ipsam hic enim corrupti. Culpa
          fugiat possimus inventore voluptatem!
        </p>
      </section>
    </div>
  )
}

export default About
