const indexController = {
    home: (req, res) => {
    return res.render("index", {title: "home"});
    },
};

module.exports= indexController;