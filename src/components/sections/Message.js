import React from "react";

const Message = () => {
  return (
    <section className="message">
      <div className="message-wrapper">
        <p className="message-label">Message from the chairman</p>
        <p className="split-paragraph">
          Sed ut perspiciatis unde omnis <br /> iste natus error sit voluptatem{" "}
          <br />
          accusantium doloremque <br /> laudantium, totam rem aperiam, <br />{" "}
          eaque ipsa quae ab illo <br /> inventore veritatis et quasi <br />{" "}
          architecto beatae vitae dicta <br />
          sunt explicabo.
        </p>
        <div className="person">
          <div className="avatar"></div>
          <div className="h-fit">
            <h5 className="person-name">Alexander Zhestkov</h5>
            <p className="text-tagline">Design Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
