const axios = require("axios");

const getBook = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/book");
        return response.data

    } catch (error) {
        return error.message
    }
}

module.exports = { getBook }