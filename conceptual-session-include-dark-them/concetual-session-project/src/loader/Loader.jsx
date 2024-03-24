import { Audio, Bars, Circles, CirclesWithBar, FidgetSpinner, Grid, InfinitySpin, TailSpin } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className=" flex justify-center min-h-[calc(100vh-116px)] items-center">
      {/* <Audio
      height="80"
      width="80"
      radius="9"
      color="red"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
      /> */}
      {/* <Circles></Circles> */}
      {/* <CirclesWithBar 
    color='red'
    ></CirclesWithBar> */}
    {/* <Grid></Grid> */}
    {/* <TailSpin></TailSpin> */}
    {/* <InfinitySpin></InfinitySpin> */}
    {/* <FidgetSpinner 
    // ballColors={'red'}
    backgroundColor='red'
    ></FidgetSpinner> */}
    <Bars color='tomato'></Bars>
    </div>
  );
};

export default Loader;