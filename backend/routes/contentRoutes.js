const express = require("express");
const router = express.Router();
const Content = require("../models/Content");

// GET landing page content
router.get("/content", async (req, res) => {
  try {
    let data = await Content.findOne();

    // Create default content if DB is empty
    if (!data) {
      data = await Content.create({
        hero: {
          title: "Welcome",
          subtitle: "Your journey starts here",
          image: "https://picsum.photos/1200/800",
        },
        about: {
          title: "About Us",
          description: "Simple MERN landing page.",
        },
        offers: [
          { title: "Offer 1", description: "Description 1" },
          { title: "Offer 2", description: "Description 2" },
          { title: "Offer 3", description: "Description 3" },
        ],
      });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE offers
router.put("/offers", async (req, res) => {
  try {
    const { offers } = req.body;

    // Validate input
    if (!offers || !Array.isArray(offers)) {
      return res.status(400).json({ message: "Offers must be an array" });
    }

    // Find first content document and update offers
    const updatedContent = await Content.findOneAndUpdate(
      {}, // find the single landing page document
      { offers }, // replace offers array
      { new: true }, // return updated document
    );

    // If no content exists yet, create it
    if (!updatedContent) {
      const created = await Content.create({
        hero: {
          title: "Welcome",
          subtitle: "Your journey starts here",
          image: "https://picsum.photos/1200/800",
        },
        about: {
          title: "About Us",
          description: "Simple MERN landing page.",
        },
        offers,
      });

      return res.json(created);
    }

    res.json(updatedContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
