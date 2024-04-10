const errorMiddleWare = (err, req, res, next) => {
    console.log('This is an error middleware');
    const statutCode = res.statusCode ? res.statusCode : 500;
    res.status(statutCode);
    res.json({message: err.message, stack: process.env.NODE_ENV === 'development' ? err.stack : null})
}

module.exports = errorMiddleWare