import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./People.module.scss";
import Slider from "react-slick";
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const People = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    section className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="people"></a>

      <motion.div
      variants={footerVariants}
      className={`yPaddings innerWidth ${css.container}`}>


        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Achivements</span>
          <p style={{ marginTop: "2rem" }}>
            These are some of my Achivements in the academics, curricular and coding. 
          </p>
          {/* <p>The process of submitting an appilication was quite cosy</p> */}
        </div>



        <div className={`yPaddings ${css.comments}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`}>
                  {/* <img src={comment.img} alt="" /> */}
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                    
                  </div>
                  <div className={css.line}></div>
                  <p>{comment.comment}</p>
                  <a href={comment.linky}>{comment.link}</a>
                  
                  
                </div>
              );
            })}
          </Slider>
        </div>


      </motion.div>

    </motion.section>
  );
};

export default People;
