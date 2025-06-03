const db = require("./firebaseAdmin");

exports.consultar = async (req, res) => {
    try {
        const doc = await db.collection("Departamento").doc("Informacion").get();
        if (!doc.exists) {
            return res.status(404).json({ error: "Departamento no encontrado" });
    }
        res.json({ nombre: doc.data().Nombre });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.modificar = async (req, res) => {
    try {
        console.log("Body Recibido",req.body);
        const { Nombre } = req.body;
        await db.collection("Departamento").doc("Informacion").set({ Nombre });
        res.send("Departamento modificado exitosamente");
    } catch (error) {
        console.error("Error al modificar",error.message);
        res.status(400).json({ error: error.message });
    }
};