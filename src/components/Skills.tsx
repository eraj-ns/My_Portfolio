import React from "react";


const Skills = () => {
  return (
    <div id="skills" className="container pt-36">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl text-left justify-left pb-4">My Skills</h2>
          <p className="pt-3 pb-4 text-left justify-left">
            I have a strong foundation in <b>Python programming</b> and specialize in
            building intelligent applications with <b>Agentic AI</b>.  
            My expertise includes working with Open AI Agent SDK frameworks, automation tools,
            and integrating APIs to create advanced, real-world solutions.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 text-3xl sm:text-4xl pt-3 pb-4">
            <div className="space-y-2">
              <a className="space-y-5 flex gap-2 text-yellow-600">
                <b className="text-black">Python</b>
              </a>
              
            </div>
            <div className="space-y-2">
              <a className="space-y-5 flex gap-2 text-blue-600">
                <b className="text-black">Agentic AI</b>
              </a>
              <a className="space-y-5 flex gap-2 text-indigo-600">
                <b className="text-black">OpenAI SDK</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;