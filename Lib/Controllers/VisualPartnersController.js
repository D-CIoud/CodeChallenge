const Reader = require("../Utils/Reader");
const visualPartner = require("../Class/VisualPartners");

class VisualPartnerController{
    static getAllPartners(){
        const PartnersList = Reader.readJsonFile("visualpartners.json");
        return PartnersList;
    }

    static getPartnertsEmailsWithCertification(){
        const PartnersList = Reader.readJsonFile("visualpartners.json");
        const Res = visualPartner.getEmails(PartnersList)
        return Res;
    }

    static getPartnersWithHighCredits(){
        const PartnersList = Reader.readJsonFile("visualpartners.json");
        const Res = visualPartner.getPartnersWithCredits(PartnersList);
        return Res;
    }
}

module.exports = VisualPartnerController;