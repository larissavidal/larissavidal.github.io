import linkedinImage from '../assets/linkedin.png'
import gmailImage from '../assets/gmail.png'
import githubImage from '../assets/github.png'

function Social(){

  return (<div className='social-list'>
              <div className='social' style={{width: "28px"}} title={"Linkedin"}>
                <a href='https://br.linkedin.com/in/vidallarissa' target='_blank' rel="noreferrer">
                  <img  src={linkedinImage} alt='Linkedin'/>
                </a>
              </div>

              <div className='social' title={"Gmail"}>
                <a href='mailto:larividal95@gmail.com'>
                  <img  src={gmailImage} alt='Gmail'/>
                </a>
              </div>

              <div className='social' style={{backgroundColor: "#fff", borderRadius: "100px", width: "30px"}} title={"Github"}>
                <a href='https://github.com/vidallarissa' target='_blank' rel="noreferrer">
                  <img  src={githubImage} alt='Github'/>
                </a>
              </div>
          </div>)
}

export default Social;