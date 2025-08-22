import React from 'react'

const About = () => {
  return (
    <div id="about" className="container pt-36">
      <h1 className="lg:text-6xl text-5x1 mb-8 font-large text-gray text-lg">
        <b>ABOUT ME</b>
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Column 1 */}
        <div>
          <p className="text-gray-600 pt-3 text-2xl">
            I am a student at <b>GIAIC</b> in Artificial Intelligence, Web 3.0, & Metaverse Course.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <p className="text-gray-600 pt-3 text-2xl">
            I am also a student of <b>Karachi University</b>, Department of <b>Political Science</b>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;