import './App.css';
import react, {useState} from 'react';
function App() {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: ""

  })

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData((prev) => ({...prev, [name]:type === "checkbox" ? checked : value }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally prinitng the form data ");
    console.log(formData);
  }
  return (
      <div className='App'>
      <div className='flex flex-col items-center mt-2'>
        <form onSubmit = {submitHandler}>
          <label htmlFor="firstName">First name</label>
          <br/>
          <input
           type="text"
           name="firstName"
           placeholder='first name'
           value = {formData.firstName}
           onChange = {changeHandler}
           className='outline'

          />
<br/>

<label htmlFor="lastName">Lastname</label>
          <br/>
          <input
           type="text"
           name="lastName"
           placeholder='last name'
           value = {formData.lastName}
           onChange = {changeHandler}
           className='outline'

          /> 
<br/>

<label htmlFor="email">Email Address</label>
          <br/>
          <input
           type="email"
           name="email"
           placeholder='garazewala@gmail.com'
           value = {formData.email}
           onChange = {changeHandler}
           className='outline'

          /> 
         

          {/* label is used to specify a label for <input> </input> element */}
          {/* Now we have to create a dropdown and select country feature */}
          <br/>
          <label>Country</label>
          <br/>
          <select
          id="country"
          name="country"
          value={formData.country}
          className='outline'

          >
            <option>India</option>
            <option>Dubai</option>
            <option>USA</option>
            <option>UK</option>
            <option>Amsterdam</option>
          </select>

          <br/>

<label htmlFor="streetAddress">Street Address</label>
          <br/>
          <input
           type="text"
           name="streetAddress"
           id="streetAddress"
           placeholder='B-44'
           value = {formData.streetAddress}
           onChange = {changeHandler}
           className='outline'

          /> 
<br/>

<label htmlFor="city">city</label>
          <br/>
          <input
           type="text"
           name="city"
           id="city"
           placeholder='patna'
           value = {formData.city}
           onChange = {changeHandler}
           className='outline'

          /> 
<br/>

<label htmlFor="state">state</label>
          <br/>
          <input
           type="text"
           name="state"
           id="state"
           placeholder='Bihar'
           value = {formData.state}
           onChange = {changeHandler}
           className='outline'

          /> 
<br/>

<label htmlFor="postalCode">postal Code</label>
          <br/>
          <input
           type="text"
           name="postalCode"
           id="postalCode"
           placeholder='800001'
           value = {formData.postalCode}
           onChange = {changeHandler}
           className='outline'

          /> 
<br/>

<fieldset>

  <legend>By Email</legend>
  <div className='flex'>
  <input
  id = "candidates"
  name = "candidates"
  type = "checkbox"
  checked = {formData.candidates}
  onChange = {changeHandler}
  ></input>
  <div>
    <label htmlFor = "candidates">candidates</label>
    <p>Get notified when someone apllies for a job</p>
    </div>
    </div>

    <div className='flex'>
  <input
  id = "offers"
  name = "offers"
  type = "checkbox"
  checked = {formData.offers}
  onChange = {changeHandler}
  ></input>
  <div>
    <label htmlFor = "offers">offers</label>
    <p>Get notified when someone clicks</p>
    </div>
    </div>

    <div className='flex'>
  <input
  id = "comments"
  name = "comments"
  type = "checkbox"
  checked = {formData.comments}
  onChange = {changeHandler}
  ></input>
  <div>
    <label htmlFor = "comments">Comments</label>
    <p>Get notified when someone clicks</p>
    </div>
    </div>
</fieldset>

<fieldset>
  <legend>
    Push Notifications
  </legend>
  <p>These are delivered via SMS to your mobile phone</p>

  <input
  type = "radio"
  id = "pushEverything"
  name = "pushNotifications"
  value = "Everything"
  onChange={changeHandler}
  />

<label htmlFor="pushEverything">Everything</label>


<input
  type = "radio"
  id = "pushEmail"
  name = "pushNotifications"
  value = "same as email"
  onChange={changeHandler}
  />

<label htmlFor="pushEverything">same as email</label>


<input
  type = "radio"
  id = "pushNothing"
  name = "pushNotifications"
  value = "No push notification"
  onChange={changeHandler}
  />

<label htmlFor="pushNothing">No push Notifications</label>

</fieldset>

<button className='bg-blue-500 text-white font-bold rounded py-2'>Save</button>
        </form>
      </div>
    </div>
  );
}

export default App;
