// App..js

import './App.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

function App() {

    //Setting up the initial states using
    // react hook 'useState"
    const [video, setVideo] = useState("inception");
    const [videoURL, setVideoURL] =
        useState("https://youtu.be/sa9l-dTv9Gk");

    //A function to fetch the required URL
    // and storing it inside the
    // videoURL state variable
    function handleSearch() {
        movieTrailer(video).then((res) => {
            setVideoURL(res);
        });
    }

    return (
        <div className="App">
            <div className="search-box">
                <label>
                    Search for any movies/shows:{" "}
                </label>
                <input type="text" onChange=
                    {(e) => { setVideo(e.target.value) }} />

                <button onClick={() => { handleSearch() }}>
                    Search
                </button>
            </div>

       {/* Using 'ReactPlayer' component to
            // display the video */}
            <ReactPlayer url={videoURL} controls={true} />
        </div>
    );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
