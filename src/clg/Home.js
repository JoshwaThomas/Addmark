import React, { useState } from 'react';
import nlogo from './asset/jmc_logo.png';

const ScholarshipForm = () => {
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    registerNo: '',
    ugOrPg: '',
    gender: '',
    address: '',
    permanentAddress: '',
    specialCategory: '',
    hostel: '',
    fatherName: '',
    fatherOccupation: '',
    annualIncome: ''
  });

  const [educationDetails, setEducationDetails] = useState({
    lastSchoolName: '',
    yearOfPassing: '',
    maximumMark: '',
    marksSecured: '',
    percentageOfMark: '',
    year: '',
    semester: '',
    majorAlliedMark: '',
    classAttendance: '',
    deeniyathEducationDays: '',
    totalFamilyMembers: {
      brothers: '',
      sisters: ''
    }
  });

  const [isPermanentAddressSame, setIsPermanentAddressSame] = useState(false);

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value
    });
  };

  const handleChangeEducation = (e) => {
    const { name, value } = e.target;
    setEducationDetails({
      ...educationDetails,
      [name]: value
    });
  };

  const handleAddressChange = (e) => {
    const { value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      address: value,
      permanentAddress: isPermanentAddressSame ? value : personalDetails.permanentAddress
    });
  };

  const togglePermanentAddress = () => {
    setIsPermanentAddressSame(!isPermanentAddressSame);
    if (!isPermanentAddressSame) {
      setPersonalDetails({
        ...personalDetails,
        permanentAddress: personalDetails.address
      });
    } else {
      setPersonalDetails({
        ...personalDetails,
        permanentAddress: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      ...personalDetails,
      ...educationDetails
    };
    console.log(formData);
    // Here you can send the formData to the server or perform other actions
  };


  return (

    <div className=' bg-gradient-to-tl from-cyan-700  to-fuchsia-400 min-h-screen'>
      <div className=' bg-slate-200 '>
        <img src={nlogo}  alt='LOGO' className=' w-full h-40' />
        <h1 className=' justify-center items-center font-extrabold text-center '>College Sponsored Scholarship Application Forms 2023-24</h1>
      </div>
      

    <div className="container mx-auto p-8">
   
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl mb-2 font-bold">Personal Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         
        <div>
            <label className="block mb-1">UG or PG:</label>
            <select
              name="ugOrPg"
              value={personalDetails.ugOrPg}
              onChange={handleChangePersonal}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select</option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Register No.:</label>
            <input
              type="text"
              name="registerNo"
              value={personalDetails.registerNo}
              onChange={handleChangePersonal}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={personalDetails.name}
              onChange={handleChangePersonal}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          
          <div>
            <label className="block mb-1">Gender:</label>
            <div className="space-x-4 inline-flex">
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  checked={personalDetails.gender === 'Male'}
                  onChange={handleChangePersonal}
                  required
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  checked={personalDetails.gender === 'Female'}
                  onChange={handleChangePersonal}
                  required
                />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="Other"
                  checked={personalDetails.gender === 'Other'}
                  onChange={handleChangePersonal}
                  required
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-1">Special Category:</label>
            <div className="space-x-4 inline-flex">
              <div>
                <input
                  type="radio"
                  id="muaddin"
                  name="specialCategory"
                  value="Mu-addin"
                  checked={personalDetails.specialCategory === 'Mu-addin'}
                  onChange={handleChangePersonal}
                  required
                />
                <label htmlFor="muaddin">Mu-addin</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="hazrath"
                  name="specialCategory"
                  value="Hazrath"
                  checked={personalDetails.specialCategory === 'Hazrath'}
                  onChange={handleChangePersonal}
                  required
                />
                <label htmlFor="hazrath">Hazrath</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="fatherMotherSeparated"
                  name="specialCategory"
                  value="Father&Mother Separated"
                  checked={personalDetails.specialCategory === 'Father&Mother Separated'}
                  onChange={handleChangePersonal}
                  required
                />
                <label htmlFor="fatherMotherSeparated">Father & Mother Separated</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="fatherExpired"
                  name="specialCategory"
                  value="Father Expired"
                  checked={personalDetails.specialCategory === 'Father Expired'}
                  onChange={handleChangePersonal}
                  required
                />
                <label htmlFor="fatherExpired">Father Expired</label>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-1">Hostel:</label>
            <div className="space-x-4 inline-flex">
              <div>
                <input
                  type="radio"
                  id="mainHostel"
                  name="hostel"
                  value="Main Hostel"
                  checked={personalDetails.hostel === 'Main Hostel'}
                  onChange={handleChangePersonal}
                  required
                />
                <label htmlFor="mainHostel">Main Hostel</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="mosqueHostel"
                  name="hostel"
                  value="Mosque Hostel"
                  checked={personalDetails.hostel === 'Mosque Hostel'}
                  onChange={handleChangePersonal}
                  required
                />
                <label htmlFor="mosqueHostel">Mosque Hostel</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="earnWhileLearn"
                  name="hostel"
                  value="Earn While Learn"
                  checked={personalDetails.hostel === 'Earn While Learn'}
                  onChange={handleChangePersonal}
                  required
                />
                <label htmlFor="earnWhileLearn">Earn While Learn</label>
              </div>
            </div>
          </div>
          <div>
          <div>
                    <label className="block mb-1">Father's Name:</label>
                    <input
                      type="text"
                      name="fatherName"
                      value={personalDetails.fatherName}
                      onChange={handleChangePersonal}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Father's Occupation:</label>
                    <input
                      type="text"
                      name="fatherOccupation"
                      value={personalDetails.fatherOccupation}
                      onChange={handleChangePersonal}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Annual Income:</label>
                    <input
                      type="text"
                      name="annualIncome"
                      value={personalDetails.annualIncome}
                      onChange={handleChangePersonal}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
               
          </div>
          <div className="col-span-2">
            <label className="block mb-1">Address:</label>
            <textarea
              name="address"
              value={personalDetails.address}
              onChange={handleAddressChange}
              className="w-full p-2 border rounded-md"
              required
            ></textarea>
          </div>
          <div className="col-span-2">
            <input
              type="checkbox"
              id="sameAddress"
              checked={isPermanentAddressSame}
              onChange={togglePermanentAddress}
              className="mr-2"
            />
            <label htmlFor="sameAddress">Same as Address</label>
          </div>
          <div className="col-span-2">
            <label className="block mb-1">Permanent Address:</label>
            <textarea
              name="permanentAddress"
              value={personalDetails.permanentAddress}
              onChange={handleChangePersonal}
              className="w-full p-2 border rounded-md"
              required
            ></textarea>
          </div>
        </div>

        <h3 className="text-xl mb-2 font-bold">Education Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Last School Name:</label>
            <input
              type="text"
              name="lastSchoolName"
              value={educationDetails.lastSchoolName}
              onChange={handleChangeEducation}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Year of Passing:</label>
            <input
              type="text"
              name="yearOfPassing"
              value={educationDetails.yearOfPassing}
              onChange={handleChangeEducation}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Maximum Mark:</label>
            <input
              type="text"
              name="maximumMark"
              value={educationDetails.maximumMark}
              onChange={handleChangeEducation}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Marks Secured:</label>
            <input
              type="text"
              name="marksSecured"
              value={educationDetails.marksSecured}
              onChange={handleChangeEducation}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Percentage of Mark:</label>
            <input
              type="text"
              name="percentageOfMark"
              value={educationDetails.percentageOfMark}
              onChange={handleChangeEducation}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <h3 className="text-xl mb-2 font-bold">Details of Marks and Attendance Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Year:</label>
            <select
              name="year"
              value={educationDetails.year}
              onChange={handleChangeEducation}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select</option>
              <option value="I Year">I Year</option>
              <option value="II Year">II Year</option>
              <option value="III Year">III Year</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Semester:</label>
            <select
              name="semester"
              value={educationDetails.semester}
              onChange={handleChangeEducation}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select</option>
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
              <option value="V">V</option>
              <option value="VI">VI</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Major & Allied (Part III) Mark:</label>
            <input
              type="text"
              name="majorAlliedMark"
              value={educationDetails.majorAlliedMark}
              onChange={handleChangeEducation}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Class Attendance No. of Days:</label>
            <input
              type="number"
              name="classAttendance"
              value={educationDetails.classAttendance}
              onChange={handleChangeEducation}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Deeniyath/Moral Education No. of Days Attended:</label>
            <input
              type="number"
              name="deeniyathEducationDays"
              value={educationDetails.deeniyathEducationDays}
              onChange={handleChangeEducation}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Total No. of Members in the Family:</label>
            <div className="flex space-x-4">
              <div>
                <label>Brother(s):</label>
                <input
                  type="text"
                  name="brothers"
                  value={educationDetails.totalFamilyMembers.brothers}
                  onChange={(e) => handleChangeEducation({ target: { name: 'brothers', value: e.target.value } })}
                  className="w-full p-2 border rounded-md"
                 
                />
              </div>
              <div>
                <label>Sister(s):</label>
                <input
                  type="text"
                  name="sisters"
                  value={educationDetails.totalFamilyMembers.sisters}
                  onChange={(e) => handleChangeEducation({ target: { name: 'sisters', value: e.target.value } })}
                  className="w-full p-2 border rounded-md"
           
                />
              </div>
            </div>
          </div>
        </div>

        <button type="submit"  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default ScholarshipForm;