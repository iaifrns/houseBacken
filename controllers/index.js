//const AppError = require("../utils/appError").default;

import AppError from "../utils/appError.js";
import conn from "../services/db.js";


export const getAllHouses = (req, res, next) => {
    conn.query("SELECT * FROM house", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
};

export const getAllClient = (req, res, next) => {
    conn.query("SELECT * FROM client", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
};

export const getAllHouseOwner = (req, res, next) => {
    conn.query("SELECT * FROM house_owner", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
};

export const createHouse = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const address = [req.body.address, "pending"];
    const description = [req.body.description, "pending"];
    const price = [req.body.price, "pending"];
    const image = [req.body.address, "pending"];
    const ownerId = [req.body.ownerId, "pending"];
    conn.query(
      "INSERT INTO house (address, description, price, image, ownerId, status) VALUES(?, ? , ?, ?, ?)",
      [address],
      [description],
      [price],
      [image],
      [ownerId],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "todo created!",
        });
      }
    );
};

export const createClient = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const name = [req.body.name, "pending"];
    const email = [req.body.email, "pending"];
    const password = [req.body.password, "pending"];
    conn.query(
      "INSERT INTO client (name, email, password, status) VALUES(?, ? , ?)",
      [name],
      [email],
      [password],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "todo created!",
        });
      }
    );
};

export const createHouseOwner = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const name = [req.body.name, "pending"];
    const email = [req.body.email, "pending"];
    const password = [req.body.password, "pending"];
    conn.query(
      "INSERT INTO house_owner (name, email, password, status) VALUES(?, ? , ?)",
      [name],
      [email],
      [password],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "todo created!",
        });
      }
    );
};

export const getHouse = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No house id found", 404));
    }
    conn.query(
      "SELECT * FROM house WHERE id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
};

export const getClient = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No client id found", 404));
    }
    conn.query(
      "SELECT * FROM client WHERE id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
};

export const getHouseOwner = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No house owner id found", 404));
    }
    conn.query(
      "SELECT * FROM house_owner WHERE id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
};

export const deleteHouse = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No house id found", 404));
    }
    conn.query(
      "DELETE FROM house WHERE id=?",
      [req.params.id],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "house deleted!",
        });
      }
    );
}

export const deleteClient = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No client id found", 404));
    }
    conn.query(
      "DELETE FROM client WHERE id=?",
      [req.params.id],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "user deleted!",
        });
      }
    );
}

export const deleteHouseOwner = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No house_owner id found", 404));
    }
    conn.query(
      "DELETE FROM house_owner WHERE id=?",
      [req.params.id],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "user deleted!",
        });
      }
    );
}