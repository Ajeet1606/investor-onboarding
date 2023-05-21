import { useContext, useState } from "react";
import InputControl from "./InputControl";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import UserContext from "./UserContext";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    linkedIn: "",
    country: "",
    state: "",
    city: "",
    pin: "",
    agreement: false,
  });

  const {setLoggedInUser} = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClick = () => {
    const {name, email, phone, linkedIn, country, city, state, pin, agreement} = user;
    if(!name || !email || !phone || !linkedIn || !country || !city || !state || !pin || !agreement){
      alert("Fill every field");
      return;
    }

    // console.log(user);
    axios.post("http://localhost:9000/signup", user)
    .then((res) => {
      // console.log(res);
      if(res.data.user){
        setLoggedInUser(res.data.user);
        navigate("/dashboard");
      }else{
        alert(res.data.message);
      }
      
    }).catch((err) => {
      console.log(err);
    })
  };

  return (
    <div className="w-full min-h-screen relative">
      <div
        className="absolute h-96 w-96 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/left_vector.png)`,
        }}
      ></div>

      <div className="m-10">
        <h1 className="text-center text-3xl font-poppins font-semibold">
          Create{" "}
          <span className="text-[#005642]">
            Investor <span className="underline">Profile</span>
          </span>
        </h1>
      </div>

      {/* Right side */}
      <div className="flex justify-around relative">
        <div
          className="h-96 w-96 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/rafiki.png)`,
          }}
        ></div>

        <div className="w-1/2 relative flex flex-col items-center  p-5 m-5">
          {/* NAME */}
          <div className=" my-2 flex items-center bg-[#EBFFF7] font-poppins">
            <img
              className="w-8 h-9 mx-5"
              src={process.env.PUBLIC_URL + "/name_svg.svg"}
              alt=""
            />
            <InputControl
              label="Name"
              placeholder="Ajeet Patel"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>

          <div className=" my-2 flex items-center bg-[#EBFFF7] font-poppins">
            <img
              className="w-8 h-9 mx-5"
              src={process.env.PUBLIC_URL + "/email_svg.svg"}
              alt=""
            />
            <InputControl
              label="Email"
              placeholder="ajeetpatel1606@gmail.com"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className=" my-2 flex items-center bg-[#EBFFF7] font-poppins">
            <img
              className="w-8 h-9 mx-5"
              src={process.env.PUBLIC_URL + "/phone_svg.svg"}
              alt=""
            />
            <InputControl
              placeholder="Phone no."
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </div>

          <div className=" my-2 flex items-center bg-[#EBFFF7] font-poppins">
            <img
              className="w-8 h-9 mx-5"
              src={process.env.PUBLIC_URL + "/linkedin_svg.svg"}
              alt=""
            />
            <InputControl
              placeholder="LinkedIn Link"
              name="linkedIn"
              value={user.linkedIn}
              onChange={handleChange}
            />
          </div>

          <div className="my-2 flex items-center bg-[#EBFFF7] font-poppins">
            <img
              className="w-8 h-9 mx-5"
              src={process.env.PUBLIC_URL + "/country_svg.svg"}
              alt=""
            />
            <InputControl
              placeholder="Country"
              name="country"
              value={user.country}
              onChange={handleChange}
            />
          </div>

          <div className="my-2 flex items-center bg-[#EBFFF7] font-poppins">
            <img
              className="w-8 h-9 mx-5"
              src={process.env.PUBLIC_URL + "/state_svg.svg"}
              alt=""
            />
            <InputControl
              placeholder="State"
              name="state"
              value={user.state}
              onChange={handleChange}
            />
          </div>

          <div className="my-2 flex items-center bg-[#EBFFF7]  font-poppins">
            <img
              className="w-8 h-9 mx-5"
              src={process.env.PUBLIC_URL + "/city_svg.svg"}
              alt=""
            />
            <InputControl
              placeholder="City"
              name="city"
              value={user.city}
              onChange={handleChange}
            />
          </div>

          <div className="my-2 flex items-center bg-[#EBFFF7] font-poppins">
            <img
              className="w-8 h-9 mx-5"
              src={process.env.PUBLIC_URL + "/pin_svg.svg"}
              alt=""
            />
            <InputControl
              placeholder="Pin Code"
              name="pin"
              value={user.pin}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center w-80 bg-[#EBFFF7] font-poppins">
            <input
              className="w-[7%] h-9"
              type="checkbox"
              name="agreement"
              value={user.agreement}
              onChange={(e) => setUser((prev) => ({
                ...prev,
                agreement: e.target.checked,
              }))}
            />
            <p className="w-[90%] mx-2 text-sm">
              I hereby by agree to terms and conditions and whatever information
              is asked for i have provided the right information
            </p>
          </div>

          <div className="w-80 flex justify-end font-poppins">
            <button
              className="m-2 bg-[#005642] text-xl w-36 h-12 text-white border rounded"
              onClick={handleClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
