const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const MedicinalProduct = {
    
    name : {
        type : String
    },

    frequency : {
        type : Number
    },

    usageRecomendations : {
        type : String
    }
};

const MedicalConditionP = {

    name : {
        type : String
    },

    diagnosisStartDate : {
        type : Date
    },

    diagnosisEndDate : {
        type : Date
    },
    
    medicines : {
        type : [MedicinalProduct]
    }
    
};

const PastMedicalConditionsSchema = new mongoose.Schema({
    nameOfMedicalCondition : {
        type : [MedicalConditionP],
    }
});

const PastMedicalConditions = mongoose.model('PastMedicalConditions',PastMedicalConditionsSchema);

module.exports = PastMedicalConditions;