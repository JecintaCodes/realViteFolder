import { useState } from "react"
import img from "../../assets/373.jpg"
import {AiFillCamera} from "react-icons/ai"
const Register = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [image, setImage] = useState<any>("")
    const [imageUrl, setImageUrl] = useState<string>("")

    const handleImage = (e: any)=>{
        const file = e.target.files[0];
        const readFile = URL.createObjectURL(file)
        setImageUrl(file);
        setImage(readFile);

    };

    let getData = [];
    let arrData = [
        {
            statck: "project Manager",
            description:"Asa project manager i..."
        },
        {
            statck: "FrontEnd",
            description:"Asa FrontEnd i..."
        },
        {
            statck: "Backend",
            description:"Asa Backend i..."
        },
    ]
  return (
    <div className="w-[100%] h-[100vh] flex justify-center">
        <div className="w-[90%] flex justify-center items-center ">
            <form  className="w-[500px] h-[400px] border p-2 mt-[20px] ">
                {/* profile */}
               <div className="w-[100px] h-[100px] rounded-[50%] flex justify-center relative">
                <img className="w-[100px] h-[100px] rounded-[50%] object-cover"
                 src={imageUrl === "" ? img : image} alt={img} 
                
                 />
                 <input  className="hidden"
                 type="file"
                 id="image"
                 onChange={handleImage}
                 />
                 <label
                  htmlFor="image"
                  className=" text-yellow-400 p-2 text-[20px] font-semibold absolute right-0 top-[50px] bg-[whitesmoke] rounded-[50%]"
                  >
                    <AiFillCamera/>
                  </label>
                </div> 
                {/*end profile */}
                {/* input */}
                <div className="mt-5">
                    {/* name */}
                    <div className="w-[100%] h-[50px] border flex items-center mt-[10px] ">
                        <input className=" text-[13px] text-[silver]  w-[100%] h-[100%] font-medium outline-none p-2  "
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e:any)=>{
                            setName(e.target.value)
                        }}
                        type="text" />
                    </div>
                    {/* password */}
                    <div className="w-[100%] h-[50px] border flex items-center mt-[10px] ">
                        <input className=" text-[13px] text-[silver]  w-[100%] h-[100%] font-medium outline-none p-2  "
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e:any)=>{
                            setPassword(e.target.value)
                        }}
                        type="text" />
                    </div>
                    {/* password */}
                    {/* email */}
                    <div className="w-[100%] h-[50px] border flex items-center mt-[10px] ">
                        <input className=" text-[13px] text-[silver]  w-[100%] h-[100%] font-medium outline-none p-2  "
                        placeholder="Input your email"
                        value={email}
                        onChange={(e:any)=>{
                            setEmail(e.target.value)
                        }}
                        type="text" />
                    </div>
                    {/* phonenumber and location */}
                    <div className="flex gap-[10px]">
                    <div className="w-[50%] h-[50px] border flex items-center mt-[10px] ">
                        <input className=" text-[13px] text-[silver]  w-[100%] h-[100%] font-medium outline-none p-2  "
                        placeholder="Enter your PhoneNumber"
                        type="text"
                        value={phoneNumber}
                        onChange={(e:any)=>{
                            setPhoneNumber(e.target.value)
                        }}
                         />
                    </div>
                      <div className="w-[50%] h-[50px] border flex items-center mt-[10px] ">
                        <input className=" text-[13px] text-[silver] w-[100%] h-[100%] font-medium outline-none p-2  "
                        placeholder="input your Location"
                        value={location}
                        onChange={(e:any)=>{
                            setLocation(e.target.value)
                        }}
                        type="text" />
                    </div>
                    </div>
                </div>
                {/* input */}
                    {/* button */}
                    <div className="w-[100%] h-[50px] bg-yellow-500 rounded flex justify-center items-center mt-7 ">
                        <button className="text-[15px] text-[white] font-bold  "
                        onClick={()=>{
                            console.log(name, email, password, location, image);

                            const data = {
                                name, email, password, location,image
                            };

                            let choice = arrData[(Math.random() * arrData.length)]
                            const time = new Date().getTime()

                            const datas = {
                                name,
                                 email,
                                  location, 
                                  phoneNumber,
                                   image, time, 
                                   like:0,
                            }
                                const getData = JSON.parse(localStorage.getItem("invited")!)

                                getData.push(data)
                            localStorage.setItem("invited", JSON.stringify([]!))
                        }}

                         type="submit">Register</button>
                    </div>
                    {/*end button */}
            </form>
        </div>
    </div>
  )
}

export default Register