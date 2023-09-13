import mainfield from "./img/mainfield.jpg";
import mainfieldvideo from "./img/mainfieldvideo.mkv";

const Home = () => {
  return (
    <>
      <div
        className="row"
        // style={{
        //   backgroundImage: `url(${mainfield})`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   width: "100vw",
        //   height: "100vh",
        // }}
      >
        <video loop autoPlay muted controls className="bg-video">
          <source src={mainfieldvideo} type="video/mp4" />
          Your browser does not support this video.
        </video>
        <div className="col-12">
          <h1
            className="hero"
          >
            Rachel <i>W.</i> Cheng
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
