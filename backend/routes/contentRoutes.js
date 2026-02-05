const express = require("express");
const router = express.Router();
const Content = require("../models/Content");

// GET landing page content
router.get("/content", async (req, res) => {
  let data = await Content.findOne();

  // create default data if not exists
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
});

/*
========================================
PUT HERO SECTION
========================================
*/
router.put("/content/hero", async (req, res) => {
  const content = await Content.findOne();
  if (!content) return res.status(404).json({ message: "Content not found" });

  content.hero = req.body;
  await content.save();

  res.json({ message: "Hero updated", hero: content.hero });
});

/*
========================================
PUT ABOUT SECTION
========================================
*/
router.put("/content/about", async (req, res) => {
  const content = await Content.findOne();
  if (!content) return res.status(404).json({ message: "Content not found" });

  content.about = req.body;
  await content.save();

  res.json({ message: "About updated", about: content.about });
});

/*
========================================
PUT OFFERS SECTION
========================================
*/
router.put("/content/offers", async (req, res) => {
  const content = await Content.findOne();
  if (!content) return res.status(404).json({ message: "Content not found" });

  content.offers = req.body; // must be array
  await content.save();

  res.json({ message: "Offers updated", offers: content.offers });
});

module.exports = router;
