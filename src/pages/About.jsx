import { useParams } from 'react-router-dom';

const About = () => {
  const { x, y, z } = useParams();

  console.log(x, y, z);

  return <div>About</div>;
};

export default About;
