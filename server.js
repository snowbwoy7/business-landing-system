import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.get("/api/business", (req, res) => {
    const filePath = path.join(__dirname, "data", "business.json");

    try {
        const data = fs.readFileSync(filePath, "utf8");
        res.json(JSON.parse(data));
    } catch (error) {
        console.error("Failed to read business data:", error);
        res.status(500).json({
            error: "Failed to read business data."
        });
    }
});

app.post("/api/business", (req, res) => {
    const filePath = path.join(__dirname, "data", "business.json");

    try {
        fs.writeFileSync(
            filePath,
            JSON.stringify(req.body, null, 2),
            "utf8"
        );

        res.json({
            success: true,
            message: "Business data saved successfully."
        });
    } catch (error) {
        console.error("Failed to save business data:", error);
        res.status(500).json({
            error: "Failed to save business data."
        });
    }
});

app.listen(PORT, () => {
    console.log(`Business Landing System running at http://localhost:${PORT}`);
});