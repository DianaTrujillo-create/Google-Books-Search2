const path = required("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../google-books-search2/build/index.html"));
});

module.export = router; 