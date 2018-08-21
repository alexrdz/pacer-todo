import React from "react";

function Nav() {
  const dt = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = monthNames[dt.getMonth()];
  const day = dt.getDate();
  const year = dt.getFullYear();
  return (
    <nav className="navbar navbar-light navbar-expand-md bg-light border-bottom mb-4">
      <div className="container-fluid">
        <div className="m-0 d-flex">
          <span className="h4 m-0 mr-2">Sunday</span>
          <span className="border-left pl-2 color-green font-weight-bold">
            {day + ' ' + month + ', ' + year}
          </span>
        </div>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item" role="presentation">
              <a className="nav-link active" href="#">
                <svg width="30" height="28" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#50E3C2" fillRule="evenodd">
                    <path d="M26.007 15.464H12.218a1.218 1.218 0 1 1 0-2.436h13.558L22.249 9.5a1.218 1.218 0 0 1 1.723-1.722l5.644 5.644c.185.185.299.416.34.657.114.41.01.869-.312 1.191L24 20.916a1.218 1.218 0 0 1-1.723-1.723l3.73-3.73z" />
                    <path
                      d="M18.113 7.955H15.85V4.48c0-1.237-1.014-2.24-2.264-2.24h-8.49c-1.251 0-2.265 1.003-2.265 2.24v19.04c0 1.237 1.014 2.24 2.264 2.24h8.49c1.251 0 2.265-1.003 2.265-2.24v-3.712h2.264v3.712c0 2.474-2.027 4.48-4.528 4.48h-8.49C2.592 28 .565 25.994.565 23.52V4.48C.566 2.006 2.593 0 5.094 0h8.49c2.502 0 4.53 2.006 4.53 4.48v3.475z"
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
