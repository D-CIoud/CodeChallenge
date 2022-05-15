const Reader = require("../Lib/Utils/Reader")
const VisualPartner = require("../Lib/Class/VisualPartners");

describe("Test's Case's for VisualPartners class", () =>{
    test("1. Get all partners in DB", () => {
        const PartnerList = Reader.readJsonFile("visualpartners.json")

        const Partners = VisualPartner.getPartners(PartnerList);
        expect(Partners[0].name).toBe("Warren");
        expect(Partners[1].name).toBe("Lucinda");
    });

    test("2. Get Partner's emails that have certification in true", () => {
        const PartnerList = Reader.readJsonFile("visualpartners.json")
        const Partners = VisualPartner.getEmails(PartnerList);

        expect(Partners[0]).toBe('Todd@visualpartnership.xyz');
        expect(Partners[1]).toBe('Sexton@visualpartnership.xyz');
    });

    test("3. Get Partner's with Credit > 500", () => {
        const PartnerList = Reader.readJsonFile("visualpartners.json")
        const Partners = VisualPartner.getPartnersWithCredits(PartnerList);

        Partners.forEach(partner => expect(partner.credits).toBeGreaterThan(500));
    });

});