const status = require('../constants/constants');
const messages = require('../constants/messages');
// const {
//     getMemberById,
//     getMembers,
//     createMember,
//     updateMember,
//     destroyMember
// } = require ('??')

const getById = async (req, res) => {
    try {
        const member = await getMemberById(req.params.id);

        if(!member) {
            return res.status(status.NOT_FOUND_ERROR).json({ message: messages.NOT_FOUND_ERROR });
        }

        res.status(status.RESPONSE_OK).json(member);
    } catch (error) {
        console.log(error);
        res.status(status.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
}

const getAll = async (req, res) => {
    try {
        const members = await getMembers();

        if (!members) {
            return res.status(status.NOT_FOUND_ERROR).json({ message: messages.NOT_FOUND_ERROR });
        }

        res.status(status.RESPONSE_OK).json(members);
    } catch (error) {
        console.log(error);
        res.status(status.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
}

const create = async (req, res) => {
    try {
        const createdMember = await createMember(req.body);

        res.status(status.RESPONSE_OK_CREATED).json({ message: messages.RESPONSE_OK_CREATED });
    } catch (error) {
        console.log(error);
        res.status(status.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
}

const update = async (req, res) => {
    try {
        const updatedMember = await updateMember(req.params.id, req.body);

        res.status(status.RESPONSE_OK).json({ message: messages.RESPONSE_OK });
    } catch (error) {
        console.log(error);
        res.status(status.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
}

const destroy = async (req, res) => {
    try {
        const destroyedMember = destroyMember(req.params.id);

        res.status(status.RESPONSE_OK).json({ message: messages.RESPONSE_OK });
    } catch (error) {
        console.log(error);
        res.status(status.INTERNAL_ERROR).json({ message: messages.INTERNAL_ERROR });
    }
}

module.exports = {
    getById,
    getAll,
    create,
    update,
    destroy,
}