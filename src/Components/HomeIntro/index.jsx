import React from "react";

export default function HomeIntro({ data }) {
  const { intro, servicesHeading, services, closing } = data;

  return (
    <section className="cs_heading_bg cs_white_color">
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="container">
        <div className="row cs_gap_y_30">
          <div className="col-lg-8 mx-auto">
            <p className="cs_fs_20 cs_body_color mb-0" data-aos="fade-up">
              {intro}
            </p>
          </div>
        </div>
        <div className="cs_height_40 cs_height_lg_30" />
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="cs_fs_20 cs_heading_color cs_bold cs_mb_16 mb-0" data-aos="fade-up">
              {servicesHeading}
            </p>
            <ul className="cs_home_intro_services cs_mp_0 cs_fs_20 cs_body_color" data-aos="fade-up">
              {services.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cs_height_40 cs_height_lg_30" />
        <div className="row cs_gap_y_30">
          <div className="col-lg-8 mx-auto">
            <p className="cs_fs_20 cs_body_color mb-0" data-aos="fade-up">
              {closing}
            </p>
          </div>
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70" />
    </section>
  );
}
