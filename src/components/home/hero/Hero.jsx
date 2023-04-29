import './hero.css'
import Title from '../../title/Title'

const Hero = () => {
  return (
      <>
          <section className='hero'>
              <div className="container">
                  <div className="row">
                     <Title subtitle="WELCOME TO SCHOOL" title='Best Virtual School'/>
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sed, enim ducimus aspernatur accusamus optio doloremque nostrum veniam deserunt laudantium hic ipsa dolores aliquid temporibus tempora deleniti. Omnis, eveniet officiis?</p>
                      <div className="button">
                          <button className="primary-btn">
                             GET STARTED 
                          </button>
                      </div>
                  </div>
              </div>
          </section>
          <div className="margin"></div>
          
        </>
  )
}

export default Hero