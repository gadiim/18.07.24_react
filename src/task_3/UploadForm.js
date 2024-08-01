import React, { useState } from 'react';
import initialData from './initialData';
import PhotoPage from './PhotoPage';

function UploadForm() {
  const [formData, setFormData] = useState(initialData[0]);
  const [viewSource, setViewSource] = useState(initialData[0].photo);
  const [submittedData, setSubmittedData] = useState(null); // temp data

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({ ...formData, photo: viewSource });
    const form = document.getElementById('photo-form');
    form.classList.add('photo-upload-form-hidden');
  };

  const handleReset = () => {
    setFormData(initialData[0]);
    setViewSource(initialData[0].photo);
    setSubmittedData(null);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setViewSource(reader.result);
      };
      reader.readAsDataURL(file);
      setFormData((formData) => ({
        ...formData,
        photo: file,
      }));
    }
  };

  const handleSkip = () => {
    const form = document.getElementById('photo-form');
    form.classList.add('photo-upload-form-hidden');
  };

  return (
    <div className="photo-upload-container">
      <form
        id="photo-form"
        onSubmit={handleSubmit}
        className={isActive ? "photo-upload-form" : "photo-upload-form-hidden"}>
        <div className="photo-items">
          <div>
            <label>nickname*:</label>
            <input
              type="text"
              name="nickname"
              placeholder="nickname"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>password*:</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>email:</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>photo:</label>
            <input
              type="file"
              name="photo"
              onChange={handleFileInputChange}
            />
          </div>
          <div>
            <label>description:</label>
            <input
              type="text"
              name="description"
              placeholder="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>tags:</label>
            <input
              type="text"
              name="tags"
              placeholder="tags"
              value={formData.tags}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleSkip}>Skip</button>

        </div>
      </form>

      {submittedData ? <PhotoPage {...submittedData} /> : <PhotoPage {...initialData} />}
      <button type="button" onClick={handleClick}>Edit</button>
      <button type="button" className="resetBtn" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default UploadForm;
