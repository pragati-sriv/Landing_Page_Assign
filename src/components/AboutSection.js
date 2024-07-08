import React from "react";
import ReactPlayer from "react-player";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div className="about_section">
      <h3 className="about">
        About <span className="school">School</span>
      </h3>
      <div className="content">
        <div className="paragraph">
          <p className="para">
            DLWS is the Foundation's second school in crossings republik &
            greater noida region. DLWS Awarded Asia's Top 100 fastest growing
            Schools by the KPMG Survey (WCRC) in 2015 and No. 1 among all the
            best schools in crossings republik and greater noida.Run by Darbari
            Lal Foundation, the school takes more than just the initials of the
            founder for its name it exemplifies the true spirit of value-based
            education that Babuji tirelessly espoused all his life.
          </p>
          <p className="para">
            It's first school, DLF PUBLIC SCHOOL was set up in 1996 at Sahibabad
            and is well known for its innovative educational technology,
            child-centered approach, outstanding results and path breaking
            teaching-learning strategies which has earned an unmatched
            reputation over the years and received awards like one of India's
            top 10 most respected school for academic reputation, leadership and
            Management Quality and Value for MONEY."
          </p>
          <p className="para">
            Shri DarbariLalJi was a visionary and a leading light in the field
            of education. He was born on 15th January 1930. His birthday shall
            be celebrated as school Founder’s Day. Words cannot describe nor do
            justice to the greatness and wisdom of this great man. He was like a
            sweet melody; the music of his intellect still reverberates in the
            form of his ideologies and principles. The school takes great pride
            in the fact that it has been founded in his auspicious memory. He
            sailed into the spiritual world on 16th May 1995 and mingled with
            the holy as that is where he belonged.
          </p>
        </div>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=2v_HybfPtwo"
            className="video"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
