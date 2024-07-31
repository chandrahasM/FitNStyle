import React,{useState} from 'react';

const UserProfile = () => {
    const [profileImage, setProfileImage] = useState(null);

  const handleProfileImageChange = (event) => {
    setProfileImage(event.target.files[0]);
  };

  const handleEditProfileImage = () => {
    // You can add additional logic here to handle the profile image upload
    console.log('Edit profile image clicked!');
  };
  return (
    <div>
      
      <form>
    <div class="grid gap-6 mb-6 md:grid-cols-1">
    <div class=" flex items-center justify-center">
        
            <label
              for="profileImage"
              class="cursor-pointer block mb-2 flex  w-24 h-24 rounded-full bg-red-400 hover:bg-red-800 text-white"
            >
              
            <p class="text-xs text-white flex items-center justify-center mb-2 w-24 h-24 px-4">profile picture</p>
            <i class="fas fa-pencil-alt ml-2"></i>
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                multiple={false}
                onChange={handleProfileImageChange}
                class="hidden"
              />
            </label>
          </div>
        
          <div>
            <label for="Full Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
            <input type="text" id="idName" class="bg-red-50 border border-red-400 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Sarah" required />
        </div>
        <div>
            <label for="Age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
            <input type="number" id="idAge" class="bg-red-50 border border-red-400 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="18" required />
        </div>  
       
        <div>
            <label for="Location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
            <select name="location" id="idLocation" class="bg-red-50 border-red-400 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
              <option value="">Please choose an option</option>
              <option value="Arizona">Arizona</option>
              <option value="California">California</option>
              <option value="New York">New York</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              
            </select>
        </div>
        
    </div>
    <button type="submit" class="text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


    </div>
  );
};

export default UserProfile;