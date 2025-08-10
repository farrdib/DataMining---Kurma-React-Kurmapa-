import React from 'react';
import './History.css';
import ImageSlider from './ImageSlider';

const History = () => {
  return (
    <section id="history" className="section">
      <div className="kurma-history">
        <header className="kurma-header">
          <h1>Sejarah Kurma</h1>
        </header>
        <div className="kurma-content">
          <p>
            Kurma, (<span className="arabic">لغة عربية</span>: نخلة; <span className="latin">bahasa Latin</span>: <i>Phoenix dactylifera</i>) adalah tanaman palma (<a href="https://en.wikipedia.org/wiki/Arecaceae" target="_blank" rel="noopener noreferrer">Arecaceae</a>) dalam genus <i>Phoenix</i>, buahnya dapat dimakan. Walaupun tempat asalnya tidak diketahui karena telah sejak lama dibudidayakan, kemungkinan tanaman ini berasal dari tanah sekitar <a href="https://en.wikipedia.org/wiki/Persian_Gulf" target="_blank" rel="noopener noreferrer">Teluk Persia</a>.
          </p>
          <p>
            Buahnya dijadikan makanan pokok di daerah Timur Tengah dan Afrika Utara. Pohonnya berukuran sedang dengan tinggi sekitar 15–25 m, tumbuh secara tunggal atau membentuk rumpun pada sejumlah batang dari sebuah sistem akar tunggal. Daunnya memiliki panjang 3–5 m, dengan duri pada tangkai daun, menyirip dan mempunyai sekitar 150 pucuk daun muda; daun mudanya berukuran dengan panjang 30 cm dan lebar 2 cm. Rentangan penuh mahkotanya berkisar dari 6–10 m.
          </p>
          <ImageSlider />
        </div>
        <footer className="kurma-footer"></footer>
      </div>
    </section>
  );
};

export default History;
