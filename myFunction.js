exports.handler = async (event) => {
    // TODO implement
    const msg = "Niranjan says " + event.keyword
    const response = {
        statusCode: 200,
        body: msg
    };
    return response;
};