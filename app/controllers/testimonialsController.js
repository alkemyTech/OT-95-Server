const service = require("../services/testimonials");
const codeStatus = require("../constants/constants");
const messages = require("../constants/messages");

module.exports = {

    getAll : async (req,res) => {
        try {
            const testimonials = await service.getAll();
    
            testimonials.length > 0 ? res.status(codeStatus.RESPONSE_OK).json(testimonials) : res.status(codeStatus.RESPONSE_OK_NO_CONTENT).json(messages.RESPONSE_OK_NO_CONTENT)
        } catch (err) {
            console.log(err);
            res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR)
        }
    },
    
    getById : async (req,res) => {
        try {
            const testimonial = await service.getById(req.params.id)
    
            if(testimonial){
                res.status(codeStatus.RESPONSE_OK).json(testimonial)
            }else{
                res.status(codeStatus.RESPONSE_OK_NO_CONTENT).json(messages.RESPONSE_OK_NO_CONTENT)
            }
        } catch (err) {
            console.log(err);
            res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR)
        }
    },

    create : (req,res) => {
        try {
            const testimonialCreated = await service.create(req.body)

            if(testimonialCreated){
                res.status(codeStatus.RESPONSE_OK_CREATED).json(messages.RESPONSE_OK_CREATED)
            }else{
                res.status(codeStatus.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR)
            }
        } catch (err) {
            console.log(err);
            res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR)
        }
    },

    update : (req,res) => {
        try {
            const testimonial = await service.getById(req.params.id)

            testimonial ? await service.update(req.body,req.params.id) : res.status(codeStatus.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR)

            res.status(codeStatus.RESPONSE_OK).json(messages.RESPONSE_OK)
        } catch (err) {
            console.log(err);
            res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR)
        }
    },

    destroy : (req,res) =>{
        try {
            const testimonial = await service.getById(req.params.id)
            
            testimonial ? await service.destroy(req.params.id) : res.status(codeStatus.BAD_REQUEST_ERROR).json(messages.BAD_REQUEST_ERROR)

            res.status(codeStatus.RESPONSE_OK).json(messages.RESPONSE_OK)
        } catch (err) {
            console.log(err);
            res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR)
        }
    }


}
