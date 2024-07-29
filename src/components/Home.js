import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faSignOutAlt, faBars, faBarsProgress, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ReactH5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



const Home = () => {
  const [trending, setTrending] = React.useState([]);
  const [top20, setTop20] = React.useState([]);
  const [top50, setTop50] = React.useState([]);
  const [evergreen, setEvergreen] = React.useState([]);
  const [happy, setHappy] = React.useState([]);
  const [romantic, setRomantic] = React.useState([]);
  const [excited, setExcited] = React.useState([]);
  const [sad, setSad] = React.useState([]);

  const navigate = useNavigate();


  const fetchTrendingSong = async () => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/musicx/song?featured=Trending%20songs",
        {
          headers: {
            accept: "application/json",
            projectID: "treoo5dhf86s",
          },
        }
      );
      const data = await response.json();
      console.log("setTrending", data);
      setTrending(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchTop20 = async () => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 20 of this week",
        {
          headers: {
            accept: "application/json",
            projectID: "treoo5dhf86s",
          },
        }
      );
      const data = await response.json();
      console.log("setTop20", data);
      setTop20(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchTop50 = async () => {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 50 of this month",
      {
        headers: {
          accept: "application/json",
          projectID: "treoo5dhf86s",
        },
      }
    );
    const data = await response.json();
    console.log("setTop50", data);
    setTop50(data.data);
  };

  const fetchEvergreen = async () => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/musicx/song?featured=Evergreen melodies",
        {
          headers: {
            accept: "application/json",
            projectID: "treoo5dhf86s",
          },
        }
      );
      const data = await response.json();
      console.log("setEvergreen", data);
      setEvergreen(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchHappy = async () => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/musicx/song?mood=happy",
        {
          headers: {
            accept: "application/json",
            projectID: "treoo5dhf86s",
          },
        }
      );
      const data = await response.json();
      console.log("setHappy", data);
      setHappy(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchRomantic = async () => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/musicx/song?mood=romantic",
        {
          headers: {
            accept: "application/json",
            projectID: "treoo5dhf86s",
          },
        }
      );
      const data = await response.json();
      console.log("setRomantic", data);
      setRomantic(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchExcited = async () => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/musicx/song?mood=excited",
        {
          headers: {
            accept: "application/json",
            projectID: "treoo5dhf86s",
          },
        }
      );
      const data = await response.json();
      console.log("setExcited", data);
      setExcited(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchSad = async () => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/musicx/song?mood=sad",
        {
          headers: {
            accept: "application/json",
            projectID: "treoo5dhf86s",
          },
        }
      );
      const data = await response.json();
      console.log("setSad", data);
      setSad(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    fetchTrendingSong();
  }, []);
  React.useEffect(() => {
    fetchTop20();
  }, []);
  React.useEffect(() => {
    fetchTop50();
  }, []);
  React.useEffect(() => {
    fetchEvergreen();
  }, []);
  React.useEffect(() => {
    fetchHappy();
  }, []);
  React.useEffect(() => {
    fetchRomantic();
  }, []);
  React.useEffect(() => {
    fetchExcited();
  }, []);
  React.useEffect(() => {
    fetchSad();
  }, []);

  const AudioPlayer = ReactH5AudioPlayer;


  return (
    <div>
      <nav className="navbar">
        <div className="navbar-top">
          <div className="navbar-left">
            <img src="https://wynk.in/_next/static/media/icon-384x384.522e458f.png" alt="Wynk Music Logo" className="navbar-logo" />
            <span className="navbar-title">Wynk Music</span>
          </div>

          <div className="navbar-right">
            <div className="navbar-search-container">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar-search-icon" />
              <input type="text" placeholder="Search Songs" className="navbar-search" />
            </div>
            <button className="navbar-button"><span><FontAwesomeIcon icon={faBarsProgress} /></span> Manage Subscription</button>
            <button className="navbar-button">My Music</button>
            <div className="navbar-menu">
              <FontAwesomeIcon icon={faBars} />
              <div className="navbar-dropdown">
                <Link to="/profile" className="navbar-dropdown-item">
                  <FontAwesomeIcon icon={faUser} /> View Profile
                </Link>
                <Link to="/favourite" className="navbar-dropdown-item">
                  <FontAwesomeIcon icon={faHeart} /> Favourite
                </Link>
                <span className="navbar-dropdown-item"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">All</Link>
        <Link to="/trending" className="navbar-link">Trending Now</Link>
        <Link to="/music" className="navbar-link">Music</Link>
        <Link to="/album" className="navbar-link">Albums</Link>
      </div>
      <main className="flex flex-col  bg-black">
        {/* --------------------------------Trending-------------------------- */}

        <div className="bg-black text-white pt-[7px]">
          <div className="trending mb-[-45px]">
            <h1 className="text-base text-[25px] font-bold text-neutral-300 px-3 py-2">
              Trending Songs
            </h1>

            <div className="flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]">
              {trending.map((item) => {
                return (
                  <div
                    className="m-1"
                    onClick={() => {
                      navigate(`/song/${item._id}`);
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.name + "thumbnail"}
                      className="h-[220px] w-[220px] max-w-none"
                    />
                    <h2 className=" font-[500]">{item.title}</h2>
                    {item.artist.map((items) => {
                      return (
                        <span className="text-smtext-slate-400">
                          {items.name},{" "}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ----------------------------Top 20 Songs of this week------------------------ */}

        <div className="bg-black text-white pt-[70px]">
          <div className="trending mb-[-5px] mt-[-20px]">
            <h1 className="text-base text-[25px] font-bold text-neutral-300 px-3 py-2">
              Top 20 Songs of this week
            </h1>

            <div className="flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]">
              {top20.map((item) => {
                return (
                  <div
                    className="m-1"
                    onClick={() => {
                      navigate(`/song/${item._id}`);
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.name + "thumbnail"}
                      className="h-[220px] w-[220px] max-w-none"
                    />
                    <h2 className=" font-[500]">{item.title}</h2>
                    {item.artist.map((items) => {
                      return (
                        <span className="text-smtext-slate-400">
                          {items.name},{" "}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ///////////////////////--------------------------------------------------------------------- */}
        <div className="bg-black text-white pt-[70px]">
          <div className="trending mb-[-5px] mt-[-20px]">
            <h1 className="text-base text-[25px] font-bold text-neutral-300 px-3 py-2">
              Top 50 of this month
            </h1>

            <div className="flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]">
              {top50.map((item) => {
                return (
                  <div
                    className="m-1"
                    onClick={() => {
                      navigate(`/song/${item._id}`);
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.name + "thumbnail"}
                      className="h-[220px] w-[220px] max-w-none"
                    />
                    <h2 className=" font-[500]">{item.title}</h2>
                    {item.artist.map((items) => {
                      return (
                        <span className="text-smtext-slate-400">
                          {items.name},{" "}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* ///////////////////////--------------------------------------------------------------------- */}
        <div className="bg-black text-white pt-[70px]">
          <div className="trending mb-[-5px] mt-[-20px]">
            <h1 className="text-base text-[25px] font-bold text-neutral-300 px-3 py-2">
              Evergreen melodies
            </h1>

            <div className="flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]">
              {evergreen.map((item) => {
                return (
                  <div
                    className="m-1"
                    onClick={() => {
                      navigate(`/song/${item._id}`);
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.name + "thumbnail"}
                      className="h-[220px] w-[220px] max-w-none"
                    />
                    <h2 className=" font-[500]">{item.title}</h2>
                    {item.artist.map((items) => {
                      return (
                        <span className="text-smtext-slate-400">
                          {items.name},{" "}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* ///////////////////////--------------------------------------------------------------------- */}

        <div className="bg-black text-white pt-[70px]">
          <div className="trending mb-[-5px] mt-[-80px]">
            <h1 className="text-base text-[25px] font-bold text-neutral-300 px-3 py-2">
              Happy
            </h1>

            <div className="flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]">
              {happy.map((item) => {
                return (
                  <div
                    className="m-1"
                    onClick={() => {
                      navigate(`/song/${item._id}`);
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.name + "thumbnail"}
                      className="h-[220px] w-[220px] max-w-none"
                    />
                    <h2 className=" font-[500]">{item.title}</h2>
                    {item.artist.map((items) => {
                      return (
                        <span className="text-smtext-slate-400">
                          {items.name},{" "}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* ///////////////////////--------------------------------------------------------------------- */}
        <div className="bg-black text-white pt-[70px]">
          <div className="trending mb-[-5px] mt-[-25px]">
            <h1 className="text-base text-[25px] font-bold text-neutral-300 px-3 py-2">
              RomanticRomantic
            </h1>

            <div className="flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]">
              {romantic.map((item) => {
                return (
                  <div
                    className="m-1"
                    onClick={() => {
                      navigate(`/song/${item._id}`);
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.name + "thumbnail"}
                      className="h-[220px] w-[220px] max-w-none"
                    />
                    <h2 className=" font-[500]">{item.title}</h2>
                    {item.artist.map((items) => {
                      return (
                        <span className="text-smtext-slate-400">
                          {items.name},{" "}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* ///////////////////////--------------------------------------------------------------------- */}

        <div className="bg-black text-white pt-[70px]">
          <div className="trending mb-[-5px] mt-[-20px]">
            <h1 className="text-base text-[25px] font-bold text-neutral-300 px-3 py-2">
              Excited
            </h1>

            <div className="flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]">
              {excited.map((item) => {
                return (
                  <div
                    className="m-1"
                    onClick={() => {
                      navigate(`/song/${item._id}`);
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.name + "thumbnail"}
                      className="h-[220px] w-[220px] max-w-none"
                    />
                    <h2 className=" font-[500]">{item.title}</h2>
                    {item.artist.map((items) => {
                      return (
                        <span className="text-smtext-slate-400">
                          {items.name},{" "}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* ///////////////////////--------------------------------------------------------------------- */}
        <div className="bg-black text-white pt-[70px]">
          <div className="trending mb-[-25px] mt-[-30px]">
            <h1 className="text-base text-[25px] font-bold text-neutral-300 px-3 py-2">
              Sad
            </h1>
            <div className="flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]">
              {sad.map((item) => {
                return (
                  <div
                    className="m-1"
                    onClick={() => {
                      navigate(`/song/${item._id}`);
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.name + "thumbnail"}
                      className="h-[220px] w-[220px] max-w-none"
                    />
                    <h2 className=" font-[500]">{item.title}</h2>
                    {item.artist.map((items) => {
                      return (
                        <span className="text-smtext-slate-400">
                          {items.name},{" "}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      {/* Audio player */}
      <div className="container">
        <AudioPlayer
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
          volume={0.5}
        />
      </div>
    </div>

  );
};

export default Home;
