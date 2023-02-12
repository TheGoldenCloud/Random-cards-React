import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

function CardInfo({fullName, role, img, bio}) {
  return (
    <React.Fragment>
      <div className="card text-center" style={{width:"548px", height:"300px", border:"none"}}>
        <div className="card-body py-0">
        <img src={img} width="150" />
          <h5 className="card-title m-0">{fullName}</h5>
          <p className="position m-0">{role}</p>
          <p className="card-text my-1">
            {bio}
          </p>
        </div>
      </div>


    </React.Fragment>
  );
}

export default CardInfo