let model = null;

// 🔹 Load Model
async function loadModel() {
    try {
        console.log("Loading model...");
        model = await tf.loadLayersModel('model/model.json');
        console.log("✅ Model Loaded");
    } catch (error) {
        console.error("❌ Model Load Error:", error);
        alert("Model not loading! Check path or files.");
    }
}

loadModel();

// 🔹 Preview Image
function previewImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {
        const img = document.getElementById("preview");
        img.src = e.target.result;
        img.style.display = "block";
    };

    reader.readAsDataURL(file);
}

// 🔹 Detect Accident
async function detectAccident() {

    const imgElement = document.getElementById("preview");
    const result = document.getElementById("result");

    if (!model) {
        alert("Model is still loading...");
        return;
    }

    if (!imgElement.src) {
        alert("Upload image first");
        return;
    }

    const img = new Image();
    img.src = imgElement.src;

    img.onload = async () => {

        try {
            let tensor = tf.browser.fromPixels(img)
                .resizeNearestNeighbor([224,224])
                .toFloat()
                .div(255.0)
                .expandDims();

            let prediction = await model.predict(tensor).data();

            console.log("Prediction:", prediction);

            let score = prediction[0]; // change to [1] if wrong

            result.style.display = "block";

            if(score > 0.5){
                result.className = "accident";
                result.innerHTML = "🚨 Accident Detected!";
            } else {
                result.className = "safe";
                result.innerHTML = "✅ No Accident";
            }

        } catch(err) {
            console.error(err);
            alert("Prediction error");
        }
    };
}