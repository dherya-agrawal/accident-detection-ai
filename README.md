# 🚨 AI Road Accident Detection

An AI-powered web application that detects road accidents from images using a trained machine learning model.

---

## 📌 Project Overview

This project uses a deep learning model to classify images into:

* 🚗 **Accident**
* ✅ **No Accident**

The model runs directly in the browser using TensorFlow.js, so no backend server is required.

---

## 🎯 Features

* 📷 Upload image and detect accident instantly
* ⚡ Fast prediction using TensorFlow.js
* 🌐 Fully browser-based (no backend)
* 🎨 Clean and responsive UI
* 🚀 Deployed online using Vercel

---

## 🛠️ Technologies Used

* HTML, CSS, JavaScript
* TensorFlow.js
* Teachable Machine
* Vercel (Deployment)

---

## 🧠 How It Works

1. User uploads an image
2. Image is converted into tensor format
3. Model processes the image
4. Prediction is generated
5. Result is displayed (Accident / No Accident)

---

## 📁 Project Structure

```
accident-detection-ai/
 ├── index.html
 ├── script.js
 └── model/
      ├── model.json
      ├── weights.bin
      ├── metadata.json
```

---

## 🚀 Live Demo

👉 https://accident-detection-ai-tkfa.vercel.app

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```
git clone https://github.com/your-username/accident-detection-ai.git
```

### 2. Navigate to Project Folder

```
cd accident-detection-ai
```

### 3. Run Local Server

```
python -m http.server
```

### 4. Open in Browser

```
http://localhost:8000
```

---

## ⚠️ Important Notes

* Ensure model files are correctly placed inside `/model` folder
* Do not rename `.bin` file incorrectly
* Always run using a local server (not file://)

---

## 🚧 Challenges Faced

* Model loading errors
* File path issues
* Corrupted weights file during deployment
* Vercel caching problems

---

## 🔮 Future Scope

* Real-time accident detection using webcam
* Integration with CCTV systems
* Emergency alert system (SMS/Email)
* Improved accuracy using larger dataset

---

## 👨‍💻 Author

Dherya Agrawal

---

## ⭐ Acknowledgements

* Google Teachable Machine
* TensorFlow.js
* Open-source datasets

---

## 📜 License

This project is for educational purposes.
