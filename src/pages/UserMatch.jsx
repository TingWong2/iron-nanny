import React, {useState,useEffect} from "react";
import {useParams} from 'react-router-dom';

const UserMatch = () => {

const [matched, setMatched] = useState({});

const {id} = useParams();


useEffect( async () => {
  const apiMatched = await apiHandler.getMatched(id);
  const matched = {...apiMatched};
  setMatched(matched);
}, []);


return (
  <div className="container">
    <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
            <div className="card">
              <img src={matched.liker.picture} className="card-img-top" alt={matched.liker.firstName}/>
              <div className="card-body">
                <h5 className="card-title">{matched.liker.firstName} {matched.liker.lastName}</h5>
                <p className="card-text"><i className="fas fa-mobile-alt mr-2"></i>{matched.liker.cellphone}</p>
                <p className="card-text"><i className="far-fa-home mr-2"></i>{matched.liker.address}</p>
                <a href="/" className="btn btn-primary">Go Back Home</a>
              </div>
            </div>
        </div>
        <div className="col mb-4">
            <div className="card">
              <img src={matched.liked.picture} className="card-img-top" alt={matched.liked.firstName}/>
              <div className="card-body">
                <h5 className="card-title">{matched.liked.firstName} {matched.liked.lastName}</h5>
                <p className="card-text"><i className="fas fa-mobile-alt mr-2"></i>{matched.liked.cellphone}</p>
                <p className="card-text"><i className="far-fa-home mr-2"></i>{matched.liked.address}</p>
                <a href="/" className="btn btn-primary">Go Back Home</a>
              </div>
            </div>
        </div>
    </div>
</div> );

}

export default UserMatch;
