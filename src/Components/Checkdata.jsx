import React, { useState, useRef } from 'react';
import './Checkdata.css';
import axios from 'axios';

const Checkdata = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDescription, setImageDescription] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null); // Tambahkan state ini

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file); // Simpan file yang dipilih
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = async () => {
    setLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const ngrokUrl = 'https://9cea-35-237-82-59.ngrok-free.app'; // Ganti dengan URL ngrok Anda
      const response = await axios.post(`${ngrokUrl}/predict`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { label, confidence, predictions } = response.data;

      let predictedLabelName;
      switch (label) {
        case 0:
          predictedLabelName = 'Ajwa';
          break;
        case 1:
          predictedLabelName = 'Galaxy';
          break;
        case 2:
          predictedLabelName = 'Medjool';
          break;
        case 3:
          predictedLabelName = 'Meneifi';
          break;
        case 4:
          predictedLabelName = 'Nabtat Ali';
          break;
        case 5:
          predictedLabelName = 'Rutab';
          break;
        case 6:
          predictedLabelName = 'Shaishe';
          break;
        case 7:
          predictedLabelName = 'Sokari';
          break;
        case 8:
          predictedLabelName = 'Sugaey';
          break;
        default:
          predictedLabelName = 'Kelas tidak dikenali';
      }

      setPrediction({
        label: predictedLabelName,
        confidence,
        predictions,
      });
    } catch (error) {
      console.error('Error:', error);
      setError('Gagal memprediksi gambar. Pastikan server Flask berjalan dan endpoint /predict tersedia.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="checkdata">
      <div className="info-container">
      <h2>Temukan Jenis Kurma Favoritmu!</h2>
      <p>
       Kami siap membantumu menemukan kurma yang paling cocok untukmu.
    </p>
      </div>

      <h2>Dapatkan Pengecekan Data yang Valid!</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      <button className="check-data-button" onClick={handleButtonClick}>Cek Data</button>

      {selectedImage && (
        <div className="result-container">
          <div className="image-container">
            <img src={selectedImage} alt="Selected" className="selected-image" />
          </div>
          <div className="description-container">
            <p className="image-description">{imageDescription}</p>
            <button className="upload-button" onClick={handleUpload} disabled={loading}>
              {loading ? 'Mengirim...' : 'Upload'}
            </button>
          </div>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}

      {prediction && (
        <div className="prediction-result">
          <h3>Hasil Prediksi:</h3>
          <p><strong>Jenis Kurma:</strong> {prediction.label}</p>
          <p><strong>Tingkat Akurasi:</strong> {prediction.confidence.toFixed(2)}%</p>
          {prediction.label === 'Ajwa' && (
            <div>
              <h4>Tentang Ajwa:</h4>
              <ul>
                <li>Ajwa dikenal dengan rasa manisnya yang kuat dan teksturnya yang lembut.</li>
                <li>Kurma ini memiliki khasiat yang baik untuk kesehatan, terutama untuk pencernaan.</li>
              </ul>
            </div>
          )}
          {prediction.label === 'Galaxy' && (
            <div>
              <h4>Tentang Galaxy:</h4>
              <ul>
                <li>Kurma Galaxy memiliki rasa manis yang lembut dan tekstur yang kenyal. </li>
                <li>Kurma ini kaya akan serat dan vitamin, serta memiliki manfaat untuk meningkatkan energi.</li>
              </ul>
            </div>
          )}
          {prediction.label === 'Medjool' && (
            <div>
              <h4>Tentang Medjool:</h4>
              <ul>
                <li>Medjool adalah jenis kurma yang terkenal dengan ukurannya yang besar dan rasanya yang manis dan lembut.</li>
                <li>Kurma ini kaya akan nutrisi dan memiliki manfaat untuk kesehatan jantung.</li>
              </ul>
            </div>
          )}
          {prediction.label === 'Meneifi' && (
            <div>
              <h4>Tentang Meneifi:</h4>
              <ul>
                <li>Meneifi memiliki rasa manis yang lembut dan tekstur yang kenyal.</li>
                <li>Kurma ini kaya akan serat dan mineral, serta memiliki manfaat untuk meningkatkan kekebalan tubuh.</li>
              </ul>
            </div>
          )}
          {prediction.label === 'Nabtat Ali' && (
            <div>
              <h4>Tentang Nabtat Ali:</h4>
              <ul>
                <li>Nabtat Ali memiliki rasa manis yang lembut dan tekstur yang kenyal. </li>
                <li>Kurma ini kaya akan serat dan vitamin, serta memiliki manfaat untuk meningkatkan energi.</li>
              </ul>
            </div>
          )}
          {prediction.label === 'Rutab' && (
            <div>
              <h4>Tentang Rutab:</h4>
              <ul>
                <li>Rutab memiliki rasa manis yang lembut dan tekstur yang lembut.</li>
                <li> Kurma ini kaya akan serat dan mineral, serta memiliki manfaat untuk meningkatkan kekebalan tubuh.</li>
              </ul>
            </div>
          )}
          {prediction.label === 'Shaishe' && (
            <div>
              <h4>Tentang Shaishe:</h4>
              <ul>
                <li>Shaishe memiliki rasa manis yang kuat dan tekstur yang lembut.</li>
                <li>Kurma ini kaya akan serat dan vitamin, serta memiliki manfaat untuk meningkatkan energi.</li>
              </ul>
            </div>
          )}
          {prediction.label === 'Sokari' && (
            <div>
              <h4>Tentang Sokari:</h4>
              <ul>
                <li>Sokari memiliki rasa manis yang lembut dan tekstur yang kenyal</li>
                <li>Kurma ini kaya akan serat dan mineral, serta memiliki manfaat untuk meningkatkan kekebalan tubuh.</li>
              </ul>
            </div>
          )}
           {prediction.label === 'Sugaey' && (
            <div>
              <h4>Tentang Sugaey:</h4>
              <ul>
                <li>Sugaey memiliki rasa manis yang kuat dan tekstur yang lembut.</li>
                <li> Kurma ini kaya akan serat dan vitamin, serta memiliki manfaat untuk meningkatkan energi.</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Checkdata;
