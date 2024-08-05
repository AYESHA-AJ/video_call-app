import { useContext } from "react";
import { ThemeContext } from "../context";
import { Link } from "react-router-dom";

const About = () => {
    const {darkmode}=useContext(ThemeContext)
    return (
      <section className=" py-8">
        <div className="container py-8 px-6 mx-auto">
          <Link
                    className={`uppercase tracking-wide no-underline hover:no-underline font-bold ${darkmode?"text-gray-300":" text-gray-800 "}text-xl mb-8`}
            
          >
            About
          </Link>
  
          <p className="mt-8 mb-8">
            This template is inspired by the stunning nordic minimalist design -
            in particular:
            <br />
            <Link
                        className={`${darkmode ? "text-gray-500" : "text-gray-800"} underline hover:text-gray-900`}
              
            >
              Demo Theme
            </Link>{" "}
            created by{" "}
            <Link
              className={`${darkmode?"text-gray-500":"text-gray-800"} underline hover:text-gray-900`}
            >
              https://example.com/
            </Link>{" "}
            and{" "}
            <Link
                        className={`${darkmode ? "text-gray-500" : "text-gray-800"} underline hover:text-gray-900`}
              to="https://www.metricdesign.no/"
              target="_blank"
            >
              https://www.examplevideo.net/
            </Link>
          </p>
  
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur <a href="#">random link</a>{" "}
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel
            facilisis volutpat. Vitae aliquet nec ullamcorper sit. Nullam eget
            felis eget nunc lobortis mattis aliquam. In est ante in nibh mauris.
            Egestas congue quisque egestas diam in. Facilisi nullam vehicula ipsum
            a arcu. Nec nam aliquam sem et tortor consequat. Eget mi proin sed
            libero enim sed faucibus turpis in. Hac habitasse platea dictumst
            quisque. In aliquam sem fringilla ut. Gravida rutrum quisque non
            tellus orci ac auctor augue mauris. Accumsan lacus vel facilisis
            volutpat est velit egestas dui id. At tempor commodo ullamcorper a.
            Volutpat commodo sed egestas egestas fringilla. Vitae congue eu
            consequat ac.
          </p>
        </div>
      </section>
    );
  };
  
  export default About;