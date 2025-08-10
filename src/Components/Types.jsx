import React from 'react';
import ajwaImage from '../assets/images/ajwa.png';
import galaxyImage from '../assets/images/galaxy.png';
import medjoolImage from '../assets/images/medjool.png';
import meneifiImage from '../assets/images/meneifi.png';
import nabtatImage from '../assets/images/nabtat.png';
import rutabImage from '../assets/images/rutab.png';
import shaisheImage from '../assets/images/shaishe.png';
import sokariImage from '../assets/images/sokari.png';
import sugaeyImage from '../assets/images/sugaey.png';

import './Types.css';

const Types = () => {
  return (
    <section id="types">
      <h2 className="section-title">Jenis Kurma</h2>
      <div className="kurma-types">
        <div className="kurma-type">
          <img src={ajwaImage} alt="Ajwa" className="kurma-type-image" />
          <h3>Ajwa</h3>
          <p className="kurma-description">
            Ajwa dikenal dengan rasa manisnya yang kuat dan teksturnya yang lembut. 
            Kurma ini memiliki khasiat yang baik untuk kesehatan, terutama untuk pencernaan.
          </p>
        </div>

        <div className="kurma-type">
          <img src={galaxyImage} alt="Galaxy" className="kurma-type-image" />
          <h3>Galaxy</h3>
          <p className="kurma-description">
            Kurma Galaxy memiliki rasa manis yang lembut dan tekstur yang kenyal. 
            Kurma ini kaya akan serat dan vitamin, serta memiliki manfaat untuk meningkatkan energi.
          </p>
        </div>

        <div className="kurma-type">
          <img src={medjoolImage} alt="Medjool" className="kurma-type-image" />
          <h3>Medjool</h3>
          <p className="kurma-description">
            Medjool adalah jenis kurma yang terkenal dengan ukurannya yang besar dan rasanya yang manis dan lembut. 
            Kurma ini kaya akan nutrisi dan memiliki manfaat untuk kesehatan jantung.
          </p>
        </div>

        <div className="kurma-type">
          <img src={meneifiImage} alt="Meneifi" className="kurma-type-image" />
          <h3>Meneifi</h3>
          <p className="kurma-description">
            Meneifi memiliki rasa manis yang lembut dan tekstur yang kenyal. 
            Kurma ini kaya akan serat dan mineral, serta memiliki manfaat untuk meningkatkan kekebalan tubuh.
          </p>
        </div>

        <div className="kurma-type">
          <img src={nabtatImage} alt="Nabtat Ali" className="kurma-type-image" />
          <h3>Nabtat Ali</h3>
          <p className="kurma-description">
            Nabtat Ali memiliki rasa manis yang lembut dan tekstur yang kenyal. 
            Kurma ini kaya akan serat dan vitamin, serta memiliki manfaat untuk meningkatkan energi.
          </p>
        </div>

        <div className="kurma-type">
          <img src={rutabImage} alt="Rutab" className="kurma-type-image" />
          <h3>Rutab</h3>
          <p className="kurma-description">
            Rutab memiliki rasa manis yang lembut dan tekstur yang lembut. 
            Kurma ini kaya akan serat dan mineral, serta memiliki manfaat untuk meningkatkan kekebalan tubuh.
          </p>
        </div>

        <div className="kurma-type">
          <img src={shaisheImage} alt="Shaishe" className="kurma-type-image" />
          <h3>Shaishe</h3>
          <p className="kurma-description">
            Shaishe memiliki rasa manis yang kuat dan tekstur yang lembut. 
            Kurma ini kaya akan serat dan vitamin, serta memiliki manfaat untuk meningkatkan energi.
          </p>
        </div>

        <div className="kurma-type">
          <img src={sokariImage} alt="Sokari" className="kurma-type-image" />
          <h3>Sokari</h3>
          <p className="kurma-description">
            Sokari memiliki rasa manis yang lembut dan tekstur yang kenyal. 
            Kurma ini kaya akan serat dan mineral, serta memiliki manfaat untuk meningkatkan kekebalan tubuh.
          </p>
        </div>

        <div className="kurma-type">
          <img src={sugaeyImage} alt="Sugaey" className="kurma-type-image" />
          <h3>Sugaey</h3>
          <p className="kurma-description">
            Sugaey memiliki rasa manis yang kuat dan tekstur yang lembut. 
            Kurma ini kaya akan serat dan vitamin, serta memiliki manfaat untuk meningkatkan energi.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Types;
