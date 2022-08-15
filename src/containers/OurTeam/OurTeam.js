import React from 'react';
import './ourTeam.scss';

const OurTeam = () => {
  return (
    <div className="ourTeam">
      <div className="ourTeam__picture">
        {/* <img alt="team" src={Team} /> */}
      </div>
      <div className="ourTeam__info">
        <h4>Our team</h4>
        <p>
          We are a happy and open minded German-Mexican couple on a quest to
          fulfil our dream...
        </p>
        <p>
          ...of bringing recipes from Mexico to Germany, mixing cultures and
          flavours. For this we set out to create products that we love, forming
          a healthier and flavourful option for you. ​ In the summertime
          rehydrate and recharge with our "aguas frescas", refreshing and tasty
          lemonades with real fruit, herbs and just a little bit of sweetener
          And on cold, dark winterdays pamper yourself with one of our "atoles",
          which feels like liquid happiness, bringing cosiness and joy.
        </p>
      </div>
    </div>
  );
};
export default OurTeam;
