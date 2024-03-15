const cardData = require("../models/card");

const getAllCards = (req, res) => {
  res.json(cardData);
};

const getOneCard = (req, res) => {
  let card = cardData.find((card) => card.id == req.params.id);
  res.json(card);
};

const createOneCard = (req, res) => {
  let id = cardData.length + 1;
  const newCard = {
    id: id,
    address: req.body.address,
    neighborhood: req.body.neighborhood,
    squarefeet: req.body.squarefeet,
    parking: req.body.parking,
    publicTranspo: req.body.publicTranspo,
    price: req.body.price,
  };
  cardData.push(newCard);
  let url = req.headers.origin + "/owner-property.html";
  res.redirect(url);
};

const editOneCard = (req, res) => {
  cardData.forEach((card) => {
    if (card.id == req.params.id) {
      card.address = req.body.address;
      card.neighborhood = req.body.neighborhood;
      card.squarefeet = req.body.squarefeet;
      card.parking = req.body.parking;
      card.publicTranspo = req.body.publicTranspo;
      card.price = req.body.price;
    }
  });
  res.json(cardData);
};

const deleteOneCard = (req, res) => {
  let index = cardData.findIndex((card) => card.id == req.params.id);
  cardData.splice(index, 1);
  res.json(cardData);
};

module.exports = {
  getAllCards,
  getOneCard,
  createOneCard,
  editOneCard,
  deleteOneCard,
};
