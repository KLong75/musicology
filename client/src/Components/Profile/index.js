import React from "react";
import "./Profile.css";

import FileUploader from "./FileUploader";

const Profile = () => {
  return <FileUploader />;
};

export default Profile;

// class Profile extends Component {
//   state = { selectedFile: null };

//   fileSelectorHandler = (event) => {
//     this.setState({ selectedFile: event.target.files[0] });
//   };

//   fileUploadHandler = () => {
//     const fd = new FormData();
//     fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
//     axios
//       .post("", fd, {
//         onUploadProgress: (progressEvent) =>
//           console.log(
//             " Uplaod Progress" +
//               Math.round((progressEvent.loaded / progressEvent.total) * 100) +
//               "%"
//           ),
//       })
//       .then((res) => {
//         console.log(res);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <input type="file" onChange={this.fileSelectorHandler} />
//         <button onClick={this.fileUploadHandler}>Upload</button>
//       </div>
//     );
//   }
// }

// export default Profile;
