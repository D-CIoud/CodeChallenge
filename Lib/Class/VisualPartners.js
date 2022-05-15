class visualPartners{
    static getPartners(partners){
        return partners; 
    }

    static getEmails(partners){
        const partnersfilter = partners.filter((partner) => partner.haveCertification == true);
        const emailsList = partnersfilter.map(function(partner) {return partner.email;});
        return emailsList
    }

    static getPartnersWithCredits(partners){
        const partnersfiltered = partners.filter((partner) => partner.credits > 500);
        return partnersfiltered
    }
}

module.exports = visualPartners;