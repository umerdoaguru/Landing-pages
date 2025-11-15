const express = require("express");
const db = require("../connect.js");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const validator = require("validator");
const otpStore = new Map();

dotenv.config();

const DB_CONFIG = {
  host: "localhost",
  user: "root",
  password: "",
  database: "landingpage",
};

const EMAIL_CONFIG = {
  host: "mail.dentalguru.software",
  port: 465,
  secure: true,
  auth: {
    user: "info@dentalguru.software",
    pass: "dentalguru.software",
  },
  sender: "info@dentalguru.software",
  receiver: "shubhsoni1996th@gmail.com",
  cc: ["shubhsoni275@gmail.com"], // Add more CC addresses if needed
};

const bookDemo = (req, res) => {
  const { name, phone, email, message } = req.body;

  // Validate incoming data
  if (!name || !phone || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  console.log(`[${new Date().toISOString()}] Request Body Received:`, req.body);

  const sql = `INSERT INTO book (name, phone, email, message) VALUES (?, ?, ?, ?)`;
  const values = [name, phone, email, message];

  // Database query
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(
        `[${new Date().toISOString()}] Database error: ${err.message}`
      );
      return res.status(500).json({
        success: false,
        message: "Error saving data to database",
        error: err.message,
      });
    }

    console.log(
      `[${new Date().toISOString()}] Data Uploaded Successfully: ID ${
        data.insertId
      }`
    );

    // Send email after successful database entry
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // From environment variables
      port: process.env.SMTP_PORT || 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_FROM || "inquiry@doaguru.com",
      to: process.env.MAIL_TO || "abhinavp877@gmail.com",
      cc: process.env.MAIL_CC?.split(",") || [
        "doagurudigitalmarketing@gmail.com",
        "doaguruinfosystems@gmail.com",
        "doagurumd@gmail.com",
      ],
      subject: "Leads/Query/Contact from Dental Guru",
      text: `Name: ${name}\nEmail: ${email}\nMobile No.: ${phone}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(
          `[${new Date().toISOString()}] Email error: ${error.message}`
        );
        return res.status(500).json({
          success: false,
          message: "Failed to send email",
          error: error.message,
        });
      }

      console.log(`[${new Date().toISOString()}] Email sent: ${info.response}`);
      return res.status(200).json({
        success: true,
        message: "Data saved and email sent successfully",
        id: data.insertId, // Optionally include the inserted ID
      });
    });
  });
};

const getbookDemo = (req, res) => {
  const sql = `SELECT * FROM book`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(
        `[${new Date().toISOString()}] Error fetching data:`,
        err.message
      );
      return res.status(500).json({
        success: false,
        message: "Failed to fetch data",
        error: err.message,
      });
    }

    console.log(`[${new Date().toISOString()}] Data fetched successfully`);
    return res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: result, // Send the data in a `data` field for consistency
    });
  });
};

const sendOtpEmail = async (email, otp) => {
  try {
    let mailOptions = {
      from: process.env.EMAILSENDER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}`,
      html: `<b>Your OTP code is: ${otp}</b>`,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

const loginUserWithOTP = async (req, res) => {
  const { UserId, password } = req.body;

  if (!UserId || !password) {
    return res.status(400).json({
      status: "Failure",
      message: "User ID and password are required",
    });
  }

  try {
    const getUserQuery = ` SELECT * FROM userprofile WHERE UserId = ?`;

    db.query(getUserQuery, [UserId], async (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res
          .status(500)
          .json({ status: "Failure", message: "Internal server error" });
      }

      if (results.length === 0) {
        return res
          .status(404)
          .json({ status: "Failure", message: "User not found" });
      }

      const user = results[0];

      // Check password
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res
          .status(401)
          .json({ status: "Failure", message: "Invalid password" });
      }

      // Check if user role requires OTP (only "superadmin" or "retailer" need OTP)
      if (user.role === "superadmin" || user.role === "retailer") {
        const otp = crypto.randomInt(100000, 999999).toString();

        const otpHash = await bcrypt.hash(otp, 10);

        otpStore.set(user.UserId, {
          otpHash,
          expiresAt: Date.now() + 5 * 60 * 1000, // OTP expires in 5 minutes
        });

        try {
          await sendOtpEmail(user.Email, otp);
        } catch (emailError) {
          console.error("Error sending email:", emailError);
          return res
            .status(500)
            .json({ status: "Failure", message: "Failed to send OTP email" });
        }

        return res.status(200).json({
          status: "Success",
          message: "OTP sent to your registered email",
        });
      } else {
        // For roles like "whitelabel", "superdistributer", and "distributer", log in directly
        const payload = {
          userId: user.UserId,
          role: user.role,
          email: user.Email,
          username: user.UserName,
          Status: user.Status,
          ContactNo: user.ContactNo,
          PanCardNumber: user.PanCardNumber,
          AadharNumber: user.AadharNumber,
          BusinessName: user.BusinessName,
          City: user.City,
          State: user.State,
          PinCode: user.PinCode,
          package_Id: user.package_Id,
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "6h" });

        return res.json({
          status: "Success",
          message: "Login successful",
          token,
          user: {
            userId: user.UserId,
            role: user.role,
            email: user.Email,
            username: user.UserName,
            Status: user.Status,
            ContactNo: user.ContactNo,
            PanCardNumber: user.PanCardNumber,
            AadharNumber: user.AadharNumber,
            BusinessName: user.BusinessName,
            City: user.City,
            State: user.State,
            PinCode: user.PinCode,
            package_Id: user.package_Id,
          },
        });
      }
    });
  } catch (error) {
    console.error("Error processing login request:", error);
    return res
      .status(500)
      .json({ status: "Failure", message: "Internal server error" });
  }
};

const verifyOtpAndLogin = async (req, res) => {
  const { UserId, otp } = req.body;

  if (!UserId || !otp) {
    return res
      .status(400)
      .json({ status: "Failure", message: "User ID and OTP are required" });
  }

  try {
    // Fetch the user
    const getUserQuery = `SELECT * FROM userprofile WHERE UserId = ?`;

    db.query(getUserQuery, [UserId], async (err, results) => {
      if (err || results.length === 0) {
        return res
          .status(404)
          .json({ status: "Failure", message: "User not found" });
      }

      const user = results[0];
      const otpData = otpStore.get(user.UserId);

      if (!otpData || Date.now() > otpData.expiresAt) {
        return res
          .status(400)
          .json({ status: "Failure", message: "OTP expired or invalid" });
      }

      // Verify the OTP
      const isOtpValid = await bcrypt.compare(otp, otpData.otpHash);

      if (!isOtpValid) {
        return res
          .status(400)
          .json({ status: "Failure", message: "Invalid OTP" });
      }

      // Clear the OTP from store
      otpStore.delete(user.UserId);

      // Generate JWT token
      const payload = {
        userId: user.UserId,
        username: user.UserName,
        role: user.role,
        email: user.Email,
        Status: user.Status,
        ContactNo: user.ContactNo,
        PanCardNumber: user.PanCardNumber,
        AadharNumber: user.AadharNumber,
        BusinessName: user.BusinessName,
        City: user.City,
        State: user.State,
        PinCode: user.PinCode,
        package_Id: user.package_Id,
      };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "6h" });

      // Respond with JWT token
      return res.json({
        status: "Success",
        message: "Login successful",
        token,
        user: {
          userId: user.UserId,
          role: user.role,
          email: user.Email,
          username: user.UserName,
          Status: user.Status,
          ContactNo: user.ContactNo,
          PanCardNumber: user.PanCardNumber,
          AadharNumber: user.AadharNumber,
          BusinessName: user.BusinessName,
          City: user.City,
          State: user.State,
          PinCode: user.PinCode,
          package_Id: user.package_Id,
        },
      });
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res
      .status(500)
      .json({ status: "Failure", message: "Internal server error" });
  }
};

const contact = (req, res) => {
  const { name, phone, email, city } = req.body;

  // Validate incoming data
  if (!name || !phone || !email || !city) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  console.log(`[${new Date().toISOString()}] Request Body Received:`, req.body);

  // SQL Query
  const sql = `INSERT INTO contact (name, phone, email, city) VALUES (?, ?, ?, ?)`;
  const values = [name, phone, email, city];

  // Database query
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(
        `[${new Date().toISOString()}] Database error: ${err.message}`
      );
      return res.status(500).json({
        success: false,
        message: "Error saving data to database",
        error: err.message,
      });
    }

    console.log(
      `[${new Date().toISOString()}] Data Uploaded Successfully: ID ${
        data.insertId
      }`
    );

    // Send email after successful database entry
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // From environment variables
      port: process.env.SMTP_PORT || 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_FROM || "inquiry@doaguru.com",
      to: process.env.MAIL_TO || "abhinavp877@gmail.com",
      cc: process.env.MAIL_CC?.split(",") || [
        "doagurudigitalmarketing@gmail.com",
        "doaguruinfosystems@gmail.com",
        "doagurumd@gmail.com",
      ],
      subject: "Leads/Query/Contact from Dental Guru",
      text: `Name: ${name}\nEmail: ${email}\nMobile No.: ${phone}\nCity: ${city}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(
          `[${new Date().toISOString()}] Email error: ${error.message}`
        );
        return res.status(500).json({
          success: false,
          message: "Failed to send email",
          error: error.message,
        });
      }

      console.log(`[${new Date().toISOString()}] Email sent: ${info.response}`);
      return res.status(200).json({
        success: true,
        message: "Data saved and email sent successfully",
        id: data.insertId,
      });
    });
  });
};

const getContacts = (req, res) => {
  const sql = `SELECT * FROM contact ORDER BY contact_id DESC`;

  db.query(sql, (err, data) => {
    if (err) {
      console.error(
        `[${new Date().toISOString()}] Database error: ${err.message}`
      );
      return res.status(500).json({
        success: false,
        message: "Error fetching data from database",
        error: err.message,
      });
    }

    console.log(`[${new Date().toISOString()}] Contacts Fetched Successfully`);
    return res.status(200).json({
      success: true,
      message: "Contacts retrieved successfully",
      data,
    });
  });
};

const saveTrialData = (req, res) => {
  try {
    const { username, email, mobile, address, category } = req.body;
    const dateTime = moment().tz("Asia/Kolkata").format("DD-MM-YYYY HH:mm:ss");
    const insertQuery = `INSERT INTO trial_data (username, email, mobile, address, category, created_at) VALUES (?, ?, ?, ?, ?, ?)`;
    const insertParams = [username, email, mobile, address, category, dateTime];
    db.query(insertQuery, insertParams, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error saving trial data",
          error: err.message,
        });
      }

      res.status(200).json({
        success: true,
        message: "Trial data saved successfully",
        id: result.insertId,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const getAllTrialData = (req, res) => {
  try {
    const selectQuery = `SELECT * FROM trial_data ORDER BY trial_id DESC`;
    db.query(selectQuery, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error fetching trial data",
          error: err.message,
        });
      }

      res.status(200).send(result);
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  bookDemo,
  getbookDemo,
  sendOtpEmail,
  loginUserWithOTP,
  verifyOtpAndLogin,
  contact,
  getContacts,
  saveTrialData,
  getAllTrialData,
};
