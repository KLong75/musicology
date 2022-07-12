import React, { Fragment, useState } from "react";
import axios from "axios";

const FileUploader = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = await new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      // console.log(res.data);
    } catch (err) {
      if (err.response.status === 500) {
        console.log("problem with server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };
  console.log(uploadedFile);
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>
        <input
          type="submit"
          value="upload"
          className="btn btn-primary btn-block"
        />
      </form>
      {uploadedFile ? (
        <div>
          <h3>{uploadedFile.filePath}</h3>
          <img src={uploadedFile.filePath} alt="file" />
        </div>
      ) : null}
    </Fragment>
  );
};

export default FileUploader;
