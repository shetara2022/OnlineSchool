import React from 'react'
import Title from '../title/Title'

const AboutCard = () => {
  return (
      <div>
          <section className="aboutHome">
              <div className="container flexSB">
                  <div className="left-row">
                      <img src='./images/student.png' alt='Student'></img>
                  </div>
                  <div className="right row">
                      <Title subtitile='Learn Comfortably' title='Benefits of Online Learning' />
                      
                  </div>
              </div>
          </section>
    </div>
  )
}


export default AboutCard