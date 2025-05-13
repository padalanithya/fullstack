import { useState } from "react";
import "./Registration.css";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function UserForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

   

    // Inside your component:
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = {
            firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            subjects,
             about,
        };
    
        try {
            const response = await axios.post("http://localhost:5000/user/createUser", formData);
            console.log("Form submitted successfully:", response.data);
            alert("Form submitted successfully!");
            handleReset(); // Reset form after successful submission
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit form. Please try again.");
        }
    };
    

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

    return (
        <div className="App">
   
            <h1>FORM</h1>
            <fieldset>
                <form onSubmit={handleSubmit}>
                   

                <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstname">First Name*</label>
              <input
                type="text"
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter First Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Last Name*</label>
              <input
                type="text"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter Last Name"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Enter Email*</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact*</label>
              <input
                type="tel"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter Mobile number"
                required
              />
            </div>
          </div>

                   

                   
                    
                    

                     <label>Gender*</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={gender === "other"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Other

                    <label>Your Best Subject</label>
                    <input
                        type="checkbox"
                        id="english"
                        checked={subjects.english}
                        onChange={() => handleSubjectChange("english")}
                    />
                    English
                    <input
                        type="checkbox"
                        id="maths"
                        checked={subjects.maths}
                        onChange={() => handleSubjectChange("maths")}
                    />
                    Maths
                    <input
                        type="checkbox"
                        id="physics"
                        checked={subjects.physics}
                        onChange={() => handleSubjectChange("physics")}
                    />
                    Physics

                    

                    <label htmlFor="select">Select your choice</label>
                    <select
                        id="select"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="" disabled>
                            Select your Ans
                        </option>
                        <optgroup label="Beginners">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advanced">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="7">MongoDB</option>
                        </optgroup>
                    </select>

                    <label htmlFor="about">About</label>
                    <textarea
                        id="about"
                        cols="30"
                        rows="10"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="About yourself"
                        required
                    ></textarea>

                    <button type="button" onClick={handleReset}>
                        Reset
                    </button>
                    <button type="submit">Submit</button>

                    < Link to="/user">
  
  <button style={{ backgroundColor: "blueviolet", color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px' }}>
  Getdata
</button>

</Link>
                </form>
            </fieldset>
        </div>
       

      
    );
}