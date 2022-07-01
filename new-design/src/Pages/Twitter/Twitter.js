import './Twitter.css';
import logo from './logo.png';
import logo2 from './logo2.png';

const Twitter=()=>{

    
    return(
        <>
            <div className='maindiv'>
                <div className='upperdiv'>
                    <div className='leftdiv'>
                        <img src={logo} alt='logo'/>
                    </div>
                    <div className='rightdiv'>
                        
                            <div className='rone'>
                                <img src={logo2} alt='logo'/>
                                <p>Happening now</p>
                            </div>
                            <div className='rtwo'>
                                
                                    <p className='joinText'>Join Twitter Today</p>
                                    <button>Sign Up With Google</button>
                                    <button>Sign Up With Google</button>
                                    <button className='emailbutton'>Sign Up With Phone or Email</button>
                                    <p className='agreeText'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                                
                            </div>
                            <div className='rthree'>
                                <p>Already have an account?</p>
                                <button>Sign In</button>
                            </div>
                        
                    </div>
                    
                </div>
                <div className='footerdiv'>
                    <ul>
                        <li>About</li>
                        <li>Help Center</li>
                        <li>Terms Service</li>
                        <li>Privacy Policy</li>
                        <li>Cokkie Policy</li>
                        <li>Accessibility</li>
                        <li>About</li>
                        <li>Help Center</li>
                        <li>Terms Service</li>
                        <li>Privacy Policy</li>
                        <li>Cokkie Policy</li>
                        <li>Accessibility</li>
                        <li>Accessibility</li>
                        <li>Accessibility</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Twitter;