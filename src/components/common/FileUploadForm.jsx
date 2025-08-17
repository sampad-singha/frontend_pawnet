import React, { useState } from 'react';
import FileUpload from './FileUpload';

const FileUploadForm = () => {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        filePath: '', // To store file path once uploaded
    });

    const [folderName, setFolderName] = useState(''); // Manage folderName state here

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const finalData = {
            userName: formData.userName,
            userEmail: formData.userEmail,
            filePath: folderName, // This line pulls the folderName from its separate state
        };
        console.log('Form Submitted:', finalData);

    };

    return (
        <div className="w-full max-w-lg mx-auto mt-10">
            <h2 className="text-3xl text-center mb-5">Upload Form</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* User Name Input */}
                <div className="flex flex-col">
                    <label htmlFor="userName" className="mb-2">Your Name:</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleInputChange}
                        className="p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* User Email Input */}
                <div className="flex flex-col">
                    <label htmlFor="userEmail" className="mb-2">Your Email:</label>
                    <input
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        value={formData.userEmail}
                        onChange={handleInputChange}
                        className="p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* File Upload Component */}
                <FileUpload setFolderName={setFolderName}/>

                {/* Submit Button */}
                <div className="flex justify-center mt-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FileUploadForm;