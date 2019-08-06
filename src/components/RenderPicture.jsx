import React from "react";


export default function RenderPicture(props) {

  let temperature = Number(props.temp);

  let color = setColor(temperature)

  let style = { color: color}

  function setColor(temp) {
    if( temp <= -50 ) return '#61CFE9'
    if( temp <= 0) return '#B2DDDF'
    if( temp <= 40 ) return '#DDDF2F'
    if( temp <= 60 ) return '#6A8D67'
    if( temp <= 100 ) return '#FF6600'
    if( temp > 100 ) return '#FF1717'
  }


  console.log("DEBUG", color);

  return (

    <div>
      {temperature <= -50 && (
        <div>
          <h1 style={style} className="my-3">Winter is already there</h1>
          <img className="img-fluid rounded"
            width="500"
            src="https://www.galileo.tv/app/uploads/2015/07/Eiszeit.jpg"
          />
        </div>
      )}
      {temperature <= 0 && temperature > -50 && (
        <div>
          <h1 style={style} className="my-3">How fun it is in the snow...</h1>
          <img className="img-fluid rounded"
            width="500"
            src="https://aiswetter-a.akamaihd.net/masters/949094/3200x1800/sandwich-winter-zu-ende-winterlicher-start-dann-katastrophen-januar-und-eisiger-februar.jpg"
          />
        </div>
      )}
      {temperature <= 40 && temperature > 0 && (
        <div>
          <h1 style={style} className="my-3">It's a beautiful day</h1>
          <img className="img-fluid rounded"
            width="500"
            src="https://www.alpenrose-hotel.it/fileadmin/user_upload/preise-appartements-artus-schenna.jpg"
          />
        </div>
      )}
      {temperature > 40 && temperature <= 60 && (
        <div>
        <h1 style={style} className="my-3">It's getting hot in here.</h1>
          <img className="img-fluid rounded"
            width="500"
            src="https://cdn1.spiegel.de/images/image-1426453-860_poster_16x9-wmha-1426453.jpg"
          />
        </div>
      )}
      {temperature > 60 && temperature <= 100 && (
        <div>
        <h1 style={style} className="my-3">Much hotter...</h1>
          <img className="img-fluid rounded"
            width="500"
            src="https://c402277.ssl.cf1.rackcdn.com/photos/2232/images/portrait_overview/XL_288467.jpg?1345653107"
          />
        </div>
      )}
      {temperature > 100 && (
        <div>
        <h1 style={style} className="my-3">It's burning hot!</h1>
          <img className="img-fluid rounded"
            width="500"
            src="https://miro.medium.com/max/1400/1*GcWLttN2IdfGTlCWQnDlPQ.jpeg"
          />
        </div>
      )}
    </div>
  );
}
