import React from 'react';
import img from './img/photo.svg';
import nickname from './img/nickname.svg';
import email from './img/email.svg';
import description from './img/description.svg';
import tag from './img/tag.svg';

function PhotoPage({ ...data }) {
  return (
    <div className='photo-container'>
        <img className="photo-main-photo"
          src={data.photo || img}
          alt={data.photo ? "Submitted Preview" : "Default Preview"}
        />
        <br></br>
      <p><img src={nickname} alt="nickname"></img>nickname: <i>{data.nickname}</i></p>
      <p><img src={email} alt="email"></img>email: <i>{data.email}</i></p>
      <p><img src={description} alt="description"></img>description: <i>{data.description}</i></p>
      <p><img src={tag} alt="tag"></img>tags: <i>{data.tags}</i></p>
      <br></br>
    </div>
  );
}

export default PhotoPage;
