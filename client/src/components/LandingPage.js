import React, { useState } from "react";
import Logo from "../image/Logo.png";
import code from "../image/code.png";
import Typewritter from "typewriter-effect";
import trophy5 from "../image/Trophy3.png";
import trophy from "../image/AA2.png";
import trophy2 from "../image/BB.png";
import trophy3 from "../image/CC.png";
import { FaPhoneAlt, FaEnvelope, FaPrint } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function LandingPage() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  // const navigate = useNavigate();
  const Data = [
    {
      id: 1,
      title: "Observe..",
      image: trophy3,
      tags: [],
      description1:
        "When solving a puzzle, observation allows you to gather information and clues that can help you make connections, identify patterns, and solve the puzzle more efficiently. By carefully observing the puzzle and its elements, you can gain insights and make progress towards finding a solution.",
      description2:
        "Observation is also important in logic puzzles, as it allows you to analyze the information provided in the puzzle and draw conclusions based on logical reasoning. By observing the clues and relationships between elements in the puzzle, you can identify the correct solution.",
    },
    {
      id: 2,
      title: "Break it down..",
      image: trophy,
      tags: [],
      description1:
        "By dividing the puzzle into smaller parts, you can focus on one aspect of the puzzle at a time and avoid getting overwhelmed by the complexity of the entire puzzle. This helps to make the puzzle-solving process more manageable and less daunting. ",
      description2:
        "Breaking down a puzzle allows you to approach it in a logical sequence. By working on one part of the puzzle before moving on to the next, you can create a clear path towards finding the solution. This can help to make the puzzle-solving process more efficient and effective, as you can eliminate possible solutions and narrow down your focus to the most promising avenues.",
    },
    {
      id: 3,
      title: "Use logic and deduction..",
      image: trophy2,
      tags: [],
      description1:
        "Logic puzzles require you to apply a set of rules and constraints to fill in the blanks and solve the puzzle. By using logic and deduction, you can identify which possibilities are valid and which ones are not, allowing you to find the correct solution. ",
      description2:
        "Overall, logic and deduction are essential skills in puzzle-solving, allowing you to analyze the information provided in the puzzle and draw logical conclusions based on reasoning. By using these skills, you can eliminate incorrect solutions and find the correct answer, leading you to a successful puzzle-solving experience.",
    },
  ];
  return (
    <>
      <div className="shapedividers_com-4654">
        <div className="container ">
          <nav className="navbar navbar-expand-lg " id="navbar">
            <div className="container-fluid ">
              <a
                className="navbar-brand text-4xl font-sans font-semibold italic"
                href="#"
              >
                <h3>PuzzleArena</h3>
              </a>
            </div>
            <button id="login">
              <p className="btn-txt">
                <Link to="/Username">Login</Link>{" "}
              </p>
              <div className="fill-container"></div>
              <span className="first"></span>
              <span className="second"></span>
              <span className="third"></span>
              <span className="fourth"></span>
            </button>
          </nav>
        </div>
      </div>

      {/* hero sec */}
      <div className="grad">
        <div className="container">
          <div className="box">
            <div className="container">
              <div className="row">
                <div className="col-md-6 title">
                Puzzle Arena
                  <div className="container">
                    <div className="bottom-text">
                      <div className="text">
                        <Typewritter
                          options={{
                            autoStart: true,
                            loop: true,
                            delay: 80,
                            strings: [
                              "Crack the code, solve puzzles.",
                              "Unlock Your Mind, Piece by Piece",
                              "Challenge your mind with puzzles.",
                            ],
                          }}
                        />
                        <div id="para">
                          <span>
                            <div className="hero">
                              Join the competition and start solving interactive puzzles Today!
                            </div>

                            <div className="points">
                              We challenge YOU to solve our puzzles
                              and become the best. We provide a safe and
                              supportive platform for students to test their
                              soft skills.
                            </div>
                            <div>
                              <button id="register">
                                <p className="btn-txt">
                                  <Link to="/register">Register</Link>
                                </p>
                                <span className="first"></span>
                                <span className="second"></span>
                                <span className="third"></span>
                                <span className="fourth"></span>
                              </button>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src={trophy5}
                    // height="2000"
                    // width="1500"
                    alt="Your image"
                    className="img-fluid"
                  />
                  <div className="image-footer">
                    Our mission is to provide a fun and challenging way for people to exercise their brains and improve their cognitive skills, provide a diverse range of puzzles, including crosswords, Sudoku, logic puzzles, jigsaw puzzles, and more, to cater to different interests and skill levels.
                  </div>
                </div>
                 
              </div>
                
            </div>
          </div>
        </div>
      </div>

      {/* mid point */}

      <div className="container ">
        <div className="star font-family: 'Merriweather', serif !important;">
          How to become Best in Solving Puzzles?
        </div>
      </div>

      <div className="p-10 grid grid-cols-1 md:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {Data.map((item) => (
          <div
            key={item.id}
            className="rounded overflow-hidden shadow-lg dark:shadow-gray-800"
          >
            <img className="w-full" src={item.image} alt="Mountain" />
            <div className="px-4 py-2">
              <div className="font-bold text-xl mb-2 text-center text-purple-800 font-serif">
                {item.title}
              </div>

              <p className="text-purple-800 font-medium font-serif">
                {item.description1.substring(0, 10000)}
              </p>
              {isShowMore && (
                <p className="text-purple-800 font-medium font-serif">
                  {item.description2.substring(0, 10000)}
                </p>
              )}

              <button
                onClick={toggleReadMoreLess}
                className="pb-0 text-purple-800 font-medium font-serif"
              >
                <div className="pb-0 text-black font-medium font-serif">
                {isShowMore ? "Read Less" : "Read more.."}
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* conclusion              */}
      <div className="bg-violet-100 p-px mt-5">
        <div className="container">
          <h2 className="fear text-center text-4xl">
          Sharpen your mind, one puzzle at a time - the ultimate mental workout!
          </h2>
          <h4 className="fear2 text-2xl">
            {" "}
            <i>
              "Puzzle Arena will help you enhance your problem-solving skills, mental agility, and cognitive abilities, while also providing entertainment and a sense of accomplishment."
            </i>
          </h4>
        </div>
      </div>
      <div className="container">
        <div className="inner row">
          <div className="col-sm-6 text-left mt-7" id="upsolving">
            <div className="image-name2 font-semibold text-purple-900">
            Puzzle Arena..
            </div>
            <div className="mt-4 font-medium">
            Puzzle Arena offers a wide range of puzzles to cater to your interests and skill levels, providing an opportunity to learn new things and stimulate your brain. It also helps to improve your cognitive abilities, mental agility, and problem-solving skills. Overall, a Puzzle Arena is a valuable resource that can provide a challenging and rewarding experience that benefits your overall well-being.
            </div>
          </div>
          <div className="col-sm-6" id="codingcontest">
            <img src={code} alt="Your image" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* footer */}
      <div>
        {/* 5d54b0 473f89*/}
        <div style={{ backgroundColor: "#37306B" }}>
          <div className="container mt-5">
            <div className="row py-5 text-white">
              <div className="col-md-4 col-sm-12">
                <h4 className="text-warning">Puzzle Arena</h4>
                <p className="mt-2">
                  Start Today!
                  <br />
                  See you at the Puzzles.
                </p>
              </div>
              <div className="col-md-3 col-sm-12">
                <h4 className="text-warning mb-2">Company</h4>
                {/* <p><Link className="footer-item text-white" to="/about" style={{ cursor: 'pointer', textDecoration: 'none' }}>About Us</Link></p>
                    <p><Link className="footer-item text-white" to="/about" style={{ cursor: 'pointer', textDecoration: 'none' }}>Careers</Link></p>
                    
                    <p><Link className="footer-item text-white" to="/contact us" style={{ cursor: 'pointer', textDecoration: 'none' }}>Contact Us</Link></p>
                    <p><Link className="footer-item text-white" to="/privacy" style={{ cursor: 'pointer', textDecoration: 'none' }}>Privacy Policy</Link></p> */}
                <p>
                  <Link
                    className=" footer-item text-white "
                    to="https://mohak-portfolio.vercel.app/"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    Portfolio-Mohak Bansal
                  </Link>
                </p>
                <p>
                  <Link
                    className="footer-item text-white"
                    to="/AdminLogin"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    Admin Login
                  </Link>
                </p>
              </div>
              {/* <div className='col-md-3 col-sm-12'>
                    <h4 className='text-warning'>Useful Links</h4>
                    <p style={{ cursor: 'pointer' }}>Sitemap</p>
                    <p style={{ cursor: 'pointer' }}>Shipping Rates</p>
                    <p style={{ cursor: 'pointer' }}>Affililat Program</p>
                    <p style={{ cursor: 'pointer' }}>Affililat Program</p>
                </div> */}
              <div className="col-md-3 col-sm-12">
                <h4 className="text-warning ">Address</h4>
                <div className="flex items-center gap-2 mt-2">
                  <FiMapPin className=" me-2" />
                  M.B.M University Jodhpur (Rajasthan)
                </div>
              </div>
            </div>
            <p className="text-white pb-5">
              @copyright 2023. Made by Mohak Bansal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
