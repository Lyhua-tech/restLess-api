exports.signUp = async(req, res, next) => {
    try {
        res.status(200).json({
            status: 'success',
        })
    } catch (error) {
        console.log(error.message);
    }
}

exports.logIn = async(req, res, next) => {
    try {
        res.status(200).json({
            status: 'success',
        })
    } catch (error) {
        console.log(error.message);
    }
}

exports.logOut = async(req, res, next) => {
    try {
        res.status(200).json({
            status: 'success',
        })
    } catch (error) {
        console.log(error.message);
    }
}