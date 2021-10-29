const testimonials = require("../models/testimonial");

module.exports = {

  getAll : async () => await testimonials.findAll(),

  getById : async (id) => await testimonials.findByPk(id),

  create : async (name,image,content) => await testimonials.create({
    name : name,
    image : image || null,
    content : content || null
  }),

  update : async (id,name,image,content) => await testimonials.update({
    name,
    image : image || null,
    content : content || null
  },{
    where : {
      id : id
    }
  }),
  
  destroy : async (id) => await testimonials.destroy({ where : { id : id }})
  
}