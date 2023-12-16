import { MdOutlineEmail } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useRef, useState } from "react";
import { MdLockOpen } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineUpload } from "react-icons/ai";
import ProfileImage from "../assets/download.png";
// import { FaRegTrashCan } from "react-icons/fa6";
function SignupControlls() {
  const [showpass, setShowpass] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile,setProfile]=useState()
  const emailErrRef=useRef()
  const usernameRef=useRef()
  const passwordRef=useRef()
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailAddress = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleImage=(e)=>{
    setProfile(e.target.files[0])
  }
  const signupValidation=()=>{
    let validation=true
    if(!username){
      usernameRef.current.classList.remove('hidden')
      setTimeout(()=>{
        usernameRef.current.classList.add('hidden')
      },3000)
      validation=false
    }
    if(!email){
      emailErrRef.current.classList.remove('hidden')
      setTimeout(()=>{
        emailErrRef.current.classList.add('hidden')
      },3000)
      validation=false
    }
    if(!password){
      passwordRef.current.classList.remove('hidden')
      setTimeout(()=>{
        passwordRef.current.classList.add('hidden')
      },3000)
      validation=false
    }
    return validation
  }
  const handleFormSubmition=()=>{
    if(signupValidation()){
      alert('all is correct')
    }
  }
  return (
    <>
      <div className="flex justify-center">
        <input type="file" style={{ display: "none" }} id="img" onChange={handleImage} />
        <label
          className="p-4 border border-dashed cursor-pointer border-grey-500"
          htmlFor="img"
        >
          <div className="flex items-center justify-center overflow-hidden rounded-lg bg-slate-600 h-28 w-28">
            <img src={!profile?ProfileImage:URL.createObjectURL(profile)} alt="" style={{objectFit:"cover",width:"100%",height:"100%"}}  />
          </div>
          <div className="flex justify-between mt-1 text-2xl cursor-pointer">
          <div className="text-[20px] z-10 ">
          {/* <FaRegTrashCan  /> */}
          </div>
            <AiOutlineUpload />
          </div>
        </label>
      </div>
      <div className="px-5">
        <div className="flex flex-col">
          <span className="text-sm">Username</span>
          <div className="flex items-center p-1 border">
            <div className="text-[18px] z-10 ">
              <FaRegCircleUser />
            </div>
            <input
              type="email"
              name=""
              id=""
              className="w-full p-1 text-sm border-none outline-none"
              placeholder="username"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <span className="text-[13px] text-red-500 hidden" ref={usernameRef}>
            Enter username
          </span>
        </div>
      </div>
      <div className="px-5 mt-2">
        <div className="flex flex-col">
          <span className="text-sm">Email address</span>
          <div className="flex items-center p-1 border">
            <div className="text-[18px]">
              <MdOutlineEmail />
            </div>
            <input
              type="email"
              name=""
              id=""
              onChange={handleEmailAddress}
              value={email}
              className="w-full p-1 text-sm border-none outline-none"
              placeholder="Email Address"
            />
          </div>
          <span className="text-[13px] text-red-500 hidden" ref={emailErrRef}>
            Enter email address
          </span>
        </div>
      </div>
      <div className="px-5 mt-2">
        <div className="flex flex-col">
          <span className="text-sm">Password</span>
          <div className="flex items-center p-1 border">
            <div className="text-[18px]">
              {showpass ? <MdLockOpen /> : <MdLockOutline />}
            </div>
            <input
              type={showpass ? "text" : "password"}
              name=""
              id=""
              value={password}
              onChange={handlePassword}
              className="w-full p-1 text-sm border-none outline-none"
              placeholder="password"
            />
            <div
              className="text-[18px] pr-2"
              onClick={() => setShowpass(!showpass)}
            >
              {showpass ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          <span className="text-[13px] text-red-500 hidden" ref={passwordRef}>
            Enter password
          </span>
        </div>
      </div>
      <div className="px-5 mt-2">
        <div className="flex flex-col">
          <button
            className="p-1 rounded-sm"
            style={{
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
              transition: " all 0.3s cubic-bezier(.25,.8,.25,1)",
            }}
            onClick={handleFormSubmition}
          >
            submit
          </button>
          <div className="flex justify-end p-1">
            <Link className="underline cursor-pointer" to={"/login"}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignupControlls;
