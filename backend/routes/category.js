const Category = require("../models/category");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();
// create
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const saveCategory = await newCategory.save();
    res.status(200).json(saveCategory);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updateCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});
// DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json("Category has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET Category BY ID
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const Category = await Category.findById(req.params.id);
    const { password, ...others } = Category._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET Category ALL
router.get("/", verifyTokenAndAuthorization, async (req, res) => {
  const query = req.query.new;
  try {
    const categories = query
      ? await Category.find().sort({ _id: 1 }).limit(1)
      : await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});
// // GET Category STARTS order by  Month
// router.get("/starts", verifyTokenAndAdmin, async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear - 1));
//   try {
//     data = await Category.aggregate([
//       {
//         $match: { createdAt: { $gte: lastYear } },
//       },
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
module.exports = router;
