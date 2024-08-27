import {Component} from "react";

import { BiLogoGmail } from "react-icons/bi";

import { CiHome, CiMail} from "react-icons/ci";
import { RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { FaTableList } from "react-icons/fa6";
import { FaInbox } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";

import "./index.css";

class Home extends Component {

    state={mode:false,mails:[]}

    componentDidMount(){
        this.getAllMails()
    }

    getAllMails=async()=>{
        const url="https://hiring.reachinbox.xyz/api/v1/onebox/list";
        const options={
            method:"GET"
        }
        const response=await fetch(url,options);
        const data=await response.json();
        console.log(data);
        if(response.ok){
            this.setState(data)
  
        }
        else{
            console.log("Error fetching data")
        }
      
    }


    changeMode=()=>{
        this.setState({mode:!this.state.mode})
    }
    render() {
        const {mode}=this.state
        return (
            <div className={mode===false?"dark-mode":"light-mode"}>
              <div className="navbar">
                <p>Onebox</p>
                <div>
                    {
                        mode===false?
                    
                    <div>
                        <button className="dark-mode-button" onClick={this.changeMode} type="button"><img className="dark-mode-image" src="https://i.ibb.co/gSySXyp/Frame-2087327017.png" alt="not-found"/></button>
                    
                    </div>
                    :
                    <div>
                        <button className="light-mode-button" onClick={this.changeMode} type="button"><img className="light-mode-image" src="https://i.ibb.co/pKH6y7y/Frame-2087327017-1.png" alt="not-found"/></button>
                    </div>
                     }
                </div>
              </div>




            <div className="home-container">
              <div className="left-side">
                <div>
                <BiLogoGmail />
                </div>
                <div>
                <CiHome />
                </div>
                <div>
                <RiUserSearchLine />
                </div>
                <div>
                <CiMail />
                </div>
                <div>
                <IoIosSend />
                </div>
                <div>
                <FaTableList />
                </div>
                <div>
                <FaInbox />
                </div>
                <div>
                <BsBarChartFill />
                </div>


              </div>

              <div className="right-side">
                <div>
                <img className="image-empty-emails" src="https://img.freepik.com/free-vector/transfer-files-concept-landing-page_23-2148303068.jpg?t=st=1724654826~exp=1724658426~hmac=866612207a715477e153d4fe5cb6eee7a70dd7b912d75567440ff2db95387b13&w=740" alt="not-found" />
                </div>
                <p>It’s the beginning of a legendary sales pipeline When you have inbound E-mails you’ll see them here</p>
                
              </div>
           
           
           
           </div>
            </div>
        );
    }
}

export default Home;