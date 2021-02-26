"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const control_controllers_1 = require("../controllers/control.controllers");
const router = express_1.Router();
router.route('/')
    .get(control_controllers_1.inicio);
exports.default = router;
