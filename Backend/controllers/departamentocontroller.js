const db = require("../../netlify/functions/departamento.js");

exports.consultar = async (req, res) => {
    try {
        const doc = await db.collection("Departamento").doc("Informacion").get();
        if (!doc.exists) {
            return res.status(404).json({ error: "Departamento no encontrado" });
    }
        res.json({ nombre: doc.data().nombre });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.modificar = async (req, res) => {
    try {
        const { nuevoNombre } = req.body;
        await db.collection("departamento").doc("info").set({ nombre: nuevoNombre });
        res.send("Departamento modificado exitosamente");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};