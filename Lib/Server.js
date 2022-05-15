
const VisualPartnerCtrll = require("../Lib/Controllers/VisualPartnersController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Hola,bienvenido el server se encuentra arriba y activo!"});
});

app.get("/v1/visualpartners/",(request, response) => {
    const List = VisualPartnerCtrll.getAllPartners();
    response.json(List);
});

app.get("/v1/visualpartners/HaveCertification",(request, response) => {
    const List = VisualPartnerCtrll.getPartnertsEmailsWithCertification();
    response.json(List);
});

app.get("/v1/visualpartners/HaveCreditsHigherThan",(request, response) => {
    const List = VisualPartnerCtrll.getPartnersWithHighCredits();
    response.json(List);
});

app.listen(port, () => {
    console.log(`Server running in localhost:${port}`);
});

// app.get("/v1/explorers/:mission",(request, response) => {
//     const mission = request.params.mission;
//     const explorersInMission = ExplorerController.getExplorersByMission(mission);
    
//     response.json(explorersInMission);
// });
