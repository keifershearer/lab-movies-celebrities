//  Add your code here
const { model, Schema } = require("mongoose");


const celebritiesSchema = new Schema(
    {
        name: {
            type: String,
        },
        occupation: {
            type: String,
        },
        catchPhrase: {
            type: String,
        }
    }
)

const Celebrity = model('Celebrity', celebritiesSchema)
module.exports = Celebrity