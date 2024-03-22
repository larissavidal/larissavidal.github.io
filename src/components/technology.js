import NodeImage from '../assets/node.png'
import TSImage from '../assets/typescript.png'
import ReactImage from '../assets/react.png'
import JavaImage from '../assets/java.png'


function Technology(){

  return (<div className='technology-list'>
              <div className='technology' style={{width: "64px"}} title={"Node"}>
                <img  src={NodeImage} alt='Node'/>
                <div className='light-ball'></div>
              </div>

              <div className='technology' title={"Typescript"}>
                <img  src={TSImage} alt='Typescript'/>
                <div className='light-ball'></div>
              </div>

              <div className='technology' style={{}} title={"React"}>
                <img  src={ReactImage} alt='React'/>
                <div className='light-ball'></div>
              </div>

              <div className='technology' style={{}} title={"Java"}>
                <img  src={JavaImage} alt='Java'/>
                <div className='light-ball'></div>
              </div>
          </div>)
}

export default Technology;