import React, { useState } from 'react';
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
);

const FileUpload = ({ setFolderName }) => {
    const [files, setFiles] = useState([]);

    const server = {
        url: `http://localhost:8000/api/chunk-upload`,
        process: {
            url: "/",
            method: "POST",
            onload: (response) => {
                try {
                    const responseData = JSON.parse(response);
                    if (responseData.folderPath) {
                        setFolderName(responseData.folderPath); // Correctly set the folderPath
                        console.log("Uploaded file path:", responseData.folderPath);
                    }
                    return response; // IMPORTANT: Return the response so FilePond knows it's complete
                } catch (error) {
                    console.error("Error parsing response:", error);
                    return null;
                }
            },
            onerror: (response) => {
                console.error("File upload failed:", response);
            },
        },
    };

    return (
        <div className="w-2/3 ml-auto mr-auto">
            <h2 className="m-5 text-center text-2xl ">Chunk Upload</h2>
            <FilePond
                className="[&_div.filepond--drop-label]:light:!bg-gray-200 [&_div.filepond--drop-label]:!rounded-md"
                files={files}
                onupdatefiles={setFiles}
                chunkUploads={true}
                allowMultiple={false}
                chunkSize={5 * 1024 * 1024}
                maxFileSize={256 * 1024 * 1024}
                acceptedFileTypes={["image/jpeg", "image/png", "video/mp4", "application/pdf"]}
                server={server}
                name="chunkfile"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
        </div>
    );
};

export default FileUpload;