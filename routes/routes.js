const express = require("express");
const login = require("../controllers/login");
const auth = require("../controllers/auth");
const logout = require("../controllers/logout");
const register = require("../controllers/register");
const addlisting = require("../controllers/addListing");
const getListings = require("../controllers/getListings");
const getSpot = require("../controllers/getSpot");
const book = require("../controllers/book");
const mySpots = require("../controllers/mySpots");
const reservations = require("../controllers/reservations");
const useAuth = require("../middleware/useAuth");
const router = express.Router();
const upload = require("../middleware/upload");
const addReview = require("../controllers/addReview");
const getReviews = require("../controllers/getReviews");
const editUser = require("../controllers/editUser");
const changePassword = require("../controllers/changePassword");
const cancelReservation = require("../controllers/cancelReservation");
const editSpot = require("../controllers/editSpot");
const deleteSpot = require("../controllers/deleteSpot");
const getAmenities = require("../controllers/getAmenities");
const pingHome = require("../controllers/pingHome");

router.get("/", pingHome);
router.post("/login", login);
router.post("/register", register);
router.get("/auth", useAuth, auth);
router.post("/logout", logout);
router.post("/addlisting", useAuth, upload.array('spotImages'), addlisting);
router.get("/listings", getListings);
router.get("/listing/", getSpot);
router.get("/amenities/", getAmenities);
router.post("/book", useAuth, book);
router.get("/myspots", useAuth, mySpots);
router.get("/reservations", useAuth, reservations);
router.post("/addreview", useAuth, addReview);
router.get("/getreviews", getReviews);
router.patch("/edituser", useAuth, editUser);
router.patch("/changepassword", useAuth, changePassword);
router.delete("/cancelreservation", useAuth, cancelReservation);
router.patch("/editspot", useAuth, editSpot);
router.delete("/deleteSpot", useAuth, deleteSpot);

module.exports = router;