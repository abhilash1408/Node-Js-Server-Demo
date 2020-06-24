const mongoose = require('mongoose')

const QPSchema = new mongoose.Schema({
    QPCode : {type : String, index : true},
    Filename  : String,
    SchoolId :  {type : String, index : true},
    TotalScore : Number,
    Subjects : [{
        SubjectName :  {type : String, index : true},
        SubjectImage : String
    }],
    Topics : [{
        index : Number,
        Subject : String,
        TopicName : {type : String, index : true},
        SubTopics : [String]
    }],
    Sections : [{
        SectionName :  {type : String, index : true},
        Subject :  {type : String, index : true},
        QuestionScore : Number,
        PartialMarking : {type : String, default : "No"},
        QuestionType : String,
        SectionImage : String,
        NegativeMarking : String,
        NegativeScore : Number,
        MultiChoice : String
    }],
    Questions : [{
        Question : String,
        SectionName : String,
        Solution : String,
        QuestionType : String,
        Topic : {
            index : Number,
            TopicName : String
        },
        Subject : String,
        SubTopic : String,
        PartialMarking : {type : String, default : "No"},
        MultiChoice : String,
        AnswerOptions : [Number],
        AnswerInteger : Number,
        Options : [{Option : String, def : {type : Boolean, default : false}}]
    }]
})

QPSchema.plugin(mongoosePaginate);

QPMOdel = mongoose.model("QuestionPaper",QPSchema,"QuestionPapers");
module.exports = QPMOdel;