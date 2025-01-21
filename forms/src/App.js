import {useState} from "react";
function App() {  
  const [formData, setFormData] = useState({
    firstName:"", lastName:"",email:"", country:"India", streetAddress:"",city:"",state:"",postalCode:""
    ,comments:false,candidates:false, offers:false, pushNotification:false
  })
  function changeHandler(event){
    const {name,value,checked,type} = event.target;
    setFormData((prev) => ({
      ...prev, [name]: type === "checkbox" ? checked:value
    }));
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the data");
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center min-h-[100vh] bg-[url('./image.png')] bg-no-repeat bg-cover">
      <form onSubmit={submitHandler} className=" flex  flex-col w-[700px] bg-transparent border-solid border-[1px] backdrop-blur-md	border-purple-400 px-3 text-white my-[50px] rounded-[10px]">
        <h1 className="font-bold text-center text-[36px] mt-5">Form</h1>
        <label htmlFor="firstName" className="ml-4">First Name</label><br/>
        <input type="text" 
          name="firstName"
          id="firstName"
          placeholder="Vansh"
          value={formData.firstName}
          onChange={changeHandler}
          className="w-[100%] h-[50px] outline-none bg-transparent border-2 border-white rounded-[40px] px-5"
        />
        <br/>

        <label htmlFor="lastName" className="ml-4">Last Name</label><br/>
                <input type="text" 
                  name="lastName"
                  id="lastName"
                  placeholder="Tambi"
                  value={formData.lastName}
                  onChange={changeHandler}
                  className="w-[100%] h-[50px] outline-none bg-transparent border-2 border-white rounded-[40px] px-5"
                />

<br/>

        <label htmlFor="lastName" className="ml-4">Email</label><br/>
                <input type="text" 
                  name="email"
                  id="email"
                  placeholder="vanshtambi@gmail.com"
                  value={formData.email}
                  onChange={changeHandler}
                  className="w-[100%] h-[50px] outline-none bg-transparent border-2 border-white rounded-[40px] px-5"
                />
                <br/>

          <label htmlFor="country" className="mx-4">Country</label><br/>
          <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="w-[100%] h-[50px] outline-none bg-transparent border-2 border-white rounded-[40px] px-4 appearance-none"

          >
            <option className="text-black">India</option>
            <option className="text-black">United States</option>
            <option className="text-black">Mexico</option>
            <option className="text-black">Canada</option>

          </select>    

          <br/>

        <label htmlFor="streetAddress" className="ml-4">Street Address</label><br/>
                <input type="text" 
                  name="streetAddress"
                  id="streetAddress"
                  placeholder="12 Bt-25 C"
                  value={formData.streetAddress}
                  onChange={changeHandler}
                  className="w-[100%] h-[50px] outline-none bg-transparent border-2 border-white rounded-[40px] px-5"
                />
                <br/> 



        <label htmlFor="city" className="ml-4">City</label><br/>
                <input type="text" 
                  name="city"
                  id="city"
                  placeholder="Jaipur"
                  value={formData.city}
                  onChange={changeHandler}
                  className="w-[100%] h-[50px] outline-none bg-transparent border-2 border-white rounded-[40px] px-5"
                />
                <br/>    

        <label htmlFor="state" className="ml-4">State</label><br/>
                <input type="text" 
                  name="state"
                  id="state"
                  placeholder="Rajasthan"
                  value={formData.state}
                  onChange={changeHandler}
                  className="w-[100%] h-[50px] outline-none bg-transparent border-2 border-white rounded-[40px] px-5"
                />
                <br/>   

        <label htmlFor="postalCode" className="ml-4">Postal Code</label><br/>
                <input type="text" 
                  name="postalCode"
                  id="postalCode"
                  placeholder="303905"
                  value={formData.postalCode}
                  onChange={changeHandler}
                  className="w-[100%] h-[50px] outline-none bg-transparent border-2 border-white rounded-[40px] px-5"
                />
                <br/>
        <fieldset className="mt-4">
        <legend className="text-center">By Email</legend>

        <div className="ml-4">
        <input type="checkbox"
            id="comments"
            name="comments"
            checked={formData.comments}
            onChange={changeHandler}
            className=""
          />
      
            <label htmlFor="comments" className="px-2 ">Comments</label>
            <p className="font-thin text-[13px] ml-5">Get notified when someones post a comment on posting.</p>
       
     
          

          <input type="checkbox"
            id="candidates"
            name="candidates"
            checked={formData.candidates}
            onChange={changeHandler}
            className=""
          />
            
            <label htmlFor="candidates" className="px-2">Candidates</label>
            <p className="font-thin text-[13px] ml-5">Get notified when a candidate applies for a job.</p>
          

          <input type="checkbox"
            id="offers"
            name="offers"
            checked={formData.offers}
            onChange={changeHandler}
            className=""
          />
        
            <label htmlFor="offers" className="px-2">Offers</label>
            <p className="font-thin text-[13px] ml-5">Get notified when a candidate accepts or rejects an offer.</p>
        </div>
          
        </fieldset>         
        <br/>            

        <fieldset className="mt-4">
          <legend className="text-center">
            Push Notifications
          </legend>
          <div className="ml-4">
          <p>
            These are delivered via SMS to your mobile phone.
          </p>
          <input
            type="radio"
            id="pushEverything"
            name="pushNotification"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything" className="ml-4">Everything</label>
          <br/>

          <input
            type="radio"
            id="pushEmail"
            name="pushNotification"
            value="Same as email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail" className="ml-4">Same as email</label>
          <br/>

          <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="No Push Notifications"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing" className="ml-4">No push notifications</label>
          </div>
        </fieldset>
        <div className="flex flex-col items-center">
        <button
        className="bg-blue-500 text-white font-bold px-2 outline-none  border-violet-500 border-[1px] rounded-[40px] w-[200px] mb-6 mt-6 py-4 hover:bg-blue-800 transition-all duration-500"
        >Save</button>
        </div>
        
      </form>
    </div>
  );
}

export default App;
