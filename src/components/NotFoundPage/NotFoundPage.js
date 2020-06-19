import React from 'react';

const NotFoundPage = () => {
  return (
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occurred, Requested page not found!
            </div>
          </div>
        </div>
      </div>
  );
};

export default NotFoundPage;
