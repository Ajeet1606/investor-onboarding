import { useContext } from "react";
import UserContext from "./UserContext";

const Dashboard = () => {

    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    // console.log(loggedInUser);
    return(
        <>
            <div className="bg-image1"></div>
            <div className="bg-image2" ></div>
           
            
            {/* header */}
            <div className="mt-2 mx-5 mb-10 flex justify-between">
                <div>
                    <img src={process.env.PUBLIC_URL + "main_logo.png"} alt="" />
                </div>
                <div className="flex items-center">
                    <img src={process.env.PUBLIC_URL + "Alarm.png"} alt="" />
                </div>
            </div>
            {/* body */}
            <div className="font-poppins">
                <hr className="border border-black" />
                <div className="flex">
                    <div className="w-[20%] py-5 pl-2 flex flex-col items-center">
                        <img className="w-[142px] h-[142px]" src={process.env.PUBLIC_URL + "Ellipse 1.png"} alt="" />
                        {
                            loggedInUser && loggedInUser._id ? (
                                <h3 className="my-2 ">{loggedInUser?.name}</h3>
                            ):
                            <h3 className="my-2 ">Snigdha Das</h3>
                        }

                        <button className="my-2 w-full  p-2 rounded bg-green-800 text-white">DashBoard</button>
                        <h3 className="my-2 ">Profile</h3>
                        <h3 className="my-2 ">Edit Profile</h3>
                        <h3 className="my-2 ">Network</h3>
                        <h3 className="my-2 ">Need Help?</h3>
                        <h3 className="my-2 ">Log Out</h3>
                    </div>
                    <div className="w-[1px] h-screen bg-black">
                    </div>
                    <div className="w-[80%]">
                        <button className="bg-green-800 w-[35%] shadow p-3 mr-1 text-white">Live Deals</button>
                        <button className="p-3 w-[35%] shadow">Most Funded</button>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Dashboard;