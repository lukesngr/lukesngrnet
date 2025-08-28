import Intro from '../../components/forwardsnnn/Intro';
import NNVisualizer from '../../components/forwardsnnn/NNVisualizer';
import NavbarWithBanner from '../../components/pageParts/NavbarWithBanner';
import Footer from '../../components/pageParts/Footer';
import Meta from '../../components/pageParts/Meta';
import "../../styles/aitoolssimple.scss";

function ForwardNNVisualizer() {
    return (
    <>
      <Meta siteTitle="Forward NN Visualizer" description="Visualizer for neural network forward propagation math, I had trouble understanding the math so I made this"></Meta>
      <NavbarWithBanner current={1}></NavbarWithBanner>
      <Intro />
      <NNVisualizer />
      <Footer></Footer>
    </>
    )
}

export default ForwardNNVisualizer;