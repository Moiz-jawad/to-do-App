const app = require("./app");

const PORT = process.env.PORT || 8000;

// ! live server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
