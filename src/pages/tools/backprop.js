import Intro from '../../components/backpropagation/Intro';
import NNVisualizer from '../../components/backpropagation/NNVisualizer';
import NavbarWithBanner from '../../components/pageParts/NavbarWithBanner';
import Footer from '../../components/pageParts/Footer';
import Meta from '../../components/pageParts/Meta';
import "../../styles/aitoolssimple.scss";

function BackpropagationVisualizer() {
    return(<>
      <Meta siteTitle="Backpropagation Visualizer" description="Visualizer that helps with backpropagation math"></Meta>
      <NavbarWithBanner current={1}></NavbarWithBanner>
      <Intro />
      <NNVisualizer />
      <Footer></Footer>
    </>)
}

export default BackpropagationVisualizer;