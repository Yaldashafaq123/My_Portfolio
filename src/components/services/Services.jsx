import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
          Branding is more than just a logo; its the identity and personality of a business.
           A strong brand creates trust, recognition, and emotional connections with customers.
            From visual elements to messaging, effective branding ensures consistency and sets a
             business apart in a competitive market.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development & Digital Solutions</h2>
          <p>
          A website is often the first impression customers have of your business.
           A well-designed, user-friendly, and responsive website can engage visitors
            and convert them into loyal customers. Web development involves UI/UX design, 
            coding, performance optimization, and security, ensuring that your website is not only
             visually appealing but also functional and accessible across all devices.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Marketing & Strategy </h2>
          <p>
          Marketing is more than just promoting a product—its about creating a 
          connection with your audience. A solid marketing strategy involves SEO, 
          social media, content marketing, paid ads, and email campaigns to increase
           brand visibility. The right strategy helps businesses reach their target audience, 
           build trust, and ultimately drive conversions and growth.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>User Experience Optimization</h2>
          <p>
          User experience (UX) is about making sure customers enjoy and easily navigate your digital platforms. This involves improving website speed, intuitive navigation, mobile responsiveness, and accessibility. A seamless UX keeps visitors engaged, reduces frustration, and enhances customer satisfaction, leading to higher conversions and brand loyalty.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
