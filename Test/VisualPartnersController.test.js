const VisualPartnerCtrll = require("../Lib/Controllers/VisualPartnersController");

describe("Test's Case's for VisualPartners Controller", () =>{
    test("1. Get all partners in DB", () => {
        const PartnersList = VisualPartnerCtrll.getAllPartners();
        expect(PartnersList[0].name).toBe("Warren");
        expect(PartnersList[1].name).toBe("Lucinda");
    });

    test("2. Get Partner's emails that have certification in true", () => {
        const Partners = VisualPartnerCtrll.getPartnertsEmailsWithCertification();
        expect(Partners[0]).toBe('Todd@visualpartnership.xyz');
        expect(Partners[1]).toBe('Sexton@visualpartnership.xyz');
    });

    test("3. Get Partner's with Credit > 500", () => {
        const Partners = VisualPartnerCtrll.getPartnersWithHighCredits();
        Partners.forEach(partner => expect(partner.credits).toBeGreaterThan(500));
    });

});